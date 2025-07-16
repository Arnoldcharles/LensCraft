"use client";

import Link from "next/link";
import PageWrapper from "./components/PageWrapper";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <div className="preloader">
          <h1 className="logo">LensCraft</h1>
        </div>
      ) : (
        <PageWrapper>
          <section className="hero">
            <h1>Capturing Life’s Precious Moments</h1>
            <p>Through the lens of creativity and emotion</p>
            <Link href="/portfolio">View Portfolio</Link>
          </section>
        </PageWrapper>
      )}
    </>
  );
}
