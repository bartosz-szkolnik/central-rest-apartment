import Image, { StaticImageData } from 'next/image';
import { Subtitle } from './subtitle';

export type PairImagesProps = {
  image1Src: StaticImageData;
  image2Src: StaticImageData;
  image1Alt: string;
  image2Alt: string;
  subtitle: string;
};

export function PairImages({ subtitle, image1Alt, image1Src, image2Alt, image2Src }: PairImagesProps) {
  return (
    <div className="mt-28 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-12">
      <div className="col-span-1 md:col-span-2">
        <Subtitle text={subtitle}></Subtitle>
      </div>
      <div className="col-span-1 md:col-span-1">
        <Image
          src={image1Src}
          alt={image1Alt}
          className="aspect-square h-full rounded-2xl object-cover md:mt-0 md:aspect-auto"
        ></Image>
      </div>
      <div className="col-span-1 md:col-span-1">
        <Image
          src={image2Src}
          alt={image2Alt}
          className="aspect-square h-full rounded-2xl object-cover md:mt-0 md:aspect-auto"
        ></Image>
      </div>
    </div>
  );
}
