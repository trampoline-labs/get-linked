interface ButtonProps {
  label: string;
  action?: () => void;
}

export default function Button({ label }: ButtonProps) {
  return <button>{label}</button>;
}
