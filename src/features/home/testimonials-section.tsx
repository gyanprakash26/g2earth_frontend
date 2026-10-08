import { Rating } from "@/components/ui/rating";
import { mockTestimonials } from "@/lib/mock";
import { formatDate } from "@/lib/utils";

function AvatarInitials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  // Deterministic colour from name length
  const colours = [
    "bg-green-600",
    "bg-blue-600",
    "bg-violet-600",
    "bg-amber-600",
    "bg-rose-600",
    "bg-teal-600",
  ];
  const colour = colours[name.length % colours.length];

  return (
    <div
      aria-hidden="true"
      className={`${colour} flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white`}
    >
      {initials}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-neutral-50 py-12 sm:py-16"
    >
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2
            id="testimonials-heading"
            className="text-2xl font-bold text-neutral-900 sm:text-3xl"
          >
            What Our Customers Say
          </h2>
          <p className="mt-2 text-sm text-neutral-500">A preview of the customer voice we are building toward.</p>
        </div>

        <ul
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {mockTestimonials.map((t) => (
            <li
              key={t.id}
              className="flex flex-col rounded-xl border border-neutral-200 bg-white p-5"
            >
              <span className="mb-3 inline-flex w-fit rounded-full bg-amber-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-700">Demo testimonial</span>
              <Rating value={t.rating} size="sm" />
              <blockquote className="mt-3 flex-1">
                <p className="text-sm leading-relaxed text-neutral-600 line-clamp-4">
                  &ldquo;{t.review}&rdquo;
                </p>
              </blockquote>
              <footer className="mt-4 flex items-center gap-3 border-t border-neutral-100 pt-4">
                <AvatarInitials name={t.name} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-neutral-900">
                    {t.name}
                  </p>
                  <p className="truncate text-xs text-neutral-400">
                    {t.location} · {formatDate(t.date)}
                  </p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
