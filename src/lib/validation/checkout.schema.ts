import { z } from "zod";

export const checkoutSchema = z.object({
  addressId: z.string().optional(),
  paymentMethod: z.enum(["razorpay", "cashfree", "cod"]).refine((v) => v, {
    message: "Select a payment method",
  }),
  couponCode: z.string().optional(),
});

export const couponSchema = z.object({
  code: z.string().min(3, "Enter a valid coupon code").max(20).toUpperCase(),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
export type CouponInput = z.infer<typeof couponSchema>;
