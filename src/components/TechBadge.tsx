import { Badge } from "./ui/badge";

interface TechBadgeProps {
  name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Badge
      variant="outline"
      className="flex items-center gap-2 rounded-full px-3 py-2 text-base font-normal text-zinc-400 shadow-xs hover:bg-input hover:border-white hover:font-semibold"
    >
      <img
        src={`/tech-icons/${name}.svg`}
        className="h-5 w-5 "
        alt={formattedName}
      />
      {formattedName}
    </Badge>
  );
};
