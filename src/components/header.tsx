import Image from "next/image";
import Link from "next/link";

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
  return (
    <header className="flex justify-between items-center py-2 px-4 border-b">
   
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div className="relative w-[80px] h-[80px]">
            <Image
              src="/logo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-800">FRESH TECH.</h1>
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-5 text-base">
          {navLinks.map((link) => (
            <li key={link.href} className="text-gray-600 hover:text-gray-800">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

    </header>
  );
}
