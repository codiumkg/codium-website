"use client";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp, BsTiktok } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { SOCIAL_LINKS } from "@/constants/constants";

import Scene from "./Three/Scene";
import { Canvas } from "@react-three/fiber";
import { FogExp2, Vector3 } from "three";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full min-h-screen"
    >
      <div className="flex flex-col items-center md:flex-row w-9/12">
        <div className="flex flex-col w-full lg:w-4/12">
          <div className="my-8 text-4xl">Контакты</div>
          <div className="flex flex-col gap-4 w-full">
            <Link href={SOCIAL_LINKS.instagram} target="_blank">
              <div className="flex items-center p-4 rounded-xl bg-secondary transition border border-primary hover:border-accent-secondary hover:text-accent-secondary">
                <AiFillInstagram className="text-4xl" />
                <div className="ml-3">codium.kg</div>
              </div>
            </Link>

            <Link href={SOCIAL_LINKS.whatsapp} target="_blank">
              <div className="flex items-center p-4 rounded-xl bg-secondary transition border border-primary hover:border-accent-secondary hover:text-accent-secondary">
                <BsWhatsapp className="text-4xl" />
                <div className="ml-3">+996 504 044 402</div>
              </div>
            </Link>
            <Link href="mailto:codiumtokmok@gmail.com" target="_blank">
              <div className="flex items-center p-4 rounded-xl bg-secondary transition border border-primary hover:border-accent-secondary hover:text-accent-secondary">
                <BiLogoGmail className="text-4xl" />
                <div className="ml-3">codiumtokmok@gmail.com</div>
              </div>
            </Link>
            <Link href={SOCIAL_LINKS.tiktok} target="_blank">
              <div className="flex items-center p-4 rounded-xl bg-secondary transition border border-primary hover:border-accent-secondary hover:text-accent-secondary">
                <BsTiktok className="text-3xl" />
                <div className="ml-3">codium_kg</div>
              </div>
            </Link>
          </div>
        </div>

        <Canvas
          shadows
          style={{ height: 700, width: "100%" }}
          camera={{ position: [0, 0, 3.1], lookAt: () => new Vector3(0, 0, 0) }}
          onCreated={({ scene }) => {
            scene.fog = new FogExp2(0xff1a1817, 0.23);
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </section>
  );
}
