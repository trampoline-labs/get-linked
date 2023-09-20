interface ButtonProps {
  label: string;
  action?: () => void;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className="px-14 py-4 text-primary-100 capitalize text-base rounded-sm bg-gradient-to-r from-primary-300 to-primary-400">
      {label}
    </button>
  );
}
