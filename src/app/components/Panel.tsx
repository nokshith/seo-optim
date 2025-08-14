import React from "react";
import clsx from "clsx";

type PanelProps = {
  color: string;
  text: string;
};

const Panel = ({ color, text }: PanelProps) => {
  return (
    <section
      className={clsx(
        "panel h-screen sticky top-0 flex items-center justify-center text-white text-6xl font-bold",
        color
      )}
    >
      {text}
    </section>
  );
};

export default Panel;
