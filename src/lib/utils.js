import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// shadcn/ui helper: merges conditional class names and resolves Tailwind conflicts
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
