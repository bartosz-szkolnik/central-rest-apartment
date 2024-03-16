import { cn } from '@lib/utils';
import { ComponentProps } from 'react';

export function Paragraph({ className, ...props }: ComponentProps<'p'>) {
  return <p className={cn('text-content md:text-2xl', className)} {...props} />;
}
