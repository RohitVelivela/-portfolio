"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { config } from "@/data/config";
import Image from "next/image";

const LINKS = [
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const Header = () => {
  const activeRoute = usePathname();
  return (
    <div className="w-screen flex justify-between items-center h-[60px] container-xl mx-auto px-4 absolute top-0">
      <div className="absolute top-0 left-2">
        <Logo />
      </div>
      <nav className="flex-1 flex justify-center">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`p-4 text-sm duration-500 text-zinc-500 hover:text-zinc-300 ${
              activeRoute === link.href ? "text-zinc-200" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href={config.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <Image
            src="/assets/icons/github.svg"
            alt="GitHub"
            width={20}
            height={20}
            className="w-full h-full"
          />
        </Link>
        <Link
          href={config.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <Image
            src="/assets/icons/linkedin.svg"
            alt="LinkedIn"
            width={20}
            height={20}
            className="w-full h-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
