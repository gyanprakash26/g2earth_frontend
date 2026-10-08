"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, User, Search, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./logo";
import { SearchBar } from "./search-bar";
import { useCartStore } from "@/store/cart-store";
import { useUIStore } from "@/store/ui-store";
import { ROUTES } from "@/lib/constants";
import { ANNOUNCEMENT_CONFIG } from "@/lib/mock/mock-homepage";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

const NAV_LINKS = [
  { label: "Offers", href: `${ROUTES.shop}?sort=price-asc`, hasDropdown: false },
];

function CartButton() {
  const { cart, openCart } = useCartStore();
  return (
    <button
      onClick={openCart}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg text-stone-600 transition-colors hover:bg-stone-100"
      aria-label={`Cart${cart.itemCount > 0 ? ` — ${cart.itemCount} item${cart.itemCount !== 1 ? "s" : ""}` : ", empty"}`}
    >
      <ShoppingCart size={20} />
      {cart.itemCount > 0 && (
        <span
          aria-hidden="true"
          className="absolute -right-0.5 -top-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-600 text-[10px] font-bold leading-none text-white"
        >
          {cart.itemCount > 9 ? "9+" : cart.itemCount}
        </span>
      )}
    </button>
  );
}

export function Header() {
  const pathname = usePathname();
  const { mobileMenuOpen, searchOpen, openMobileMenu, closeMobileMenu, openSearch, closeSearch } =
    useUIStore();

  return (
    <>
      {/* ── Announcement bar ─────────────────────────────────────── */}
      <div
        role="banner"
        className="bg-green-700 px-4 py-2 text-center text-xs font-medium text-white"
      >
        {ANNOUNCEMENT_CONFIG.message}
      </div>

      {/* ── Main header ──────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-md">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-green-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>

        <div className="container">
          <div className="flex h-16 items-center gap-3 lg:gap-6">
            {/* Logo */}
            <Logo className="shrink-0" />

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === ROUTES.shop
                    ? pathname.startsWith("/shop") || pathname.startsWith("/category") || pathname.startsWith("/product")
                    : pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-green-50 text-green-700"
                        : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown size={14} aria-hidden="true" className="opacity-50" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop search */}
            <div className="hidden flex-1 lg:block" style={{ maxWidth: "380px" }}>
              <SearchBar />
            </div>

            {/* Actions */}
            <div className="ml-auto flex items-center gap-0.5">
              {/* Mobile search */}
              <button
                onClick={searchOpen ? closeSearch : openSearch}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-stone-600 transition-colors hover:bg-stone-100 lg:hidden"
                aria-label={searchOpen ? "Close search" : "Open search"}
                aria-expanded={searchOpen}
              >
                {searchOpen ? <X size={20} /> : <Search size={20} />}
              </button>

              {/* Wishlist */}
              <Link
                href={ROUTES.wishlist}
                className="hidden h-9 w-9 items-center justify-center rounded-lg text-stone-600 transition-colors hover:bg-stone-100 sm:flex"
                aria-label="Wishlist"
              >
                <Heart size={20} />
              </Link>

              {/* Account */}
              <Link
                href={ROUTES.auth.login}
                className="hidden h-9 w-9 items-center justify-center rounded-lg text-stone-600 transition-colors hover:bg-stone-100 sm:flex"
                aria-label="Account"
              >
                <User size={20} />
              </Link>

              {/* Cart */}
              <CartButton />

              {/* Mobile menu toggle */}
              <button
                onClick={mobileMenuOpen ? closeMobileMenu : openMobileMenu}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-stone-600 transition-colors hover:bg-stone-100 lg:hidden"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                key="mobile-search"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden border-t border-stone-100 lg:hidden"
              >
                <div className="py-3">
                  <SearchBar autoFocus onClose={closeSearch} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-[calc(theme(spacing.8)+theme(spacing.16))] z-30 bg-black/20 lg:hidden"
                onClick={closeMobileMenu}
                aria-hidden="true"
              />
              {/* Panel */}
              <motion.div
                id="mobile-menu"
                key="mobile-menu"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="absolute left-0 right-0 top-full z-40 border-t border-stone-100 bg-white shadow-lg lg:hidden"
              >
                <nav
                  className="container flex flex-col gap-0.5 py-4"
                  aria-label="Mobile navigation"
                >
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-stone-100" />
                  <Link
                    href={ROUTES.auth.login}
                    onClick={closeMobileMenu}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
                  >
                    My Account
                  </Link>
                  <Link
                    href={ROUTES.wishlist}
                    onClick={closeMobileMenu}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-stone-50"
                  >
                    Wishlist
                  </Link>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
