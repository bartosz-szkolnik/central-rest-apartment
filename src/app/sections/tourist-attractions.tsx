import { ImageWithDescription } from '@components/image-with-description';
import { Paragraph } from '@components/paragraph';
import { Title } from '@components/title';
import TheHarbor from '../../img/the-harbor.jpeg';
import SarandaKolonesCastle from '../../img/saranda-kolones-castle.jpg';
import MitropolisOfPaphos from '../../img/mitropolis-of-pathos.jpg';
import TwentyEightOctovrioSquare from '../../img/twenty-eight-octovriou-square.jpg';
import SaintPaulsPillar from '../../img/saint-pauls-pillar.jpg';
import { Subtitle } from '@components/subtitle';
import { DictSection } from '../types';

export function TouristAttractions({ dict }: { dict: DictSection<'TOURIST_ATTRACTIONS'> }) {
  return (
    <section className="relative mx-4">
      <Title className="mb-4">{dict.TITLE}</Title>

      <Paragraph className="mt-2 text-center text-sm">{dict.INFO}</Paragraph>
      <ImageWithDescription
        subtitle={dict.THE_HARBOR.TITLE}
        description={dict.THE_HARBOR.CONTENT}
        alt=""
        textOrientation="right"
        src={TheHarbor}
      />
      <ImageWithDescription
        subtitle={dict.SARANDA_KOLONES_CASTLE.TITLE}
        description={dict.SARANDA_KOLONES_CASTLE.CONTENT}
        alt=""
        textOrientation="left"
        src={SarandaKolonesCastle}
      />
      <ImageWithDescription
        subtitle={dict.MITROPOLIS_OF_PATHOS.TITLE}
        description={dict.MITROPOLIS_OF_PATHOS.CONTENT}
        alt=""
        textOrientation="right"
        src={MitropolisOfPaphos}
      />
      <ImageWithDescription
        subtitle={dict['28_OCTOVRIOU_SQUARE'].TITLE}
        description={dict['28_OCTOVRIOU_SQUARE'].CONTENT}
        alt=""
        textOrientation="left"
        src={TwentyEightOctovrioSquare}
      />
      <ImageWithDescription
        subtitle={dict.ST_PAULS_PILLAR.TITLE}
        description={dict.ST_PAULS_PILLAR.CONTENT}
        alt=""
        textOrientation="right"
        src={SaintPaulsPillar}
      />

      <Subtitle underline={false} className="mt-20 md:mt-28">
        {dict.MANY_MORE}
      </Subtitle>
    </section>
  );
}
