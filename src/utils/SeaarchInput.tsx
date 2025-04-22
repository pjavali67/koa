"use client";

import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export const SearchInput = ({ value, onChange }: Props) => (
  <div className="mb-6 max-w-md mx-auto">
    <Input
      type="text"
      placeholder="Search news..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
