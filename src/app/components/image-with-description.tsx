import Image, { StaticImageData } from 'next/image';
import { Subtitle } from './subtitle';
import { Paragraph } from './paragraph';

export type ImageWithDescriptionProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
  subtitle: string;
  description: string;
  textOrientation: 'left' | 'right';
};

export function ImageWithDescription({
  imageAlt,
  imageSrc,
  subtitle,
  description,
  textOrientation,
}: ImageWithDescriptionProps) {
  return (
    <>
      <div className="block md:hidden">
        <div className="mt-20 flex flex-col gap-4">
          <div className="col-span-1 flex flex-col items-center justify-center">
            <Subtitle text={subtitle}></Subtitle>
            <Paragraph className="mt-2 px-5 text-center text-sm" text={description}></Paragraph>
          </div>
          <div className="col-span-1">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="aspect-square h-full w-full rounded-2xl object-cover md:mt-0 md:aspect-auto md:h-[622px]"
            ></Image>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className=" mt-20 grid grid-cols-1 gap-x-6 md:grid-cols-4">
          {textOrientation === 'left' && (
            <div className="col-span-1 flex flex-col items-center justify-center">
              <Subtitle text={subtitle}></Subtitle>
              <Paragraph className="mt-2 px-5 text-center text-sm" text={description}></Paragraph>
            </div>
          )}
          <div className="col-span-3">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="aspect-square h-full w-full rounded-2xl object-cover md:mt-0 md:aspect-auto md:h-[622px]"
            ></Image>
          </div>
          {textOrientation === 'right' && (
            <div className="col-span-1 flex flex-col items-center justify-center">
              <Subtitle text={subtitle}></Subtitle>
              <Paragraph className="mt-2 px-5 text-center text-sm" text={description}></Paragraph>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
