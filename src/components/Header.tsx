import { Navbar } from "@/components/Navbar";
import { Lightbulb } from "lucide-react";
import { Card } from "./ui/card";

export const Header = () => {
  return (
    <header>
      <Card className="rounded-none flex items-center md:hidden">
        <Lightbulb />
      </Card>
      <Navbar />
    </header>
  );
};
