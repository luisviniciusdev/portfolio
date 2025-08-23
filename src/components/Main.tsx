import { Card } from "./ui/card";

interface MainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className="mt-5 max-w-182 mx-auto sm:m-5 md:pt-20 md:mx-auto">
      <Card className="p-5 rounded-none sm:rounded-lg gap-0">{children}</Card>
    </main>
  );
};
