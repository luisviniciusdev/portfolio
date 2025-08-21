import { TechBadge } from "./TechBadge";
import { technologys } from "../data/technologys";

export const TechStack = () => {
  return (
    <section>
      <h2 className="croll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
        // Tech Stack
      </h2>

      <h2 className="scroll-m-20 border-b pb-2 text-xl font-medium tracking-tight first:mt-0 text-muted-foreground">
        // Tech Stack
      </h2>

      <h2 className="scroll-m-20 border-b pb-2 text-xl font-medium tracking-tight first:mt-0 text-gray-400">
        // Tech Stack
      </h2>

      <h3>Back-end:</h3>
      <div className="flex items-center gap-2 flex-wrap">
        {technologys.map((tech) => (
          <TechBadge key={tech} techName={tech} />
        ))}
      </div>
    </section>
  );
};
