import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { User2, FolderOpen, Mail } from "lucide-react";
import NavItem from "./NavItem";

export const Navbar = () => {
  return (
    <Menubar className="fixed z-40 bottom-5 left-5 w-[calc(100%_-_2.5rem)] rounded-xl flex h-12 items-center bg-white dark:bg-zinc-900/95 px-2 shadow-subtle dark:shadow-subtle-light md:hidden">
      <div className="flex items-center justify-evenly w-full gap-1 xs:gap-3">
        <MenubarMenu>
          <NavItem to="/" icon={User2} text="Home" />
          <NavItem to="/projetos" icon={FolderOpen} text="Projetos" />
          <NavItem to="/contato" icon={Mail} text="Contato" />
        </MenubarMenu>
      </div>
    </Menubar>
  );
};
