"use client";

import { useState } from "react";
import { Menu, Bell, User, LogOut } from "lucide-react";
import { AdminSidebar } from "@/features/admin/admin-sidebar";
import { Drawer } from "@/components/ui/drawer";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-neutral-100">
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:shrink-0">
        <AdminSidebar />
      </div>

      {/* Mobile sidebar drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} side="left" className="w-60 p-0 bg-neutral-900">
        <AdminSidebar onClose={() => setDrawerOpen(false)} />
      </Drawer>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-4 shrink-0">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100" aria-label="Notifications">
              <Bell size={18} />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100" aria-label="Account">
              <User size={18} />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100" aria-label="Logout">
              <LogOut size={18} />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
