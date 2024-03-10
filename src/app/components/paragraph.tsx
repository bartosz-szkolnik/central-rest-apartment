import clsx from 'clsx';
import { ComponentProps } from 'react';

export function Paragraph({ className, ...props }: ComponentProps<'p'>) {
  return <p className={clsx('text-content md:text-2xl', className)} {...props}></p>;
}
