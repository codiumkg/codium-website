"use client";

import * as Accordion from "@radix-ui/react-accordion";
import SectionHeader from "./SectionHeader";

import { MdQuestionMark } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FAQ } from "@/constants/constants";

export default function FAQSection() {
  return (
    <section
      className="py-20 lg:py-0 w-screen min-h-screen flex flex-col justify-center items-center"
      id="faq"
    >
      <SectionHeader
        text="Часто задаваемые вопросы"
        icon={<MdQuestionMark className="text-2xl" />}
      />

      <div className="flex w-full md:w-9/12 md:p-0">
        <Accordion.Root
          className="mt-10 w-full md:w-3/6"
          defaultValue="0"
          type="single"
          collapsible
        >
          {FAQ.map((question, index) => (
            <Accordion.Item
              key={index}
              value={index.toString()}
              className="group/item overflow-hidden border-b border-highlight last:border-b-0 last:rounded-bl-xl last:rounded-br-xl first:rounded-tl-xl first:rounded-tr-xl bg-secondary"
            >
              <Accordion.Header className="p-6">
                <Accordion.Trigger className="w-full flex justify-between shadow-sm">
                  <div className="text-md text-left font-bold">
                    {question.question}
                  </div>

                  <FaChevronDown className="text-md ml-2 mt-1 shrink-0 group-data-[state=open]/item:rotate-180 transition-transform" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.AccordionContent className="overflow-hidden text-md text-secondary-text font-light p-6 bg-secondary-dark border-t border-highlight group-data-[state=open]/item:animate-appear group-data-[state=close]/item:animate-disappear">
                {question.answer}
              </Accordion.AccordionContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
