import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { Blockquote } from "@/components/Blockquote";
import { TechStack } from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="mt-5">
        <Card className="p-5 rounded-none sm:rounded-lg">
          <HeroSection />
          <TechStack />
          <Blockquote />
        </Card>
      </main>
      <Footer />
    </>
  );
}
