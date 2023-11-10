import { SOCIAL_LINKS } from "@/constants/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-60 p-10 w-screen bg-secondary">
      <div className="flex h-full w-full">
        <div className="flex flex-col gal-4">
          <h2>Контакты</h2>

          <Link href={SOCIAL_LINKS.instagram}></Link>
        </div>
      </div>
    </footer>
  );
}
