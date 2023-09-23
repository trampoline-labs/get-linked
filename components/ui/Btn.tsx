import { cn } from '@/lib/utils';

interface Props {
  text: string;
  className?: string;
}

const Btn = ({ text, className }: Props) => {
  return (
    <>
      <button
        className={cn(
          'inline-block px-14 py-4 text-primary-100 capitalize text-base rounded-sm bg-gradient-to-r from-primary-300 via-primary-200 to-primary-400 lg:hover:scale-110 transition-all duration-200',
          className
        )}
      >
        {text}
      </button>
    </>
  );
};

export default Btn;
