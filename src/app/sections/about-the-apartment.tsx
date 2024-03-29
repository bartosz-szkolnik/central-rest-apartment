import Image from 'next/image';
import AboutTheApartmentDrone from '../../img/about-the-apartment-1.jpg';
import AboutTheApartmentCity from '../../img/about-the-apartment-2.jpg';
import { Title } from '@components/title';
import { Paragraph } from '@components/paragraph';
import { DictSection } from '../types';

export function AboutTheApartment({ dict }: { dict: DictSection<'ABOUT_THE_APARTMENT'> }) {
  return (
    <section className="relative mx-4 grid grid-cols-1 gap-y-3 md:grid-cols-5 md:gap-12">
      <div className="col-span-3 flex flex-col">
        <Title className="mb-4">{dict.TITLE}</Title>
        <Paragraph className="text-justify text-sm">{dict.CONTENT}</Paragraph>
        <div className="flex flex-1 flex-col">
          <Image
            src={AboutTheApartmentDrone}
            sizes="(max-width: 768px) 100vw, (max-width: 1600px) 50vw, 33vw"
            alt=""
            className="mt-6 aspect-video h-full rounded-2xl"
          />
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={AboutTheApartmentCity}
          alt=""
          className="aspect-square h-full rounded-2xl object-cover md:mt-0 md:aspect-auto"
          priority
        />
      </div>
    </section>
  );
}
