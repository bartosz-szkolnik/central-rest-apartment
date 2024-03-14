import clsx from 'clsx';
import { ComponentProps } from 'react';

export type SubtitleProps = ComponentProps<'h3'> & {
  underline?: boolean;
};

export function Subtitle({ className, underline = true, ...props }: SubtitleProps) {
  return (
    <h3
      className={clsx('text-center text-xl font-bold text-title md:text-3xl', underline && 'underline', className)}
      {...props}
    />
  );
}
