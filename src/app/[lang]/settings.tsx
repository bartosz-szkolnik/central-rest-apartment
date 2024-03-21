import { LanguageToggle } from '@components/language-toggle';
import { ThemeToggle } from '@components/theme-toggle';
import { Button } from '@components/ui/button';
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@components/ui/drawer';
import { Locale } from './dictionaries';
import { Icon } from '@components/ui/icon';
import { DictSection } from '../types';

export function Settings({ locale, dict }: { locale: Locale; dict: DictSection<'SETTINGS'> }) {
  return (
    <>
      <div className="block md:hidden">
        <Drawer direction="bottom">
          <DrawerTrigger asChild>
            <Button variant="outline" size="icon">
              <Icon variant="settings" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <div className="flex justify-start">
                <DrawerTitle>
                  <span className="text-content">{dict.TITLE}</span>
                </DrawerTitle>
              </div>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex gap-4">
                <LanguageToggle locale={locale} dict={dict} />
                <ThemeToggle dict={dict} />
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="aria-hidden hidden md:block">
        <div className="flex gap-4">
          <LanguageToggle locale={locale} dict={dict} />
          <ThemeToggle dict={dict} />
        </div>
      </div>
    </>
  );
}
