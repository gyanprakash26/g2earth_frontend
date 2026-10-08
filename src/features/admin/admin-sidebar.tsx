"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Package, Tag, Award, Warehouse, ShoppingBag,
  Users, CreditCard, RotateCcw, RefreshCw, Ticket, Star, BarChart2, Settings, X,
} from "lucide-react";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: ROUTES.admin.dashboard, icon: LayoutDashboard },
  { label: "Products", href: ROUTES.admin.products, icon: Package },
  { label: "Categories", href: ROUTES.admin.categories, icon: Tag },
  { label: "Brands", href: ROUTES.admin.brands, icon: Award },
  { label: "Inventory", href: ROUTES.admin.inventory, icon: Warehouse },
  { label: "Orders", href: ROUTES.admin.orders, icon: ShoppingBag },
  { label: "Customers", href: ROUTES.admin.customers, icon: Users },
  { label: "Payments", href: ROUTES.admin.payments, icon: CreditCard },
  { label: "Returns", href: ROUTES.admin.returns, icon: RotateCcw },
  { label: "Refunds", href: ROUTES.admin.refunds, icon: RefreshCw },
  { label: "Coupons", href: ROUTES.admin.coupons, icon: Ticket },
  { label: "Reviews", href: ROUTES.admin.reviews, icon: Star },
  { label: "Reports", href: ROUTES.admin.reports, icon: BarChart2 },
  { label: "Settings", href: ROUTES.admin.settings, icon: Settings },
];

interface AdminSidebarProps {
  onClose?: () => void;
}

export function AdminSidebar({ onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-60 flex-col bg-neutral-900">
      <div className="flex h-16 items-center justify-between px-4 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-600">
            <span className="text-xs font-bold text-white">G2</span>
          </div>
          <span className="text-sm font-semibold text-white">G2Earth Admin</span>
        </div>
        {onClose && (
          <button onClick={onClose} className="text-neutral-400 hover:text-white lg:hidden" aria-label="Close menu">
            <X size={18} />
          </button>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-2" aria-label="Admin navigation">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href || (href !== ROUTES.admin.dashboard && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors mb-0.5",
                isActive
                  ? "bg-green-600 text-white"
                  : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
              )}
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
