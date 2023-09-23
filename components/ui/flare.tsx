import { cn } from '@/lib/utils';

interface Props {
  z: string;
}

const flare = ({ z }: Props) => {
  return (
    <div
      className={cn(
        "absolute bg-background-100 bg-auto bg-[url('../public/images/flare-two.png')] bg-blend-hard-light bg-no-repeat w-[24.75rem] h-[27.625rem]",
        z
      )}
    >
      &nbsp;
    </div>
  );
};

export default flare;
