import { BadgeCheck, LayoutGrid, Sparkles, TrendingUp } from "lucide-react";
import { WHY_REASONS } from "@/lib/mock/mock-homepage";

const ICONS = { Sparkles, LayoutGrid, BadgeCheck, TrendingUp } as const;

export function WhySection() {
  return (
    <section aria-labelledby="why-heading" className="py-12 sm:py-16">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2
            id="why-heading"
            className="text-2xl font-bold text-neutral-900 sm:text-3xl"
          >
            Why Choose G2Earth?
          </h2>
          <p className="mt-3 text-neutral-500">
            A considered way to discover useful products for everyday life.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {WHY_REASONS.map(({ icon, title, description }) => {
            const Icon = ICONS[icon];
            return (
            <li
              key={title}
              className="rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-sm"
            >
              <div
                aria-hidden="true"
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600"
              >
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {description}
              </p>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
