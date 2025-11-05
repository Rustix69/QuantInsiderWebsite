"use client";

import React, { useEffect, useState } from "react";
import { Timeline } from "./ui/timeline";
import { timelineData } from "@/app/components/timelineData";

export function TimelineDemo() {
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleImages((prev) => {
        if (prev.length < timelineData.length * 4) {
          return [...prev, prev.length];
        }
        clearInterval(timer);
        return prev;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <Timeline
        data={timelineData.map((item, index) => ({
          ...item,
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-bold mb-8">
                {item.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {item.images.map((img, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={img}
                    alt={item.title}
                    width="100%"
                    height="100%"
                    className={`rounded-lg object-cover h-28 md:h-44 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-opacity duration-1000 ${
                      visibleImages.includes(index * 4 + imageIndex) ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
          ),
        }))}
      />
    </div>
  );
}

