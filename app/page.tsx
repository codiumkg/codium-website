import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen">
      <HeroSection />
      <ContactSection />
    </main>
  );
}
