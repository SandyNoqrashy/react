import { useState } from "react";
import { Button } from "../components/ui/Button.jsx";
import { Card } from "../components/ui/Card.jsx";
import { Table } from "../components/ui/Table.jsx";
import { Input } from "../components/ui/Input.jsx";
import { LoadingSkeleton } from "../components/skeleton/LoadingSkeleton.jsx";
import { EmptyState } from "../components/common/EmptyState.jsx";

const students = [
  { Name: "Sara Ahmed", Age: 21, City: "Cairo" },
  { Name: "Omar Khaled", Age: 23, City: "Giza" },
  { Name: "Laila Hassan", Age: 22, City: "Alexandria" },
];

export default function Home() {
  const [saved, setSaved] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 1400);
  };

  return (
    <div className="max-w-[980px] mx-auto px-7 py-16 font-sans text-[#191D1A] bg-[#F3F4EF]">
      <header className="border-b border-[#D7DAD1] pb-8 mb-2">
        <h1 className="font-serif text-4xl font-semibold mb-2.5 max-w-[14ch]">
          Component field notes
        </h1>
        <p className="text-[#6E7568] max-w-[46ch] mb-4 text-[15px]">
          A working record of the shared UI primitives, shown with their
          actual states and real data rather than lorem ipsum.
        </p>
        <div className="flex gap-4 font-mono text-xs text-[#6E7568]">
          <span>6 primitives</span>
          <span>3 states covered</span>
        </div>
      </header>

      <section className="grid grid-cols-[220px_1fr] gap-10 py-11 border-b border-[#D7DAD1] max-md:grid-cols-1 max-md:gap-4">
        <div>
          <h2 className="font-serif text-xl font-semibold mb-2">Button</h2>
          <p className="text-[13.5px] text-[#6E7568] max-w-[26ch]">
            One component, two variants. Danger buttons carry a disabled
            state for destructive actions still pending confirmation
            elsewhere.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <Button text="Save" variant="primary" onClick={handleSave} />
          <Button text="Delete" variant="danger" disabled />
          <span
            className={`font-mono text-xs text-[#3D6B4C] transition-opacity ${
              saved ? "opacity-100" : "opacity-0"
            }`}
          >
            saved
          </span>
        </div>
      </section>

      <section className="grid grid-cols-[220px_1fr] gap-10 py-11 border-b border-[#D7DAD1] max-md:grid-cols-1 max-md:gap-4">
        <div>
          <h2 className="font-serif text-xl font-semibold mb-2">Card</h2>
          <p className="text-[13.5px] text-[#6E7568] max-w-[26ch]">
            A plain content container. The second example shows the
            optional slot for nested actions.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Card title="Basic Plan" description="Good for getting started." />
          <Card title="Pro Plan" description="For growing teams.">
            <Button
              text={subscribed ? "Subscribed" : "Subscribe"}
              variant="secondary"
              onClick={() => setSubscribed(true)}
              disabled={subscribed}
            />
          </Card>
        </div>
      </section>

      <section className="grid grid-cols-[220px_1fr] gap-10 py-11 border-b border-[#D7DAD1] max-md:grid-cols-1 max-md:gap-4">
        <div>
          <h2 className="font-serif text-xl font-semibold mb-2">Table</h2>
          <p className="text-[13.5px] text-[#6E7568] max-w-[26ch]">
            Striped rows for scanability at a glance, no borders between
            cells within a row.
          </p>
        </div>
        <Table columns={["Name", "Age", "City"]} data={students} striped />
      </section>

      <section className="grid grid-cols-[220px_1fr] gap-10 py-11 border-b border-[#D7DAD1] max-md:grid-cols-1 max-md:gap-4">
        <div>
          <h2 className="font-serif text-xl font-semibold mb-2">Input</h2>
          <p className="text-[13.5px] text-[#6E7568] max-w-[26ch]">
            Single line text field with a visible focus ring that meets
            contrast requirements against the page background.
          </p>
        </div>
        <Input placeholder="Type something..." />
      </section>

      <section className="grid grid-cols-[220px_1fr] gap-10 py-11 border-b border-[#D7DAD1] max-md:grid-cols-1 max-md:gap-4">
        <div>
          <h2 className="font-serif text-xl font-semibold mb-2">
            Loading skeleton
          </h2>
          <p className="text-[13.5px] text-[#6E7568] max-w-[26ch]">
            Placeholder bars in three widths, standing in for a heading and
            two lines of body text.
          </p>
        </div>
        <LoadingSkeleton />
      </section>

      <section className="grid grid-cols-[220px_1fr] gap-10 py-11 max-md:grid-cols-1 max-md:gap-4">
        <div>
          <h2 className="font-serif text-xl font-semibold mb-2">
            Empty state
          </h2>
          <p className="text-[13.5px] text-[#6E7568] max-w-[26ch]">
            Shown when a list or table has nothing to display yet. Names the
            next action rather than just the absence.
          </p>
        </div>
        <EmptyState />
      </section>
    </div>
  );
}