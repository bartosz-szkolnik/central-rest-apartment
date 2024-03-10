import { PairImages } from '@/app/components/pair-images';
import { Paragraph } from '@/app/components/paragraph';
import { Title } from '@/app/components/title';
import Kitchen1 from '../img/the-kitchen-1.jpg';
import Kitchen2 from '../img/the-kitchen-2.jpg';
import LivingRoom1 from '../img/living-room-1.jpg';
import LivingRoom2 from '../img/living-room-2.jpg';
import FirstBedroom1 from '../img/first-bedroom-1.jpg';
import FirstBedroom2 from '../img/first-bedroom-2.jpg';
import SecondBedroom1 from '../img/second-bedroom-1.jpg';
import SecondBedroom2 from '../img/second-bedroom-2.jpg';
import Bathroom1 from '../img/the-bathroom-1.jpg';
import Bathroom2 from '../img/the-bathroom-2.jpg';

export function Interior() {
  return (
    <section className="relative mx-4 mt-2 pt-8 before:absolute before:left-1/2 before:h-[2px] before:w-20 before:-translate-x-1/2 before:bg-separator before:content-['']">
      <div className="mt-4">
        <Title>Interior: </Title>
        <div className="flex justify-center">
          <Paragraph className="mt-2 text-center text-sm md:w-3/4">
            The apartment is equipped with 2 bedrooms, 1 living room, 1 bathroom, 1 kitchen. This property offers access
            to 2 balconies, the bigger balcony, is equipped with a table and four chairs and has partial sea views. Free
            private parking, air-conditioned with free Wi-Fi, furnished with 2 flat-screen TV. Facilities included:
            double fitted wardrobes, equipped kitchen with bar style-seated dining area. Bed linen, bath and hand towels
            are provided.
          </Paragraph>
        </div>
      </div>

      <PairImages
        subtitle="The Living Room"
        images={[
          { src: LivingRoom1, alt: '' },
          { src: LivingRoom2, alt: '' },
        ]}
      ></PairImages>
      <PairImages
        subtitle="The Kitchen"
        images={[
          { src: Kitchen1, alt: '' },
          { src: Kitchen2, alt: '' },
        ]}
      ></PairImages>
      <PairImages
        subtitle="First Bedroom"
        images={[
          { src: FirstBedroom1, alt: '' },
          { src: FirstBedroom2, alt: '' },
        ]}
      ></PairImages>
      <PairImages
        subtitle="Second Bedroom"
        images={[
          { src: SecondBedroom1, alt: '' },
          { src: SecondBedroom2, alt: '' },
        ]}
      ></PairImages>
      <PairImages
        subtitle="The Bathroom"
        images={[
          { src: Bathroom1, alt: '' },
          { src: Bathroom2, alt: '' },
        ]}
      ></PairImages>
    </section>
  );
}
