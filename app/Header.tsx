"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " scrolled" : ""}`}
      id="header"
    >
      <nav className="site-nav">
        <Link
          href="/"
          className="site-nav__logo"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Elouan's Portfolio
        </Link>
        <ul className="site-nav__links">
          <li>
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projets"
              aria-current={pathname === "/projets" ? "page" : undefined}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
