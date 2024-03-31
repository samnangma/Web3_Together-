'use client';

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FQA() {
  const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant="splitted">
      <AccordionItem classNames={{
        title: 'text-white opacity-70',
      }} className="group-[.is-splitted]:bg-white/20 text-white" key="1" aria-label="How to mint an 99x Club NFT Pass?" title="How to mint an 99x Club NFT Pass?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem classNames={{
        title: 'text-white opacity-70',
      }} className="group-[.is-splitted]:bg-white/20 text-white" key="2" aria-label="How to mint an 99x Club NFT Pass?" title="How to mint an 99x Club NFT Pass?">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
