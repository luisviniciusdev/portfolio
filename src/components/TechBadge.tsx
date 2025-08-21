import { Badge } from "./ui/badge";

interface TechBadgeProps {
  techName: string;
}

export const TechBadge = ({ techName }: TechBadgeProps) => {
  const formattedName = techName.charAt(0).toUpperCase() + techName.slice(1);

  return (
    <div className="flex items-center gap-2">
      <Badge variant="outline" className="flex items-center gap-1">
        <img
          src={`/tech-icons/${techName}.svg`}
          className="h-5 w-5"
          alt={formattedName}
        />
        {formattedName}
      </Badge>
    </div>
  );
};
