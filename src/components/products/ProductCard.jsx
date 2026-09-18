import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/shadcn/card.jsx";
import { ROUTES } from "../../constants/routes.js";

export function ProductCard({ product }) {
  const { id, title, category, price, rating, thumbnail } = product;

  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="aspect-square bg-muted">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-1" title={title}>
          {title}
        </CardTitle>
        <CardDescription className="capitalize">{category}</CardDescription>
      </CardHeader>

      <CardContent className="mt-auto flex items-center justify-between pb-4">
        <span className="text-lg font-semibold">${price.toFixed(2)}</span>
        <span className="font-mono text-xs text-muted-foreground">
          ★ {rating.toFixed(1)}
        </span>
      </CardContent>

      <CardFooter>
        <Link
          to={ROUTES.productDetails(id)}
          className="w-full rounded-[3px] border border-primary bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground transition-transform hover:bg-[#2f5339] active:scale-[0.97]"
        >
          View details
        </Link>
      </CardFooter>
    </Card>
  );
}
