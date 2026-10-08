"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    // TODO: POST /api/v1/newsletter/subscribe
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
    setEmail("");
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="border-t border-neutral-200 bg-white py-12 sm:py-16"
    >
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <div
            aria-hidden="true"
            className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600"
          >
            <Mail size={22} />
          </div>
          <h2
            id="newsletter-heading"
            className="text-2xl font-bold text-neutral-900"
          >
            Stay in the loop.
          </h2>
          <p className="mt-2 text-neutral-500">
            Get updates about new products, collections and offers.
          </p>

          {status === "success" ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-6 rounded-xl border border-green-200 bg-green-50 px-6 py-4"
            >
              <p className="font-semibold text-green-700">You&apos;re subscribed!</p>
              <p className="mt-1 text-sm text-green-600">
                Thanks for joining. Watch your inbox for great deals.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex gap-2"
              aria-label="Newsletter signup"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading"}
                className="h-11 flex-1 rounded-lg border border-neutral-300 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="h-11 rounded-lg bg-green-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 disabled:opacity-60"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p role="alert" className="mt-3 text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}

          <p className="mt-3 text-xs text-neutral-400">Demo form only. Subscription service will be connected later.</p>
        </div>
      </div>
    </section>
  );
}
