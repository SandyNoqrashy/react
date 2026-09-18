import { Button } from "../ui/Button.jsx";

export function ErrorState({
  title = "Something went wrong",
  message = "We couldn't load the data. Please check your connection and try again.",
  actionText = "Try again",
  onAction,
}) {
  return (
    <div
      role="alert"
      className="max-w-[420px] rounded-[3px] border border-dashed border-[#B3432E] p-10 px-7 text-left"
    >
      <h4 className="mb-1.5 font-serif text-base font-semibold text-[#B3432E]">
        {title}
      </h4>
      <p className="mb-4 text-[13.5px] text-muted-foreground">{message}</p>
      {onAction && <Button text={actionText} variant="secondary" onClick={onAction} />}
    </div>
  );
}
