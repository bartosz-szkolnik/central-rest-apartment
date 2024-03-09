import clsx from 'clsx';

export type TitleProps = {
  text: string;
  className?: string;
};

export function Title({ text, className }: TitleProps) {
  return <h2 className={clsx('text-center text-xl font-bold text-title md:text-4xl', className)}>{text}</h2>;
}
