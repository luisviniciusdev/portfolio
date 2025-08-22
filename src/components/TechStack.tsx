import { TechBadge } from "./TechBadge";
import {
  backendTechnologys,
  frontendTechnologys,
  generalTechnologys,
} from "../data/technologys";
import { Separator } from "@/components/ui/separator";

export const TechStack = () => {
  return (
    <section>
      <h2 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 text-gray-400">
        // Tech Stack
      </h2>

      <div>
        <h3 className="text-base font-bold text-gray-500">Back-end:</h3>
        <div className="flex gap-2 flex-wrap pt-4 pb-3">
          {backendTechnologys.map((tech) => (
            <TechBadge key={tech.id} name={tech.name} />
          ))}
        </div>

        <h3 className="text-base font-bold text-gray-500 mt-4">Front-end:</h3>
        <div className="flex gap-2 flex-wrap pt-4 pb-3">
          {frontendTechnologys.map((tech) => (
            <TechBadge key={tech.id} name={tech.name} />
          ))}
        </div>

        <h3 className="text-base font-bold text-gray-500 mt-4">Outras:</h3>
        <div className="flex gap-2 flex-wrap pt-4 pb-3">
          {generalTechnologys.map((tech) => (
            <TechBadge key={tech.id} name={tech.name} />
          ))}
        </div>
      </div>

      <Separator className="mt-5 mb-8 bg-zinc-100" />
    </section>
  );
};
