import { cn } from '@lib/utils';

export function Separator({ className, long = false }: { className?: string; long?: boolean }) {
  return (
    <hr
      className={cn(
        "border-t-0 before:absolute before:left-1/2 before:h-[2px] before:-translate-x-1/2 before:bg-separator before:content-['']",
        long ? 'bofore:w-0 md:before:w-[80%]' : 'before:w-20',
        className,
      )}
    />
  );
}
