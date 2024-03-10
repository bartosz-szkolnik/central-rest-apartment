import Image from 'next/image';
import AboutTheApartmentDrone from '../img/about-the-apartment-1.jpg';
import AboutTheApartmentCity from '../img/about-the-apartment-2.jpg';
import { Title } from '@/app/components/title';
import { Paragraph } from '@/app/components/paragraph';

export function AboutTheApartment() {
  return (
    <section className="relative mx-4 mt-2 grid grid-cols-1 gap-y-3 pt-8 before:absolute before:left-1/2 before:h-[2px] before:w-20 before:-translate-x-1/2 before:bg-separator before:content-[''] md:grid-cols-5 md:gap-12">
      <div className="col-span-3 flex flex-col">
        <Title>About the apartment: </Title>
        <Paragraph className="text-justify text-sm">
          This attractive apartment is situated in the Paphos City, close to the local attractions and interesting
          dining options. Only 1.7 km from Kefalos Beach and 1.9 km from Lighthouse Beach, the Central Rest Apartment
          offer an excellent base to explore and enjoy Paphos. The harbour and Kings shopping mall are both a pleasant
          20-minute walk away.
        </Paragraph>
        <div className="flex flex-1 flex-col">
          <Image
            src={AboutTheApartmentDrone}
            sizes="(max-width: 768px) 100vw, (max-width: 1600px) 50vw, 33vw"
            alt=""
            className="mt-6 aspect-video h-full rounded-2xl"
          ></Image>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={AboutTheApartmentCity}
          alt=""
          className="aspect-square h-full rounded-2xl object-cover md:mt-0 md:aspect-auto"
          priority
        ></Image>
      </div>
    </section>
  );
}
