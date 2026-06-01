"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Avoid tracking admin console page views and API requests
    if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
      return;
    }

    fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ route: pathname }),
    }).catch((err) => console.error("Route tracking failed:", err));
  }, [pathname]);

  return null;
}
