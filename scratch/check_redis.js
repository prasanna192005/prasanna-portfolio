const { Redis } = require("@upstash/redis");

// Read from .env.local file
const fs = require("fs");
const path = require("path");

const envPath = path.join(__dirname, "..", ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");

const config = {};
envContent.split("\n").forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || "";
    // Remove quotes
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    config[match[1]] = value;
  }
});

const redis = new Redis({
  url: config.UPSTASH_REDIS_REST_URL,
  token: config.UPSTASH_REDIS_REST_TOKEN,
});

async function run() {
  try {
    const views = await redis.get("page_views");
    const totalSessions = await redis.get("total_sessions");
    const resolvedBounces = await redis.get("resolved_bounces");
    const messages = await redis.get("messages_sent");
    const routeViews = await redis.hgetall("route_views");

    console.log("=== TELEMETRY DATA ===");
    console.log("page_views:", views);
    console.log("total_sessions:", totalSessions);
    console.log("resolved_bounces:", resolvedBounces);
    console.log("messages_sent:", messages);
    console.log("route_views:", routeViews);

    if (totalSessions > 0) {
      const bounces = Math.max(0, totalSessions - resolvedBounces);
      const calculatedBounceRate = Math.round((bounces / totalSessions) * 100);
      console.log("Calculated Bounce Rate:", calculatedBounceRate + "%");
    } else {
      console.log("Calculated Bounce Rate: No sessions recorded yet");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

run();
