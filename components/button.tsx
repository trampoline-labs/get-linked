import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  label: string;
  path?: string;
  className?: string;
}

export default function Button({ label, className, path = "/" }: ButtonProps) {
  return (
    <Link
      href={path}
      className={cn(
        "inline-block px-14 py-4 text-primary-100 capitalize text-base rounded-sm bg-gradient-to-r from-primary-300 via-primary-200 to-primary-400 lg:hover:scale-110 transition-all duration-200",
        className
      )}
    >
      {label}
    </Link>
  );
}
