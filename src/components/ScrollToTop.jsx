// src/components/ScrollToTop.jsx
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    // If user navigated to a *different* route (not back/forward in history)
    if (pathname !== prevPath.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    prevPath.current = pathname;
  }, [pathname]);

  return null;
}
