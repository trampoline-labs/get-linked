import { cn } from "@/lib/utils";

interface PlusIconProps {
  className?: string;
}

export default function PlusIcon({ className }: PlusIconProps) {
  return (
    <svg
      width="11"
      height="11"
      className={cn("transition-transform duration-200", className)}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.76376 10.2385V6.43853H0.943765V4.55853H4.76376V0.798525H6.56377V4.55853H10.3838V6.43853H6.56377V10.2385H4.76376Z"
        fill="#D434FE"
      />
    </svg>
  );
}
