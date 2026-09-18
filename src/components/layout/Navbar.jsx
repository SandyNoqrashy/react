import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes.js";

const links = [
  { to: ROUTES.HOME, label: "Home", end: true },
  { to: ROUTES.PRODUCTS, label: "Products" },
  { to: ROUTES.ABOUT, label: "About" },
];

export function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-900 text-white">
      {links.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "opacity-80 hover:opacity-100"
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}