"use client";

import { motion } from "framer-motion";
import star_one from "@/public/icons/star.svg";
import star_two from "@/public/icons/star-two.svg";
import star_three from "@/public/icons/star-three.svg";
import star_four from "@/public/icons/star-four.svg";
import Image from "next/image";
import { getRandomNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

const starVariants = {
  initial: { scale: 1, opacity: 1 },
  blink: { scale: 0.2, opacity: 0.2 },
};

const imagePaths = [
  {
    id: 0,
    path: star_one,
  },
  {
    id: 1,
    path: star_two,
  },
  {
    id: 2,
    path: star_three,
  },
  {
    id: 3,
    path: star_four,
  },
];

const lookup = {
  pink: 0,
  white: 1,
  gray: 2,
  purple: 3,
};

type Color = "white" | "gray" | "pink" | "purple";
export interface StarProps {
  color?: Color;
  className: string;
}

export default function Star({ className, color = "white" }: StarProps) {
  const width = getRandomNumber(15, 34);
  const height = getRandomNumber(15, 38);

  return (
    <motion.div
      style={{ width, height }}
      variants={starVariants}
      initial="initial"
      animate="blink"
      transition={{ repeat: Infinity, duration: 0.9, repeatType: "reverse" }}
      className={cn("absolute", className)}
    >
      <ImageComponent id={lookup[color]} />
    </motion.div>
  );
}

function ImageComponent({ id }: { id: number }) {
  for (let i = 0; i < imagePaths.length; i++) {
    if (imagePaths[i].id === id) {
      return <Image src={imagePaths[i].path} alt="svg" />;
    }
  }
}
