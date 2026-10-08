export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  /** Demo flag — these are placeholder testimonials, not verified customer reviews */
  isDemo: true;
}

export const mockTestimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Priya Menon",
    location: "Bengaluru, Karnataka",
    rating: 5,
    review:
      "The quality of almonds is exceptional. Fresh, crunchy, and delivered quickly. Will definitely order again!",
    date: "2024-01-10",
    isDemo: true,
  },
  {
    id: "t-2",
    name: "Arjun Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    review:
      "Best cashews I've ever had. The W240 grade is truly premium. Packaging is excellent too.",
    date: "2024-01-08",
    isDemo: true,
  },
  {
    id: "t-3",
    name: "Sunita Rao",
    location: "Hyderabad, Telangana",
    rating: 4,
    review:
      "Great product quality and fast delivery. The Medjool dates are absolutely delicious.",
    date: "2024-01-05",
    isDemo: true,
  },
  {
    id: "t-4",
    name: "Vikram Singh",
    location: "Delhi",
    rating: 5,
    review:
      "Ordered for the first time and I'm very impressed. The products are fresh and the prices are competitive.",
    date: "2023-12-28",
    isDemo: true,
  },
];
