import { cn } from '@lib/utils';

export function Separator({ className }: { className?: string }) {
  return (
    <hr
      className={cn(
        "border-t-0 before:absolute before:left-1/2 before:h-[2px] before:w-20 before:-translate-x-1/2 before:bg-separator before:content-['']",
        className,
      )}
    />
  );
}
