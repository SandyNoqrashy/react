export function Button({ text, variant = "primary", onClick, disabled = false }) {
  const base =
    "font-sans text-sm font-medium px-[18px] py-2.5 rounded-[3px] border transition-transform active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#3D6B4C] border-[#3D6B4C] text-white hover:bg-[#2f5339]",
    danger: "bg-transparent border-[#B3432E] text-[#B3432E]",
    secondary: "bg-transparent border-[#3D6B4C] text-[#3D6B4C] hover:bg-[#E7EDE6]",
  };

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
