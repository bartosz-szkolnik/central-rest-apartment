import clsx from 'clsx';

export type SubtitleProps = {
  text: string;
  className?: string;
  underline?: boolean;
};

export function Subtitle({ text, className, underline = true }: SubtitleProps) {
  return (
    <h3
      className={clsx('text-center text-xl font-bold text-title md:text-3xl', underline ? 'underline' : '', className)}
    >
      {text}
    </h3>
  );
}
