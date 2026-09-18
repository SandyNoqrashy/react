import { Card, CardContent, CardHeader } from "../ui/shadcn/card.jsx";

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden" aria-hidden="true">
      <div className="aspect-square animate-pulse bg-muted" />
      <CardHeader className="pb-2">
        <div className="h-4 w-3/4 animate-pulse rounded-[3px] bg-border" />
        <div className="h-3.5 w-1/3 animate-pulse rounded-[3px] bg-border" />
      </CardHeader>
      <CardContent className="pb-5">
        <div className="h-9 w-full animate-pulse rounded-[3px] bg-border" />
      </CardContent>
    </Card>
  );
}
