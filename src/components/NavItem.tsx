import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  to: string;
  icon: LucideIcon;
  text: string;
}

export const NavItem = ({ to, icon: Icon, text }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center gap-1.5 rounded-xl py-1.5 px-4 text-sm md:text-base font-medium outline-none ${
          isActive
            ? "bg-primary/5 text-primary shadow-sm"
            : "text-zinc-500 dark:text-zinc-400"
        } hover:text-zinc-800 dark:hover:text-gray-100 focus-visible:ring-2 focus-visible:ring-gray-200 dark:focus-visible:ring-gray-800 focus-visible:text-gray-700 dark:focus-visible:text-gray-300`
      }
    >
      <Icon size={16} />
      {text}
    </NavLink>
  );
};

export default NavItem;
