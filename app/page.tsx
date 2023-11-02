import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ContactSection />
    </div>
  );
}
