import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profile from "../images/luis.jpg";
import { Button } from "./ui/button";
import { FileDown, Github, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-row gap-4 align-middle items-center">
        <Avatar className="w-16 h-16 rounded-lg border ">
          <AvatarImage src={profile} />
          <AvatarFallback>https://github.com/luisviniciusdev</AvatarFallback>
        </Avatar>
        <div>
          <span className="text-xl">Luís Vinícius</span>
          <h1 className="text-primary">Desenvolvdor Back-end</h1>
        </div>
      </div>

      <div className="space-y-4 text-base font-normal text-zinc-400 prose prose-dark mt-4 mb-5 [&_span]:font-bold [&_span]:hover:text-primary/75">
        <p>
          Gosto de encarar sistemas como quebra-cabeças: cada serviço, cada API,
          cada arquitetura funciona como peças que, quando bem encaixadas,{" "}
          <span>formam algo valioso</span>.
        </p>

        <p>
          Atualmente, estou finalizando minha graduação em{" "}
          <span>Ciência da Computação</span> e me especializando em{" "}
          <span>backend com NestJS e TypeScript</span>, com interesse especial
          em <span>arquitetura de software</span>,{" "}
          <span>boas práticas de escalabilidade</span> e{" "}
          <span>microservices</span>.
        </p>

        <p>
          Também estou me preparando para a <span>certificação AWS</span>,
          explorando como a nuvem pode potencializar soluções robustas e
          eficientes.
        </p>

        <p>
          Meu objetivo é continuar conectando essas peças: <span>código</span>,{" "}
          <span>arquitetura</span> e <span>infraestrutura</span> para
          transformar ideias em sistemas sólidos, escaláveis e elegantes.
        </p>
      </div>

      <div className="flex gap-3">
        <a href="/caminho-do-seu-arquivo.pdf" download>
          <Button
            variant="outline"
            size="sm"
            className="text-gray-500 bg-gray-800 hover:cursor-pointer hover:text-primary border-primary"
          >
            <FileDown /> Baixar Currículo
          </Button>
        </a>

        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="icon"
            className="size-8 text-gray-500 bg-gray-800 hover:cursor-pointer hover:text-primary"
          >
            <Linkedin />
          </Button>
        </a>

        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            size="icon"
            className="size-8 text-gray-500 bg-gray-800 hover:cursor-pointer hover:text-primary"
          >
            <Github />
          </Button>
        </a>
      </div>

      <Separator className="mt-5 mb-8 bg-zinc-100" />
    </section>
  );
};
