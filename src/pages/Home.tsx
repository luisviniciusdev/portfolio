import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { Blockquote } from "@/components/Blockquote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <TechStack />
        <Blockquote />
      </Main>
      <Footer />
    </>
  );
}
