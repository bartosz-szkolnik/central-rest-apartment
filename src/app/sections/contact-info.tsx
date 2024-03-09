import { Subtitle } from '@/app/components/subtitle';
import { Paragraph } from '../components/paragraph';
import { Map } from '../components/map';

export function ContactInfo() {
  return (
    <section className="relative mx-4 mb-20 mt-2 grid grid-cols-1 gap-y-3 pt-8 before:absolute before:left-1/2 before:h-[2px] before:w-20 before:-translate-x-1/2 before:bg-separator before:content-[''] md:grid-cols-2">
      <div className="md:col-span-2">
        <Subtitle underline={false} className="pt-" text="Interested?"></Subtitle>
        <Subtitle underline={false} className="" text="Got more questions?"></Subtitle>
        <Subtitle underline={false} className="" text="Contact Us!"></Subtitle>
      </div>

      <div className="col-span-1 mt-8 md:border-r-2 md:border-separator">
        <Subtitle underline={false} text="Contact Info:"></Subtitle>
        <div className="mt-8 flex gap-2">
          <div className="w-7/12">
            <Paragraph className="mt-2 text-right text-[18px] font-bold" text="WhatsApp Number:"></Paragraph>
            <Paragraph className="mt-2 text-right text-[18px] font-bold" text="Local Number in Paphos:"></Paragraph>
            <Paragraph className="mt-2 text-right text-[18px] font-bold" text="Facebook Username:"></Paragraph>
            <Paragraph className="mt-2 text-right text-[18px] font-bold" text="E-mail Address:"></Paragraph>
          </div>
          <div className="w-5/12">
            <Paragraph className="mt-2 text-[18px]" text="0048 691699606"></Paragraph>
            <Paragraph className="mt-2 text-[18px]" text="0035 796516752"></Paragraph>
            <Paragraph
              variant="link"
              toWhere="https://www.facebook.com/ka.za.338"
              className="mt-2 text-[18px]"
              text="Katarzyna Mróz"
            ></Paragraph>
            <Paragraph
              variant="link"
              toWhere="mailto:mroz1812@gmail.com"
              className="mt-2 truncate text-[18px]"
              text="mroz1812@gmail.com"
            ></Paragraph>
          </div>
        </div>
      </div>

      <div className="col-span-1 mt-8">
        <Subtitle underline={false} text="Where apartment is located:"></Subtitle>
        <div className="mt-4 flex justify-center">
          <Map></Map>
        </div>
        <div className="mx-24 mt-4 md:flex md:flex-col md:justify-center md:px-8">
          <Paragraph className="mt-2 text-[18px]" text="Address:"></Paragraph>
          <Paragraph
            className="mt-2 text-[18px] font-bold"
            text="10 Andrea Georgiou, Apt. 2016, 8046 Paphos City, Cyprus"
          ></Paragraph>
        </div>
      </div>
    </section>
  );
}
