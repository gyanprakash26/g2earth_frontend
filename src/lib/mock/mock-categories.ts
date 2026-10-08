import type { Category } from "@/types";

export const mockCategories: Category[] = [
  {
    id: "cat-1",
    name: "Dry Fruits & Nuts",
    slug: "dry-fruits-nuts",
    description: "Premium quality dry fruits and nuts sourced from the finest farms.",
    image: {
      id: "img-cat-1",
      url: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&q=80&auto=format&fit=crop",
      alt: "Assorted dry fruits and nuts in wooden bowls",
    },
    productCount: 48,
    isFeatured: true,
  },
  {
    id: "cat-2",
    name: "Spices & Herbs",
    slug: "spices-herbs",
    description: "Authentic spices and herbs for your kitchen.",
    image: {
      id: "img-cat-2",
      url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80&auto=format&fit=crop",
      alt: "Colourful spices in small bowls",
    },
    productCount: 32,
    isFeatured: true,
  },
  {
    id: "cat-3",
    name: "Organic Foods",
    slug: "organic-foods",
    description: "Certified organic food products for a healthier lifestyle.",
    image: {
      id: "img-cat-3",
      url: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80&auto=format&fit=crop",
      alt: "Fresh organic vegetables and fruits",
    },
    productCount: 24,
    isFeatured: true,
  },
  {
    id: "cat-4",
    name: "Superfoods",
    slug: "superfoods",
    description: "Nutrient-dense superfoods to power your day.",
    image: {
      id: "img-cat-4",
      url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80&auto=format&fit=crop",
      alt: "Healthy superfoods including seeds and berries",
    },
    productCount: 18,
    isFeatured: true,
  },
  {
    id: "cat-5",
    name: "Snacks",
    slug: "snacks",
    description: "Healthy and delicious snacks for every occasion.",
    image: {
      id: "img-cat-5",
      url: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80&auto=format&fit=crop",
      alt: "Assorted healthy snacks",
    },
    productCount: 36,
    isFeatured: false,
  },
  {
    id: "cat-6",
    name: "Beverages",
    slug: "beverages",
    description: "Natural and healthy beverages.",
    image: {
      id: "img-cat-6",
      url: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80&auto=format&fit=crop",
      alt: "Natural herbal beverages and teas",
    },
    productCount: 20,
    isFeatured: false,
  },
];
