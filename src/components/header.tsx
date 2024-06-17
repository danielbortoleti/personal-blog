"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/posts",
        label: "Posts",
    }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div className="relative w-[80px] h-[80px]">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              objectFit="contain"
            />
          </div>
        </Link>
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-800">FRESH TECH.</h1>
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={`${
                pathname === link.href ? "text-zinc-900" : "text-zinc-400"
              }`} href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
