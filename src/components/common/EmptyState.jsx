import { Button } from "../ui/Button.jsx";

export function EmptyState({
  title = "No records yet",
  message = "Add your first entry to see it listed here.",
  actionText = "Add entry",
  onAction,
}) {
  return (
    <div className="border border-dashed border-[#D7DAD1] rounded-[3px] p-10 px-7 max-w-[420px] text-left">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6E7568" strokeWidth="1.5" className="mb-3.5">
        <rect x="3" y="6" width="18" height="14" rx="1" />
        <path d="M3 10h18" />
        <path d="M8 15h4" />
      </svg>
      <h4 className="font-serif text-base font-semibold mb-1.5 text-[#191D1A]">
        {title}
      </h4>
      <p className="text-[13.5px] text-[#6E7568] mb-4">{message}</p>
      <Button text={actionText} variant="primary" onClick={onAction} />
    </div>
  );
}