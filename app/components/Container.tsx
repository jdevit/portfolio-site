import React from "react";
import clsx from "clsx";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  padding?: boolean;
};
const Container = ({
  children,
  className = "",
  padding = true,
}: ContainerProps) => {
  return (
    <div
      className={clsx({
        "p-6": padding,
        "max-w-5xl mx-auto": true,
        [className]: true,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
