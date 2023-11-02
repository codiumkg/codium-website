import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp, BsTiktok } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full min-h-screen"
    >
      <div className="flex flex-col lg:w-9/12">
        <div className="my-8 text-4xl">Контакты</div>

        <div className="flex flex-col gap-4 w-full lg:w-4/12">
          <div className="flex items-center p-4 rounded-xl bg-secondary">
            <AiFillInstagram className="text-4xl" />
            <div className="ml-3">codium.kg</div>
          </div>
          <div className="flex items-center p-4 rounded-xl bg-secondary">
            <BsWhatsapp className="text-4xl" />
            <div className="ml-3">+996 504 044 402</div>
          </div>
          <div className="flex items-center p-4 rounded-xl bg-secondary">
            <BiLogoGmail className="text-4xl" />
            <div className="ml-3">codiumtokmok@gmail.com</div>
          </div>
          <div className="flex items-center p-4 rounded-xl bg-secondary">
            <BsTiktok className="text-4xl" />
            <div className="ml-3">codium_kg</div>
          </div>
        </div>
      </div>
    </section>
  );
}
