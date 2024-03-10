import Image from 'next/image';
import HeroImage from '../img/hero.jpg';

export function Hero() {
  return (
    <header className="relative mb-8">
      <Image
        src={HeroImage}
        style={{ width: '100vw', height: '100vh' }}
        alt=""
        className="object-cover"
        priority
      ></Image>
      <div className="absolute left-1/2 top-[96px] flex h-32 w-10/12 -translate-x-2/4 items-center justify-center rounded-xl bg-vanilla p-4 md:hidden">
        <h1 className="border-4 border-vanilla border-b-hero-text text-center text-2xl font-extrabold text-hero-text">
          Central Rest Apartment in Paphos
        </h1>
      </div>
      <div className="aria-hidden absolute left-1/2 top-[96px] hidden -translate-x-2/4 md:block">
        <h1 className="border-0 border-b-4 border-b-hero-text text-center text-[6rem] font-bold text-vanilla [-webkit-text-stroke:#363636_4px]">
          Central Rest Apartment in Paphos
        </h1>
      </div>
    </header>
  );
}
