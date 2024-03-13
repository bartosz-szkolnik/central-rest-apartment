import { ImageWithDescription } from '@/app/components/image-with-description';
import { Paragraph } from '@/app/components/paragraph';
import { Title } from '@/app/components/title';
import TheHarbor from '../img/the-harbor.jpeg';
import SarandaKolonesCastle from '../img/saranda-kolones-castle.jpg';
import MitropolisOfPaphos from '../img/mitropolis-of-pathos.jpg';
import TwentyEightOctovrioSquare from '../img/twenty-eight-octovriou-square.jpg';
import SaintPaulsPillar from '../img/saint-pauls-pillar.jpg';
import { Subtitle } from '@/app/components/subtitle';

export function TouristAttractions() {
  return (
    <section className="relative mx-4 mt-2 pt-8 before:absolute before:left-1/2 before:h-[2px] before:w-20 before:-translate-x-1/2 before:bg-separator before:content-['']">
      <div className="mt-4  md:mb-28 md:mr-20">
        <Title className="md:text-right">Tourist Attractions:</Title>
      </div>
      <div className="static right-0 top-0 mt-2 md:absolute md:right-10 md:top-20 md:w-[654px]">
        <Paragraph className="mt-2 text-center text-sm">
          Additionaly there are many popular points of interest near the apartment which include:
        </Paragraph>
      </div>
      <ImageWithDescription
        subtitle="The Harbor"
        description="The Paphos Harbor which is filled with various restaurants and cafés"
        alt=""
        textOrientation="right"
        src={TheHarbor}
      ></ImageWithDescription>
      <ImageWithDescription
        subtitle="Saranda Kolones Castle"
        description="This ruined medieval fortress in the Paphos Archaeological Park"
        alt=""
        textOrientation="left"
        src={SarandaKolonesCastle}
      ></ImageWithDescription>
      <ImageWithDescription
        subtitle="Mitropolis of Paphos"
        description="Ancient archeological findings which have stood for thousands of years"
        alt=""
        textOrientation="right"
        src={MitropolisOfPaphos}
      ></ImageWithDescription>
      <ImageWithDescription
        subtitle="28 Octovriou Square"
        description="The Heart of the City and the location of City Centre"
        alt=""
        textOrientation="left"
        src={TwentyEightOctovrioSquare}
      ></ImageWithDescription>
      <ImageWithDescription
        subtitle="St. Paul’s Pillar"
        description="Ancient Religious monument"
        alt=""
        textOrientation="right"
        src={SaintPaulsPillar}
      ></ImageWithDescription>

      <Subtitle underline={false} className="mb-8 mt-36">
        & many more!
      </Subtitle>
    </section>
  );
}
