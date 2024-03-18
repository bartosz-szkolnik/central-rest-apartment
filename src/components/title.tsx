import { cn } from '@lib/utils';
import { ComponentProps } from 'react';

export function Title({ className, ...props }: ComponentProps<'h2'>) {
  return <h2 className={cn('text-center text-2xl font-bold text-header md:text-4xl', className)} {...props} />;
}
