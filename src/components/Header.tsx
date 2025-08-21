import { Code } from "lucide-react";
import { Card } from "./ui/card";

export const Header = () => {
  return (
    <header>
      <Card className="rounded-none flex items-center">
        <Code />
      </Card>
    </header>
  );
};
