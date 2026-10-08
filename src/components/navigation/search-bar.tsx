"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onClose?: () => void;
}

export function SearchBar({ className, placeholder = "Search products…", autoFocus, onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`${ROUTES.search}?q=${encodeURIComponent(q)}`);
    onClose?.();
  };

  return (
    <form onSubmit={handleSubmit} role="search" className={cn("relative flex items-center", className)}>
      <label htmlFor="site-search" className="sr-only">Search products</label>
      <Search size={16} className="absolute left-3 text-neutral-400 pointer-events-none" aria-hidden="true" />
      <input
        ref={inputRef}
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className="h-10 w-full rounded-lg border border-neutral-300 bg-white pl-9 pr-9 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="absolute right-3 text-neutral-400 hover:text-neutral-600"
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </form>
  );
}
