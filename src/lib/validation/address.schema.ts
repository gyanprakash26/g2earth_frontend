import { z } from "zod";
import { INDIAN_STATES } from "@/lib/constants";

export const addressSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  addressLine1: z.string().min(5, "Address is required").max(200),
  addressLine2: z.string().max(200).optional(),
  city: z.string().min(2, "City is required").max(100),
  state: z.string().refine((val) => (INDIAN_STATES as readonly string[]).includes(val), {
    message: "Select a valid state",
  }),
  pincode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
  country: z.string().default("India"),
  label: z.enum(["home", "work", "other"]).optional(),
  isDefault: z.boolean().optional(),
});

export type AddressInput = z.infer<typeof addressSchema>;
