"use client";
import { ThemeSwitcher } from "@/frontend/common/ThemeSwitcher";
import { isAdmin } from "@/frontend/lib/auth/authorization";
import { cn } from "@/frontend/lib/utils";
import { useUser } from "@clerk/clerk-react";
import {
  FilePen,
  Mail,
  NotebookPen,
  PencilRuler,
  UserRoundPen,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About Me", href: "/about_me", icon: UserRoundPen },
  { name: "Experience", href: "/experience", icon: PencilRuler },
  { name: "Blog", href: "/blog-v2", icon: NotebookPen },
  { name: "Shorts", href: "/shorts", icon: ZapIcon },
  { name: "Contact", href: "/contact", icon: Mail },
  {
    name: "Blog Editor",
    href: "/admin/blog-editor",
    icon: FilePen,
    adminOnly: true,
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const { user, isLoaded } = useUser();

  const filteredLinks = links.filter((link) => {
    if (!link.adminOnly) {
      return true;
    } else {
      return isLoaded && !!user && isAdmin(user);
    }
  });

  return (
    <nav className="relative flex items-center justify-between p-4">
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        {filteredLinks.map((link) => {
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
                    pathname?.startsWith(link.href),
                }
              )}
            >
              <LinkIcon className="w-6 text-gray-400 md:text-gray-500" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="ml-auto">
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
