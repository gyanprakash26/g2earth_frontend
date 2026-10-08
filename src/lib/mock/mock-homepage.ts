/**
 * Homepage-specific configuration data.
 * Centralises all copy, stats, and feature data used on the homepage.
 * Replace with API/CMS data when backend is live.
 */

export const HERO_CONFIG = {
  eyebrow: "G2Earth",
  heading: "Discover Better.",
  headingAccent: "Shop Smarter.",
  description:
    "Explore thoughtfully selected products designed to bring quality, value and convenience to everyday life.",
  primaryCta: { label: "Shop Now", href: "/shop" },
  secondaryCta: { label: "Explore Categories", href: "/shop" },
  /** Demo image — replace with real photography when available */
  image: {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=85&auto=format&fit=crop",
    alt: "Fresh produce and quality products arranged on a clean surface",
  },
} as const;

export const ANNOUNCEMENT_CONFIG = {
  message: "Discover quality products, delivered to your doorstep.",
  /** Set to true once a real offer is configured */
  hasOffer: false,
  offerCode: "",
  offerText: "",
} as const;

export const TRUST_FEATURES = [
  {
    id: "tf-1",
    icon: "ShieldCheck" as const,
    title: "Secure Shopping",
    description: "Your data and payments are protected",
  },
  {
    id: "tf-2",
    icon: "Package" as const,
    title: "Order Tracking",
    description: "Follow your order every step of the way",
  },
  {
    id: "tf-3",
    icon: "RefreshCw" as const,
    title: "Easy Returns",
    description: "Straightforward return process",
  },
  {
    id: "tf-4",
    icon: "MessageCircle" as const,
    title: "Responsive Support",
    description: "We're here when you need us",
  },
] as const;

export const WHY_REASONS = [
  {
    id: "why-1",
    icon: "Sparkles" as const,
    title: "Thoughtful Selection",
    description:
      "Products chosen with quality and usefulness in mind. We curate rather than simply list.",
  },
  {
    id: "why-2",
    icon: "LayoutGrid" as const,
    title: "Simple Shopping",
    description:
      "A clean, straightforward experience from browsing to checkout — no clutter, no confusion.",
  },
  {
    id: "why-3",
    icon: "BadgeCheck" as const,
    title: "Reliable Service",
    description:
      "Clear information and support throughout your order journey. We stand behind what we sell.",
  },
  {
    id: "why-4",
    icon: "TrendingUp" as const,
    title: "Growing Ecosystem",
    description:
      "Discover more categories as G2Earth expands. One platform for more of what you need.",
  },
] as const;

export const DISCOVERY_CONFIG = {
  eyebrow: "More to Discover",
  heading: "Built for Everyday Commerce.",
  description:
    "G2Earth is building a modern shopping experience where discovering products, comparing options and placing an order feels simple. We are starting with quality food products and expanding into more categories.",
  cta: { label: "Explore the Collection", href: "/shop" },
  image: {
    src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=85&auto=format&fit=crop",
    alt: "Modern e-commerce shopping experience with quality products",
  },
} as const;
