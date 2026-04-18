"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Container from "./Container";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { key: "home" as const, href: `/${locale}` },
    { key: "features" as const, href: `/${locale}#features` },
    { key: "demo" as const, href: `/${locale}#demo` },
    { key: "pricing" as const, href: `/${locale}#pricing` },
    { key: "contact" as const, href: `/${locale}#contact` },
  ];

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || "/");
    setLangOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#1f1f1f]">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5">
            <Image
              src="/pikado-mono.svg"
              alt="Pikado"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold text-white tracking-tight">Pikado</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="text-sm text-[#a0a0a0] hover:text-white transition-colors duration-150"
              >
                {t(key)}
              </Link>
            ))}
          </div>

          {/* Right: lang switcher + mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm text-[#a0a0a0] hover:text-white transition-colors duration-150 px-2 py-1 rounded border border-[#1f1f1f] hover:border-[#3d5afe]"
              >
                {locale.toUpperCase()}
                <svg
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-20 bg-[#111111] border border-[#1f1f1f] rounded-[8px] overflow-hidden shadow-lg">
                  {["en", "sr"].map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLocale(l)}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                        l === locale
                          ? "text-[#3d5afe] bg-[#1a1a2e]"
                          : "text-[#a0a0a0] hover:text-white hover:bg-[#1f1f1f]"
                      }`}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-[#a0a0a0] transition-all ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#a0a0a0] transition-all ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#a0a0a0] transition-all ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#1f1f1f] py-4 flex flex-col gap-4">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-[#a0a0a0] hover:text-white transition-colors"
              >
                {t(key)}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
}
