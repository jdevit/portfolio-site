"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: ReactNode;
  selector?: string;
};

export default function Portal({
  children,
  selector = "#offCanvas",
}: PortalProps) {
  const [mounted, setMounted] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.querySelector(selector) as HTMLDivElement);
    setMounted(true);
  }, [selector]);

  if (!mounted || !element) return null;

  return createPortal(children, element);
}
