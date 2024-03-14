import { PairImages } from '@/components/pair-images';
import { Paragraph } from '@/components/paragraph';
import { Title } from '@/components/title';
import Kitchen1 from '../../img/the-kitchen-1.jpg';
import Kitchen2 from '../../img/the-kitchen-2.jpg';
import LivingRoom1 from '../../img/living-room-1.jpg';
import LivingRoom2 from '../../img/living-room-2.jpg';
import FirstBedroom1 from '../../img/first-bedroom-1.jpg';
import FirstBedroom2 from '../../img/first-bedroom-2.jpg';
import SecondBedroom1 from '../../img/second-bedroom-1.jpg';
import SecondBedroom2 from '../../img/second-bedroom-2.jpg';
import Bathroom1 from '../../img/the-bathroom-1.jpg';
import Bathroom2 from '../../img/the-bathroom-2.jpg';
import { DictSection } from '../types';

export function Interior({ dict }: { dict: DictSection<'INTERIOR'> }) {
  return (
    <section className="before:bg-separator relative mx-4 mt-2 pt-8 before:absolute before:left-1/2 before:h-[2px] before:w-20 before:-translate-x-1/2 before:content-['']">
      <div className="mt-4">
        <Title>{dict.TITLE}</Title>
        <div className="flex justify-center">
          <Paragraph className="mt-2 text-center text-sm md:w-3/4">{dict.CONTENT}</Paragraph>
        </div>
      </div>

      <PairImages
        subtitle={dict.LIVING_ROOM}
        images={[
          { src: LivingRoom1, alt: '' },
          { src: LivingRoom2, alt: '' },
        ]}
      />
      <PairImages
        subtitle={dict.KITCHEN}
        images={[
          { src: Kitchen1, alt: '' },
          { src: Kitchen2, alt: '' },
        ]}
      />
      <PairImages
        subtitle={dict.FIRST_BEDROOM}
        images={[
          { src: FirstBedroom1, alt: '' },
          { src: FirstBedroom2, alt: '' },
        ]}
      />
      <PairImages
        subtitle={dict.SECOND_BEDROOM}
        images={[
          { src: SecondBedroom1, alt: '' },
          { src: SecondBedroom2, alt: '' },
        ]}
      />
      <PairImages
        subtitle={dict.BATHROOM}
        images={[
          { src: Bathroom1, alt: '' },
          { src: Bathroom2, alt: '' },
        ]}
      />
    </section>
  );
}
