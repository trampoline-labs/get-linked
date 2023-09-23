"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

interface SlideInProps {
  fromDirection?: "right" | "left";
  children: React.ReactNode;
  className?: string;
}

export default function SlideIn({
  fromDirection = "right",
  children,
  className,
}: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const direction = fromDirection === "right" ? 200 : -200;

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : `translateX(${direction}px)`,
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

interface HoverProps {
  children: React.ReactNode;
}

export function HoverGesture({ children }: HoverProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
}
