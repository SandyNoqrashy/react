export function Input({ placeholder, value, onChange, ...props }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full max-w-[340px] px-3.5 py-2.5 border border-[#D7DAD1] rounded-[3px] bg-white text-[#191D1A] text-sm outline-none focus:border-[#3D6B4C] focus:ring-4 focus:ring-[#E7EDE6] placeholder:text-[#6E7568] transition-colors"
      {...props}
    />
  );
}