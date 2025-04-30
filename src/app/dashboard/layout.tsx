"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Perfil" },
  { href: "/dashboard/orders", label: "Órdenes" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <section className="bg-gray-50 w-full">
      <nav className="bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center space-x-8 border-b border-neutral-700 py-4">
            {navItems
              .filter((item) => item.href !== pathname)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-300 hover:text-white transition font-medium"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-6">{children}</div>
    </section>
  );
}
