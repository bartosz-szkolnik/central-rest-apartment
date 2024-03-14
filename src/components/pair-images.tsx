import Image, { StaticImageData } from 'next/image';
import { Subtitle } from './subtitle';

export type SingleImage = {
  alt: string;
  src: StaticImageData;
};

export type PairImagesProps = {
  images: [SingleImage, SingleImage];
  subtitle: string;
};

export function PairImages({ subtitle, images }: PairImagesProps) {
  return (
    <div className="mt-28 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-12">
      <div className="col-span-1 md:col-span-2">
        <Subtitle>{subtitle}</Subtitle>
      </div>
      {images.map((image, index) => (
        <div key={index} className="col-span-1 md:col-span-1">
          <Image
            src={image.src}
            alt={image.alt}
            className="aspect-square h-full rounded-2xl object-cover md:mt-0 md:aspect-auto"
          />
        </div>
      ))}
    </div>
  );
}
