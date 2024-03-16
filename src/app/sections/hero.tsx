import Image from 'next/image';
import HeroImage from '../../img/hero.jpg';
import { DictSection } from '../types';

export function Hero({ dict }: { dict: DictSection<'HERO'> }) {
  return (
    <header className="relative mb-8">
      <Image src={HeroImage} style={{ width: '100vw', height: '100vh' }} alt="" className="object-cover" priority />
      <div className="bg-vanilla absolute left-1/2 top-[96px] flex h-32 w-10/12 -translate-x-2/4 items-center justify-center rounded-xl p-4 md:hidden">
        <h1 className="border-vanilla border-b-chocolate text-chocolate border-4 text-center text-2xl font-extrabold">
          {dict.TITLE}
        </h1>
      </div>
      <div className="aria-hidden absolute left-1/2 top-[96px] hidden -translate-x-2/4 md:block">
        <h1 className="border-b-chocolate text-vanilla border-0 border-b-4 text-center text-[6rem] font-bold [-webkit-text-stroke:#363636_4px]">
          {dict.TITLE}
        </h1>
      </div>
    </header>
  );
}
