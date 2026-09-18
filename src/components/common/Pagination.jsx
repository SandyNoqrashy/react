import { Button } from "../ui/Button.jsx";

// Shows up to 5 page numbers around the current page
function getVisiblePages(page, totalPages) {
  const size = Math.min(5, totalPages);
  const start = Math.max(1, Math.min(page - 2, totalPages - size + 1));
  return Array.from({ length: size }, (_, i) => start + i);
}

export function Pagination({ page, totalPages, onPageChange, disabled = false }) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      <Button
        text="Previous"
        variant="secondary"
        onClick={() => onPageChange(page - 1)}
        disabled={disabled || page === 1}
      />

      {getVisiblePages(page, totalPages).map((p) => (
        <Button
          key={p}
          text={String(p)}
          variant={p === page ? "primary" : "secondary"}
          onClick={() => onPageChange(p)}
          disabled={disabled}
        />
      ))}

      <Button
        text="Next"
        variant="secondary"
        onClick={() => onPageChange(page + 1)}
        disabled={disabled || page === totalPages}
      />

      <span className="w-full text-center font-mono text-xs text-muted-foreground">
        Page {page} of {totalPages}
      </span>
    </nav>
  );
}
