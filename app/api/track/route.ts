import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { route, isNewSession, isBounceResolved } = await req.json();
    
    // Increment total views
    await redis.incr("page_views");
    
    // Increment route specific views
    if (route) {
      await redis.hincrby("route_views", route, 1);
    }

    if (isNewSession) {
      await redis.incr("total_sessions");
    }

    if (isBounceResolved) {
      await redis.incr("resolved_bounces");
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to track view:", error);
    return NextResponse.json({ error: "Failed to track view" }, { status: 500 });
  }
}
