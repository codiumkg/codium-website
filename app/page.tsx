import ContactSection from "@/components/ContactSection";
import CourseSection from "@/components/CourseSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen">
      <HeroSection />
      <CourseSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
