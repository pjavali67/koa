"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Tab = {
  title: string;
  content: React.ReactNode;
};

type TabSwitcherProps = {
  tabs: Tab[];
  className?: string;
};

export const TabSwitcher: React.FC<TabSwitcherProps> = ({
  tabs,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Titles */}
      <div className="flex border-b border-gray-200 mb-4 space-x-2">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            variant={activeIndex === index ? "koaread" : "ghost"}
            onClick={() => setActiveIndex(index)}
          >
            {tab.title}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div>{tabs[activeIndex]?.content}</div>
    </div>
  );
};
