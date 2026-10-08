import { buildMetadata } from "@/lib/seo";
import { faqJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({ title: "FAQ", description: "Frequently asked questions about G2Earth.", path: "/faq" });

const FAQS = [
  { question: "What is the delivery time?", answer: "We deliver within 3–7 business days across India. Metro cities may receive orders faster." },
  { question: "Do you offer Cash on Delivery?", answer: "Yes, COD is available on eligible orders above ₹299." },
  { question: "How do I track my order?", answer: "You will receive a tracking link via SMS and email once your order is shipped. You can also track from My Account > Orders." },
  { question: "What is your return policy?", answer: "We offer a 7-day return policy on most products. Items must be unused and in original packaging." },
  { question: "Are your products authentic?", answer: "Yes. All products on G2Earth are 100% authentic and sourced directly from trusted suppliers and farms." },
  { question: "How do I apply a coupon?", answer: "Enter your coupon code in the cart page before proceeding to checkout." },
  { question: "Is my payment information secure?", answer: "Yes. We use industry-standard payment gateways. We never store your card details." },
  { question: "Can I cancel my order?", answer: "Orders can be cancelled before they are shipped. Visit My Account > Orders to request cancellation." },
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS.map(f => ({ question: f.question, answer: f.answer })))) }} />
      <div className="container py-10 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-neutral-900">Frequently Asked Questions</h1>
          <div className="mt-8 space-y-4">
            {FAQS.map(({ question, answer }) => (
              <div key={question} className="rounded-xl border border-neutral-200 bg-white p-5">
                <h2 className="font-semibold text-neutral-900">{question}</h2>
                <p className="mt-2 text-sm text-neutral-600">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
