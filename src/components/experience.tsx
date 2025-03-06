"use client"
import {
    Accordion,
    // AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { experience } from "@/lib/config"
import { motion, AnimatePresence } from "motion/react"

import { useState } from "react";

export function AccordionExperience() {
  const [visibleItem, setVisibleItem] = useState<string | null>(null);

  return (
    <Accordion type="single" collapsible className="w-full">
      {experience.map((item) => (
        <AccordionItem key={item.description} value={item.description}>
          <AccordionTrigger onClick={() => setVisibleItem(visibleItem === item.description ? null : item.description)}>
            <div className="opacity-60">{item.date}</div>
            <div className="flex flex-col">
              <div className="font-bold">{item.title}</div>
              <div className="font-medium opacity-60">{item.company}</div>
            </div>
          </AccordionTrigger>

            <AnimatePresence initial={false}>
            {visibleItem === item.description && (
              <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ height: { duration: 0.3, ease: "easeInOut" }, opacity: { duration: 0.3, ease: "easeInOut" } }}
              className="bg-slate-800/60 rounded-xl"
              >
         <div className="py-4 px-6">
                {item.description.split('. ').map((sentence, index) => (
                  <p key={index} className="pb-2">{sentence}.</p>
                ))}</div>

              </motion.div>
            )}
            </AnimatePresence>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
