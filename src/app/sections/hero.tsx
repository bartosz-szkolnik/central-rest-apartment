import Image from 'next/image';
import HeroImage from '../../img/hero.jpg';
import { Cairo } from 'next/font/google';
import { DictSection } from '../types';
import { cn } from '@lib/utils';

const heroFont = Cairo({ subsets: ['latin-ext'], weight: ['500', '600', '700', '800'] });

export function Hero({ dict }: { dict: DictSection<'HERO'> }) {
  return (
    <header className="relative">
      <Image src={HeroImage} style={{ width: '100vw', height: '100vh' }} alt="" className="object-cover" priority />
      <div className="block md:hidden">
        <div className="absolute left-1/2 top-[96px] flex h-32 w-11/12 -translate-x-2/4 items-center justify-center rounded-xl bg-gradient-middle p-4 pt-2 dark:bg-chocolate">
          <h1
            style={{ wordSpacing: '0.25rem' }}
            className={cn(
              'border-4 border-gradient-middle border-b-chocolate pb-2 pt-0 text-center text-2xl font-semibold leading-normal text-chocolate dark:border-chocolate dark:border-b-vanilla dark:text-vanilla',
              heroFont.className,
            )}
          >
            {dict.TITLE}
          </h1>
        </div>
      </div>
      <div className="aria-hidden hidden md:block">
        <div className="absolute left-1/2 top-[96px] -translate-x-2/4">
          <h1
            style={{ wordSpacing: '0.6rem', letterSpacing: '-0.05rem' }}
            className={cn(
              'text-darker-vanilla border-0 border-b-4 border-b-chocolate text-center text-[6rem] font-extrabold [-webkit-text-stroke:#363636_4.5px]',
              heroFont.className,
            )}
          >
            {dict.TITLE}
          </h1>
        </div>
      </div>
    </header>
  );
}
