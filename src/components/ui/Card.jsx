export function Card({ title, description, children }) {
  return (
    <div className="bg-white border border-[#D7DAD1] rounded-[3px] p-5.5 w-60">
      <h3 className="font-serif text-[17px] font-semibold mb-2 text-[#191D1A]">
        {title}
      </h3>
      {description && (
        <p className="text-[13.5px] text-[#6E7568] mb-4">{description}</p>
      )}
      {children}
    </div>
  );
}