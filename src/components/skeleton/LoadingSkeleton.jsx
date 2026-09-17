export function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-2.5 max-w-[420px]">
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .skeleton-bar {
          background: linear-gradient(90deg, #D7DAD1 0%, #E7EDE6 50%, #D7DAD1 100%);
          background-size: 200% 100%;
          animation: shimmer 1.6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .skeleton-bar { animation: none; opacity: 0.6; }
        }
      `}</style>
      <div className="skeleton-bar h-3.5 rounded-[3px] w-2/5" />
      <div className="skeleton-bar h-3.5 rounded-[3px] w-11/12" />
      <div className="skeleton-bar h-3.5 rounded-[3px] w-3/5" />
    </div>
  );
}