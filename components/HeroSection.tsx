"use client";

import Image from "next/image";
import Logo from "@/assets/codium_logo_solo.png";
import { Button, useDisclosure } from "@nextui-org/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import React, { useEffect, useRef } from "react";
import RegModal from "./RegModal";

export default function HeroSection() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const heroTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {}, []);

  useGSAP(() => {
    SplitType.create(heroTextRef.current!, {
      types: ["chars", "words"],
    });

    const tl = gsap.timeline({ scrollTrigger: "#hero" });

    tl.from("#heroLogo", {
      x: -800,
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
      <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:px-40">
        <Image
          id="heroLogo"
          src={Logo}
          alt="Logo"
          className="my-20 w-60 h-60 md:w-[450px] md:h-[450px] lg:my-0 lg:mx-20 shrink-0"
        />

        <div className="flex flex-col max-w-[80%] gap-8 text-center lg:text-start">
          <h1
            id="heroText"
            ref={heroTextRef}
            className="text-[5rem] font-semibold leading-[4.2rem]"
          >
            Освой новые навыки с нами и преврати их в{" "}
            <span className="text-primary">возможности!</span>
          </h1>
          <p id="secondaryText" className="text-default-400">
            Запишись на пробный урок, узнай на что ты способен.
          </p>

          <div>
            <Button
              id="heroButton"
              color="primary"
              variant="bordered"
              size="lg"
              onPress={onOpen}
            >
              Записаться на пробный урок
            </Button>
            <RegModal
              onOpenChange={onOpenChange}
              isOpen={isOpen}
              onClose={onClose}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
