"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Module-level variables to prevent duplicate tracks on React StrictMode mount
let lastTrackedPath = "";
let lastTrackedTime = 0;

export default function RouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Avoid tracking admin console page views and API requests
    if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
      return;
    }

    // Ignore immediate double-triggers of the same pathname (typical of React 18/19 StrictMode in dev)
    const now = Date.now();
    if (pathname === lastTrackedPath && now - lastTrackedTime < 100) {
      return;
    }
    lastTrackedPath = pathname;
    lastTrackedTime = now;

    let isNewSession = false;
    let isBounceResolved = false;

    try {
      const sessionTracked = sessionStorage.getItem("session_tracked");
      if (!sessionTracked) {
        sessionStorage.setItem("session_tracked", "true");
        sessionStorage.setItem("session_page_views", "1");
        isNewSession = true;
      } else {
        const pageViews = sessionStorage.getItem("session_page_views") || "0";
        if (pageViews === "1") {
          sessionStorage.setItem("session_page_views", "2");
          isBounceResolved = true;
        } else {
          const currentViews = parseInt(pageViews, 10);
          sessionStorage.setItem("session_page_views", (currentViews + 1).toString());
        }
      }
    } catch (e) {
      console.warn("sessionStorage not available:", e);
    }

    fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        route: pathname,
        isNewSession,
        isBounceResolved
      }),
    }).catch((err) => console.error("Route tracking failed:", err));
  }, [pathname]);

  return null;
}

