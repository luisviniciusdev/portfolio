import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { User2, FolderOpen, Mail } from "lucide-react";
import NavItem from "./NavItem";

export const Navbar = () => {
  return (
    <div className="flex ">
      <Menubar
        className="
        fixed bottom-5 left-1/2 transform -translate-x-1/2
        rounded-xl bg-zinc-900/95 px-2.5 py-2 h-12 flex items-center
        shadow-subtle-light md:top-5 md:px-5 md:bg-zinc-900
      "
      >
        {/*
         */}
        <div className="flex items-center justify-evenly w-full gap-1 xs:gap-3">
          <MenubarMenu>
            <NavItem to="/" icon={User2} text="Home" />
            <NavItem to="/projetos" icon={FolderOpen} text="Projetos" />
            <NavItem to="/contato" icon={Mail} text="Contato" />
          </MenubarMenu>
        </div>
      </Menubar>
    </div>
  );
};
