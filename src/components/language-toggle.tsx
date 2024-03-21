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
  const [supportsEmoji, setSupportsEmoji] = useState(false);

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
            {supportsEmoji ? (
              <>
                {(locale === 'en' || locale === 'en-US' || locale === 'en-GB') && <span className="text-2xl">🇬🇧</span>}
                {(locale === 'pl' || locale === 'pl-PL') && <span className="text-2xl">🇵🇱</span>}
              </>
            ) : locale === 'pl' || locale === 'pl-PL' ? (
              <Icon variant="polish-flag" className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Icon variant="great-britain-flag" className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">{dict.CHOOSE_LANGUAGE}</span>
          </Icon>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLocaleChange('en-GB')}>
          <span className="flex items-center gap-2">
            {supportsEmoji ? (
              <span className="text-2xl">🇬🇧</span>
            ) : (
              <Icon variant="great-britain-flag" className="h-[1.2rem] w-[1.2rem]" />
            )}
            {dict.ENGLISH}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange('pl-PL')}>
          <span className="flex items-center gap-2">
            {supportsEmoji ? (
              <span className="text-2xl">🇵🇱</span>
            ) : (
              <Icon variant="polish-flag" className="h-[1.2rem] w-[1.2rem]" />
            )}
            {dict.POLISH}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
