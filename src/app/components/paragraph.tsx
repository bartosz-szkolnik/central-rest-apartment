import clsx from 'clsx';

export type ParagraphProps = {
  text: string;
  className?: string;
  variant?: 'text' | 'link';
  toWhere?: string;
};

export function Paragraph({ text, className, variant = 'text', toWhere }: ParagraphProps) {
  if (variant === 'link') {
    return (
      <p className={clsx('text-content md:text-2xl', className)}>
        <a className="text-link hover:underline" href={toWhere}>
          {text}
        </a>
      </p>
    );
  }

  return <p className={clsx('text-content md:text-2xl', className)}>{text}</p>;
}
