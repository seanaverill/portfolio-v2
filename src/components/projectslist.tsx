"use client";

import { useState } from "react";
import { projects } from "@/lib/config"
import { IconArchiveFilled, IconArrowDown, IconDeviceDesktopFilled, IconHammer, IconTagFilled, IconTestPipe2Filled } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

export function AccordionProjects() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(10);

  function handleTypeChange(type: string) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  function getBgColor(type: string) {
    switch (type.toLowerCase()) {
      case 'product development':
        return <IconTagFilled size={24} />;
      case 'programming':
        return <IconDeviceDesktopFilled size={24} />;
      case 'r&d':
        return <IconTestPipe2Filled size={24} />;
      case 'diy':
        return <IconHammer size={24} />;
      default:
        return <IconArchiveFilled size={24} />;
    }
  }

  const filteredProjects = projects.filter(
    (item) => selectedTypes.length === 0 || selectedTypes.includes(item.type.toLowerCase())
  );

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {['product development', 'programming', 'r&d', 'diy'].map((type) => (
            <button
            key={type}
            onClick={() => handleTypeChange(type)}
            className={`px-3 py-1 rounded flex items-center gap-1 hover:cursor-pointer ${selectedTypes.includes(type) ? 'bg-slate-600 border border-slate-600 text-white hover:bg-slate-600/80' : 'bg-transparent border border-white hover:bg-slate-200/10'}`}
            >
            {type === 'diy' ? 'DIY' : type.charAt(0).toUpperCase() + type.slice(1)}
            {selectedTypes.includes(type) && <span className="text-xs">✕</span>}
            </button>
        ))}
      </div>
      <ul className="list bg-slate-800/60 rounded-box shadow-md">
        <AnimatePresence initial={false}>
          {filteredProjects.slice(0, visibleCount).map((item) => (
            <motion.li
              className="list-row"
              key={item.title}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <div>{item.title}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{item.type}</div>
              </div>
              <div></div>
              {getBgColor(item.type)}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      {visibleCount < filteredProjects.length && (
        <button
          onClick={() => setVisibleCount(filteredProjects.length)}
          className="mt-4 px-4 py-2 bg-slate-800/60 text-white rounded-lg hover:bg-slate-800/80 flex flex-nowrap gap-2 items-center mx-auto w-full text-center justify-center hover:cursor-pointer"
        >
          Load More <IconArrowDown size={16} />
        </button>
      )}
    </div>
  );
}



