"use client";

import { FAQ } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  useGSAP(() => {
    gsap.from("#faqTitle", {
      scrollTrigger: { trigger: "#faqTitle", start: "top 70%" },
      opacity: 0,
      x: 350,
      duration: 0.5,
    });
  });

  return (
    <section
      className="py-32 w-screen min-h-screen flex flex-col justify-center items-center"
      id="faq"
    >
      <div className="flex flex-col gap-10 justify-center items-center w-full  md:w-[50%]">
        <h1 id="faqTitle" className="text-[2rem] font-bold">
          Часто задаваемые вопросы
        </h1>

        <Accordion variant="light">
          {FAQ.map((question) => (
            <AccordionItem
              title={<h1 className="font-semibold">{question.question}</h1>}
              aria-label={question.question}
              className="py-2 px-5 hover:bg-default-100 hover:text-default-foreground hover:rounded-xl duration-400 faq-card"
            >
              <p className="text-default-600">{question.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
