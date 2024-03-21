'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Locale } from '../app/[lang]/dictionaries';
import { useRouter, useSelectedLayoutSegments } from 'next/navigation';
import { Icon } from './ui/icon';
import { Button } from './ui/button';
import { DictSection } from '../app/types';
import { supportsEmojiIcons } from '@lib/utils';
import { useEffect, useState } from 'react';

export function LanguageToggle({ locale, dict }: { locale: Locale; dict: DictSection<'SETTINGS'> }) {
  const router = useRouter();
  const urlSegments = useSelectedLayoutSegments();
  const [supportsEmoji, setSupportsEmoji] = useState(true);

  useEffect(() => {
    setSupportsEmoji(supportsEmojiIcons());
  }, []);

  function handleLocaleChange(locale: Locale) {
    router.replace(`/${locale}/${urlSegments.join('/')}`, { scroll: false });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icon variant="custom">
            <Flag locale={locale} supportsEmoji={supportsEmoji} />
          </Icon>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLocaleChange('en-GB')}>
          <span className="flex items-center gap-2">
            <Flag locale={'en-GB'} supportsEmoji={supportsEmoji} />
            {dict.ENGLISH}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange('pl-PL')}>
          <span className="flex items-center gap-2">
            <Flag locale={'pl-PL'} supportsEmoji={supportsEmoji} />
            {dict.POLISH}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Flag({ supportsEmoji, locale }: { supportsEmoji: boolean; locale: Locale }) {
  switch (locale) {
    case 'en':
    case 'en-US':
    case 'en-GB':
      if (!supportsEmoji) {
        return <Icon variant="great-britain-flag" className="h-[1.2rem] w-[1.2rem]" />;
      }

      return <span className="text-2xl">🇬🇧</span>;

    case 'pl':
    case 'pl-PL':
      if (!supportsEmoji) {
        return <Icon variant="polish-flag" className="h-[1.2rem] w-[1.2rem]" />;
      }

      return <span className="text-2xl">🇵🇱</span>;
  }
}
