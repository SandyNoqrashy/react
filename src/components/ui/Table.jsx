export function Table({ columns, data, striped = false }) {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              className="text-left font-medium text-xs text-[#6E7568] pb-2.5 px-3 border-b border-[#D7DAD1]"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr
            key={i}
            className={`border-b border-[#D7DAD1] last:border-b-0 ${
              striped && i % 2 === 0 ? "bg-[#E7EDE6]" : ""
            }`}
          >
            {columns.map((col) => (
              <td key={col} className="p-3 text-[#191D1A]">
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}