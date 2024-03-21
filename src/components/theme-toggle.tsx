'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@components/ui/dropdown-menu';
import { Icon } from './ui/icon';
import { DictSection } from '../app/types';

export function ThemeToggle({ dict }: { dict: DictSection<'SETTINGS'> }) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icon variant="custom">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">{dict.TOGGLE_THEME}</span>
          </Icon>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>{dict.LIGHT_THEME}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>{dict.DARK_THEME}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>{dict.SYSTEM_THEME}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
