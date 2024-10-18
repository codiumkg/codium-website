"use client";

import Image from "next/image";
import Logo from "@/assets/codium_logo_solo.png";
import { Button } from "@nextui-org/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {}, []);

  useGSAP(() => {
    SplitType.create(heroTextRef.current!, {
      types: ["chars", "words"],
    });

    const tl = gsap.timeline({ scrollTrigger: "#hero" });

    tl.from("#heroLogo", {
      y: -800,
      duration: 1,
      opacity: 0,
      rotateZ: -360,
    });

    tl.from(".word", {
      duration: 0.3,
      opacity: 0,
      y: 80,
      stagger: 0.08,
    });

    tl.from("#secondaryText", {
      opacity: 0,
      duration: 0.2,
    });

    tl.from("#heroButton", {
      opacity: 0,
      x: -150,
      delay: 0,
    });
  }, [heroTextRef]);

  return (
    <section
      className="py-20 lg:py-40 w-screen min-h-screen flex flex-col justify-center items-center"
      id="hero"
    >
      <div className="flex flex-col lg:gap-10 items-center justify-center">
        <Image
          id="heroLogo"
          src={Logo}
          alt="Logo"
          className="my-20 w-60 h-60 md:w-[400px] md:h-[400px] lg:my-0 lg:mx-20 shrink-0"
        />
        <div className="flex flex-col max-w-[520px] gap-8 text-center">
          <h1
            id="heroText"
            ref={heroTextRef}
            className="text-[3.8rem] font-semibold leading-[3.4rem]"
          >
            Здесь должен был быть очень крутой{" "}
            <span className="text-primary">текст</span>
          </h1>
          <p id="secondaryText" className="text-default-400">
            Здесь так же очень крутой вторичный текст для поддержки очень
            крутого текста выше
          </p>

          <div>
            <Button
              id="heroButton"
              color="primary"
              variant="bordered"
              size="lg"
            >
              Записаться на пробный урок
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
