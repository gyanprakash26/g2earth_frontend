import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
  value: number;
  max?: number;
  count?: number;
  size?: "sm" | "md";
  className?: string;
}

export function Rating({ value, max = 5, count, size = "sm", className }: RatingProps) {
  const starSize = size === "sm" ? 12 : 16;
  return (
    <div className={cn("flex items-center gap-1", className)} aria-label={`Rating: ${value} out of ${max}`}>
      <div className="flex items-center">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            size={starSize}
            className={cn(
              i < Math.floor(value) ? "fill-amber-400 text-amber-400" : "fill-neutral-200 text-neutral-200"
            )}
            aria-hidden="true"
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-xs text-neutral-500">({count.toLocaleString("en-IN")})</span>
      )}
    </div>
  );
}
