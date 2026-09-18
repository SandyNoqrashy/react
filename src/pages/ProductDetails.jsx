import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProducts.js";
import { ErrorState } from "../components/common/ErrorState.jsx";
import { Card, CardContent } from "../components/ui/shadcn/card.jsx";
import { ROUTES } from "../constants/routes.js";

function DetailsSkeleton() {
  return (
    <div className="grid animate-pulse gap-10 md:grid-cols-2" aria-hidden="true">
      <div className="aspect-square rounded-[3px] bg-muted" />
      <div className="space-y-4">
        <div className="h-9 w-3/4 rounded-[3px] bg-border" />
        <div className="h-4 w-1/3 rounded-[3px] bg-border" />
        <div className="h-8 w-1/4 rounded-[3px] bg-border" />
        <div className="h-24 w-full rounded-[3px] bg-border" />
      </div>
    </div>
  );
}

function ProductDetailsContent({ product }) {
  // UI-only state (which image is selected) - not server data
  const [activeImage, setActiveImage] = useState(0);
  const images = product.images?.length ? product.images : [product.thumbnail];

  const finalPrice = product.price;
  const hasDiscount = product.discountPercentage > 0;
  const originalPrice = hasDiscount
    ? finalPrice / (1 - product.discountPercentage / 100)
    : finalPrice;

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <div className="aspect-square rounded-[3px] border bg-muted">
          <img
            src={images[activeImage]}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>

        {images.length > 1 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(i)}
                aria-label={`Show image ${i + 1}`}
                className={`h-16 w-16 rounded-[3px] border bg-muted ${
                  i === activeImage ? "border-primary ring-2 ring-primary/30" : ""
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <p className="mb-1 text-sm capitalize text-muted-foreground">
          {product.category}
          {product.brand && ` · ${product.brand}`}
        </p>
        <h1 className="mb-3 font-serif text-3xl font-semibold">{product.title}</h1>

        <div className="mb-4 flex items-center gap-4">
          <span className="font-mono text-sm">★ {product.rating.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">
            {product.stock > 0
              ? `${product.stock} in stock`
              : "Out of stock"}
          </span>
        </div>

        <div className="mb-5 flex items-baseline gap-3">
          <span className="text-3xl font-semibold">${finalPrice.toFixed(2)}</span>
          {hasDiscount && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
              <span className="text-sm font-medium text-primary">
                -{Math.round(product.discountPercentage)}%
              </span>
            </>
          )}
        </div>

        <p className="mb-5 text-[15px] leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {product.tags?.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[3px] bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <ul className="space-y-1 text-sm text-muted-foreground">
          {product.warrantyInformation && <li>Warranty: {product.warrantyInformation}</li>}
          {product.shippingInformation && <li>Shipping: {product.shippingInformation}</li>}
          {product.returnPolicy && <li>Returns: {product.returnPolicy}</li>}
        </ul>
      </div>

      {product.reviews?.length > 0 && (
        <section className="md:col-span-2">
          <h2 className="mb-4 font-serif text-xl font-semibold">Reviews</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.reviews.map((review, i) => (
              <Card key={`${review.reviewerEmail}-${i}`}>
                <CardContent className="pt-5">
                  <p className="mb-1 font-mono text-xs text-muted-foreground">
                    ★ {review.rating} · {review.reviewerName}
                  </p>
                  <p className="text-sm">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, isPending, isError, error, refetch } = useProduct(id);

  const notFound = error?.response?.status === 404;

  return (
    <div className="mx-auto max-w-6xl px-7 py-12 font-sans text-foreground">
      <Link
        to={ROUTES.PRODUCTS}
        className="mb-8 inline-block text-sm text-primary hover:underline"
      >
        ← Back to products
      </Link>

      {isPending && <DetailsSkeleton />}

      {isError && (
        <ErrorState
          title={notFound ? "Product not found" : "Something went wrong"}
          message={
            notFound
              ? "This product doesn't exist or was removed."
              : "We couldn't load this product. Please try again."
          }
          onAction={notFound ? undefined : () => refetch()}
        />
      )}

      {product && <ProductDetailsContent key={product.id} product={product} />}
    </div>
  );
}
