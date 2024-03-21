import { cn } from '@lib/utils';
import { ComponentProps } from 'react';

export type SubtitleProps = ComponentProps<'h3'> & {
  underline?: boolean;
};

export function Subtitle({ className, underline = true, ...props }: SubtitleProps) {
  return (
    <h3
      className={cn('text-center text-xl font-bold text-header md:text-3xl', underline && 'underline', className)}
      {...props}
    />
  );
}
