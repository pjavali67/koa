import React from "react";

function SubHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      {subtitle}
      {title}
    </div>
  );
}

export default SubHeading;
