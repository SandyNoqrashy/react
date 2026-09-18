import { useState } from "react";
import { Input } from "../components/ui/Input.jsx";
import { ProductCard } from "../components/products/ProductCard.jsx";
import { ProductCardSkeleton } from "../components/skeleton/ProductCardSkeleton.jsx";
import { EmptyState } from "../components/common/EmptyState.jsx";
import { ErrorState } from "../components/common/ErrorState.jsx";
import { Pagination } from "../components/common/Pagination.jsx";
import { useDebounce } from "../hooks/useDebounce.js";
import { useProducts } from "../hooks/useProducts.js";
import { PRODUCTS_PER_PAGE } from "../api/products.api.js";

const gridClass =
  "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

export default function Products() {
  const [input, setInput] = useState("");
  const search = useDebounce(input, 400).trim();

  // When the search term changes, go back to page 1
  // (state adjusted during render - the pattern recommended by React instead of an effect)
  const [page, setPage] = useState(1);
  const [prevSearch, setPrevSearch] = useState(search);
  if (prevSearch !== search) {
    setPrevSearch(search);
    setPage(1);
  }

  const { data, isPending, isError, isPlaceholderData, refetch } = useProducts({
    page,
    search,
  });

  const totalPages = data ? Math.ceil(data.total / PRODUCTS_PER_PAGE) : 0;

  const handlePageChange = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    if (isPending) {
      return (
        <div className={gridClass}>
          {Array.from({ length: PRODUCTS_PER_PAGE }, (_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      );
    }

    if (isError) {
      return <ErrorState onAction={() => refetch()} />;
    }

    if (data.products.length === 0) {
      return (
        <EmptyState
          title="No products found"
          message={`Nothing matches "${search}". Try a different keyword.`}
          actionText="Clear search"
          onAction={() => setInput("")}
        />
      );
    }

    return (
      <>
        <div
          className={`${gridClass} transition-opacity ${
            isPlaceholderData ? "opacity-50" : "opacity-100"
          }`}
        >
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          disabled={isPlaceholderData}
        />
      </>
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-7 py-12 font-sans text-foreground">
      <header className="mb-8 border-b pb-6">
        <h1 className="mb-2.5 font-serif text-4xl font-semibold">Products</h1>
        <p className="mb-5 text-[15px] text-muted-foreground">
          {data ? `${data.total} products` : "Browse our catalog"}
          {search && ` matching "${search}"`}
        </p>
        <Input
          type="search"
          aria-label="Search products"
          placeholder="Search products (e.g. phone)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </header>

      {renderContent()}
    </div>
  );
}
