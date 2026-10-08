"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ROUTES } from "@/lib/constants";
import { mockFaqItems } from "@/lib/mock";
import { useState } from "react";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-stone-900">
        {question}<ChevronDown size={18} aria-hidden="true" className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 pr-8 text-sm leading-relaxed text-stone-600">{answer}</p>}
    </div>
  );
}

export function FaqPreviewSection() {
  return (
    <section aria-labelledby="faq-heading" className="py-12 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2
              id="faq-heading"
              className="text-2xl font-bold text-neutral-900 sm:text-3xl"
            >
              Frequently Asked Questions
            </h2>
            <Link
              href={ROUTES.faq}
              className="flex shrink-0 items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700"
            >
              All FAQs <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="border-t border-stone-200">
            {mockFaqItems.slice(0, 5).map((item) => <FaqItem key={item.id} question={item.question} answer={item.answer} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
