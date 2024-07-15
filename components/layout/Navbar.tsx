"use client";
import { ThemeSwitcher } from "@/components/common/ThemeSwitcher";
import { cn } from "@/lib/utils";
import { Mail, PencilRuler, UserRoundPen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About Me", href: "/about_me", icon: UserRoundPen },
  { name: "Experience", href: "/experience", icon: PencilRuler },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex p-4">
      <div className="w-[90%] flex items-center justify-center gap-4 flex-grow">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                `flex h-[48px] items-center justify-center 
              gap-2 rounded-md p-3 text-sm font-medium
              md:flex-none md:justify-start md:p-2 md:px-3
              hover:bg-sky-200 hover:text-blue-700
              dark:hover:bg-sky-800 dark:hover:text-blue-400
              transition-colors duration-300 ease-in-out`,
                {
                  "bg-sky-100 text-blue-600 dark:bg-sky-900 dark:text-blue-400":
                    pathname === link.href,
                }
              )}
            >
              <LinkIcon className="w-6 text-gray-600" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="w-[10%] ml-auto">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
