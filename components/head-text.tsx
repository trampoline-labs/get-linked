interface HeadTextProps {
  label: string;
  highlight: string;
  children: React.ReactNode;
}

export default function HeadText({
  label,
  highlight,
  children,
}: HeadTextProps) {
  return (
    <article className="text-center lg:text-left flex flex-col gap-4">
      <h1 className="font-clash-display font-bold text-xl lg:text-3-5xl mx-auto lg:mx-0 lg:leading-10">
        {label} <br />
        <span className="text-primary-200">{highlight}</span>
      </h1>
      {children}
    </article>
  );
}
