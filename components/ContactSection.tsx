"use client";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp, BsTiktok } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { SOCIAL_LINKS } from "@/constants/constants";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full min-h-screen"
    >
      <div className="flex flex-col items-center md:flex-row w-9/12">
        <div className="flex flex-col w-full"></div>
      </div>
    </section>
  );
}
