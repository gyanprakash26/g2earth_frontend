/**
 * Mock FAQ data.
 * In production this will come from GET /api/v1/faq or a CMS.
 * Do not put final legal policy text here — use neutral demo answers.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const mockFaqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "How do I place an order?",
    answer:
      "Browse our catalogue, add items to your cart, and proceed to checkout. You will need to create an account or sign in to complete your order.",
  },
  {
    id: "faq-2",
    question: "What payment methods will be available?",
    answer:
      "We are building support for UPI, credit/debit cards, net banking, and Cash on Delivery. Payment options will be confirmed at checkout.",
  },
  {
    id: "faq-3",
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking link via SMS and email. You can also view order status from My Account → Orders.",
  },
  {
    id: "faq-4",
    question: "What is the return policy?",
    answer:
      "We aim to offer a straightforward return process. Specific return windows and conditions will be detailed on our Return & Refund Policy page.",
  },
  {
    id: "faq-5",
    question: "How can I contact G2Earth?",
    answer:
      "You can reach us via the Contact page. We aim to respond to all queries within one business day.",
  },
];
