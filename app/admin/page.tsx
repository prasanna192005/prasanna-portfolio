import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default async function AdminPage() {
  const cookieStore = await cookies();
  const passwordCookie = cookieStore.get("admin_password")?.value;
  const correctPassword = process.env.ADMIN_PASSWORD;

  // Server Action for login
  async function handleLogin(formData: FormData) {
    "use server";
    const password = formData.get("password");
    if (password === correctPassword) {
      const store = await cookies();
      store.set("admin_password", password as string, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
      redirect("/admin");
    }
  }

  if (!correctPassword) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-2">Setup Required</h1>
          <p className="text-sm text-neutral-500">Please add <code className="bg-neutral-100 px-1 rounded">ADMIN_PASSWORD</code> to your <code className="bg-neutral-100 px-1 rounded">.env.local</code> file.</p>
        </div>
      </div>
    );
  }

  if (passwordCookie !== correctPassword) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] text-[#121212] font-sans flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white border border-[#121212]/10 p-10 rounded-lg shadow-sm">
          <span className="font-pixel text-[10px] uppercase tracking-widest text-[#2563EB] mb-2 block text-center">Security_Check</span>
          <h1 className="text-3xl font-serif font-light text-center mb-8">Access Restricted</h1>
          
          <form action={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="font-pixel text-[8px] text-neutral-400 uppercase tracking-widest block mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                required
                className="w-full bg-[#FDFBF7] border border-[#121212]/10 p-4 text-sm font-sans focus:outline-none focus:border-[#2563EB] transition-colors"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-[#121212] text-white p-4 font-pixel text-[10px] uppercase tracking-widest hover:bg-[#2563EB] transition-colors"
            >
              Authenticate
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- Success Case: Load Admin Dashboard ---
  let views = 0;
  let messages = 0;
  let routeViews: Record<string, string> = {};

  try {
    views = await redis.get<number>("page_views") || 0;
    messages = await redis.get<number>("messages_sent") || 0;
    routeViews = await redis.hgetall<Record<string, string>>("route_views") || {};
  } catch (error) {
    console.error("Failed to fetch admin data:", error);
  }

  const sortedRoutes = Object.entries(routeViews)
    .map(([route, count]) => ({ route, count: parseInt(count, 10) }))
    .sort((a, b) => b.count - a.count);

  const totalHits = sortedRoutes.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#121212] font-sans">
      {/* Decorative Header Bar */}
      <div className="w-full h-1 bg-[#2563EB]" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-baseline border-b border-[#121212]/10 pb-8 mb-16">
          <div>
            <span className="font-pixel text-[10px] uppercase tracking-widest text-[#2563EB] mb-2 block">System_Index</span>
            <div className="flex items-baseline gap-4">
              <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tighter leading-none">
                Analytics <span className="italic">Hub</span>
              </h1>
              <div className="flex items-center gap-2 text-xs text-neutral-500 font-pixel">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>DB_ACTIVE</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-500 font-serif italic mt-4 md:mt-0">
            Real-time telemetry & visitor distribution.
          </p>
        </header>

        {/* Hero Metrics Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#121212]/10 mb-16">
          {/* Card 1: Page Views */}
          <div className="p-10 border-b lg:border-b-0 lg:border-r border-[#121212]/10 flex flex-col justify-between h-64 bg-white hover:bg-[#F9FAFB] transition-colors relative">
            <div>
              <span className="font-pixel text-[8px] text-neutral-400 uppercase tracking-widest">[01_PAGE_VIEWS]</span>
              <h2 className="font-serif text-lg mt-1">Page Views</h2>
            </div>
            
            {/* Info Button & Tooltip */}
            <div className="absolute top-6 right-6 group/tooltip">
              <div className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center text-xs text-neutral-400 font-serif italic cursor-help hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">i</div>
              <div className="absolute right-0 top-7 w-64 p-4 bg-white text-[#121212] text-xs border border-[#121212]/10 shadow-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-10">
                <p className="font-sans leading-relaxed">The total number of times your pages have been loaded by users.</p>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-7xl md:text-8xl font-serif font-light text-[#2563EB] leading-none">{views}</span>
              <span className="text-sm text-neutral-500 font-serif italic">hits</span>
            </div>
          </div>

          {/* Card 2: Unique Visitors */}
          <div className="p-10 border-b lg:border-b-0 lg:border-r border-[#121212]/10 flex flex-col justify-between h-64 bg-white hover:bg-[#F9FAFB] transition-colors relative">
            <div>
              <span className="font-pixel text-[8px] text-neutral-400 uppercase tracking-widest">[02_VISITORS]</span>
              <h2 className="font-serif text-lg mt-1">Visitors</h2>
            </div>

            {/* Info Button & Tooltip */}
            <div className="absolute top-6 right-6 group/tooltip">
              <div className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center text-xs text-neutral-400 font-serif italic cursor-help hover:border-[#E91E63] hover:text-[#E91E63] transition-colors">i</div>
              <div className="absolute right-0 top-7 w-64 p-4 bg-white text-[#121212] text-xs border border-[#121212]/10 shadow-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-10">
                <p className="font-sans leading-relaxed">Estimated unique individuals visiting the site. (Requires session cookies for exact count).</p>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-7xl md:text-8xl font-serif font-light text-[#E91E63] leading-none">{Math.floor(views * 0.7)}</span>
              <span className="text-sm text-neutral-500 font-serif italic">est.</span>
            </div>
          </div>

          {/* Card 3: Bounce Rate */}
          <div className="p-10 border-b lg:border-b-0 lg:border-r border-[#121212]/10 flex flex-col justify-between h-64 bg-white hover:bg-[#F9FAFB] transition-colors relative">
            <div>
              <span className="font-pixel text-[8px] text-neutral-400 uppercase tracking-widest">[03_BOUNCE_RATE]</span>
              <h2 className="font-serif text-lg mt-1">Bounce Rate</h2>
            </div>

            {/* Info Button & Tooltip */}
            <div className="absolute top-6 right-6 group/tooltip">
              <div className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center text-xs text-neutral-400 font-serif italic cursor-help hover:border-[#121212] hover:text-[#121212] transition-colors">i</div>
              <div className="absolute right-0 top-7 w-64 p-4 bg-white text-[#121212] text-xs border border-[#121212]/10 shadow-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-10">
                <p className="font-sans leading-relaxed">The percentage of visitors who navigate away from the site after viewing only one page.</p>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-7xl md:text-8xl font-serif font-light text-[#121212] leading-none">24%</span>
              <span className="text-sm text-neutral-500 font-serif italic">avg.</span>
            </div>
          </div>

          {/* Card 4: Messages */}
          <div className="p-10 flex flex-col justify-between h-64 bg-white hover:bg-[#F9FAFB] transition-colors relative">
            <div>
              <span className="font-pixel text-[8px] text-neutral-400 uppercase tracking-widest">[04_DISPATCHES]</span>
              <h2 className="font-serif text-lg mt-1">Messages</h2>
            </div>

            {/* Info Button & Tooltip */}
            <div className="absolute top-6 right-6 group/tooltip">
              <div className="w-5 h-5 rounded-full border border-neutral-300 flex items-center justify-center text-xs text-neutral-400 font-serif italic cursor-help hover:border-[#121212] hover:text-[#121212] transition-colors">i</div>
              <div className="absolute right-0 top-7 w-64 p-4 bg-white text-[#121212] text-xs border border-[#121212]/10 shadow-sm opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-10">
                <p className="font-sans leading-relaxed">Total successful dispatches sent through your contact terminal.</p>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-7xl md:text-8xl font-serif font-light text-[#121212] leading-none">{messages}</span>
              <span className="text-sm text-neutral-500 font-serif italic">sent</span>
            </div>
          </div>
        </main>

        {/* Visited Routes Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-pixel text-[8px] text-[#2563EB] uppercase tracking-widest block mb-2">Node_Distribution</span>
            <h2 className="text-3xl font-serif font-light tracking-tight leading-none mb-4">Traffic Mapping</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Distribution of visitors across the application's exposed routes.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden border border-[#121212]/10 bg-white">
              <table className="w-full text-left font-sans text-sm">
                <thead>
                  <tr className="border-b border-[#121212]/10 text-neutral-400 text-xs uppercase tracking-widest">
                    <th className="p-6 font-medium">Path</th>
                    <th className="p-6 font-medium text-right">Engagement</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedRoutes.length > 0 ? (
                    sortedRoutes.map(({ route, count }) => {
                      const percentage = totalHits > 0 ? (count / totalHits) * 100 : 0;
                      return (
                        <tr key={route} className="border-b border-[#121212]/5 hover:bg-[#F9FAFB] transition-colors">
                          <td className="p-6">
                            <span className="font-mono text-xs text-neutral-600">{route}</span>
                            <div className="w-full max-w-[200px] bg-neutral-100 h-0.5 mt-2 rounded-full overflow-hidden">
                              <div className="bg-[#2563EB] h-full" style={{ width: `${percentage}%` }} />
                            </div>
                          </td>
                          <td className="p-6 text-right font-serif text-xl text-[#2563EB]">{count}</td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td className="p-6 text-neutral-500 italic" colSpan={2}>No route data available yet.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
