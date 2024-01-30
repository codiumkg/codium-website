import Image from "next/image";
import Logo from "@/assets/codium_logo_solo.png";
import RegRequestModal from "./RegRequestModal";
import Reveal from "./Reveal";

export default function HeroSection() {
  return (
    <section
      className="py-20 lg:py-0 w-screen min-h-screen flex flex-col justify-center items-center"
      id="hero"
    >
      <div className="flex flex-col lg:flex-row lg:gap-16 items-center justify-center">
        <Reveal>
          <div className="flex-1">
            <Image
              src={Logo}
              alt="Logo"
              className="my-20 w-60 h-60 md:w-96 md:h-96 lg:my-0 lg:mx-20 shrink-0"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col flex-1 w-full text-white text-center lg:text-left text-3xl md:text-5xl items-center px-30 lg:px-0 lg:items-start font-light">
            <div>
              <span className="text-xl md:text-3xl font-light">
                Добро пожаловать в мир{" "}
              </span>{" "}
              <br />
              <span className="text-3xl md:text-5xl text-accent-secondary font-bold">
                IT
              </span>
              <span className="text-2xl md:text-3xl">
                {" "}
                где навыки становятся
              </span>{" "}
              <br />
              <span className="text-3xl text-accent font-bold md:text-5xl">
                возможностями!
              </span>
            </div>

            <RegRequestModal />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
