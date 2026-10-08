import { formatPrice, formatDiscount } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PriceProps {
  sellingPrice: number;
  mrp?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { selling: "text-sm font-semibold", mrp: "text-xs", badge: "text-xs" },
  md: { selling: "text-base font-semibold", mrp: "text-sm", badge: "text-xs" },
  lg: { selling: "text-xl font-bold", mrp: "text-sm", badge: "text-sm" },
};

export function Price({ sellingPrice, mrp, size = "md", className }: PriceProps) {
  const discount = mrp ? formatDiscount(mrp, sellingPrice) : 0;
  const s = sizeMap[size];

  return (
    <div className={cn("flex flex-wrap items-baseline gap-1.5", className)}>
      <span className={cn(s.selling, "text-neutral-900")}>{formatPrice(sellingPrice)}</span>
      {mrp && mrp > sellingPrice && (
        <>
          <span className={cn(s.mrp, "text-neutral-400 line-through")}>{formatPrice(mrp)}</span>
          {discount > 0 && (
            <span className={cn(s.badge, "font-medium text-green-600")}>{discount}% off</span>
          )}
        </>
      )}
    </div>
  );
}
