import clsx from 'clsx';
import { ComponentProps } from 'react';

export function Title({ className, ...props }: ComponentProps<'h2'>) {
  return <h2 className={clsx('text-center text-xl font-bold text-title md:text-4xl', className)} {...props}></h2>;
}
