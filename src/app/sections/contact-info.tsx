import { Subtitle } from '@/app/components/subtitle';
import { Paragraph } from '../components/paragraph';
import { Map } from '../components/map';
import { ExternalLink } from '../components/external-link';

export function ContactInfo() {
  return (
    <section className="relative mx-4 mb-20 mt-2 grid grid-cols-1 gap-y-3 pt-8 before:absolute before:left-1/2 before:h-[2px] before:w-20 before:-translate-x-1/2 before:bg-separator before:content-[''] md:grid-cols-2">
      <div className="flex flex-col gap-4 md:col-span-2">
        <Subtitle underline={false}>Interested?</Subtitle>
        <Subtitle underline={false}>Got more questions?</Subtitle>
        <Subtitle underline={false}>Contact Us!</Subtitle>
      </div>

      <div className="col-span-1 mt-8 md:border-r-2 md:border-separator">
        <Subtitle underline={false}>Contact Info:</Subtitle>
        <Paragraph className="mt-4 text-center text-[18px]">
          <span className="font-bold">WhatsApp Number: </span>
          <ExternalLink href="https://api.whatsapp.com/send?phone=48691699606">0048 691699606</ExternalLink>
        </Paragraph>
        <Paragraph className="mt-2 text-center text-[18px]">
          <span className="font-bold">Local Number in Paphos: </span>
          <ExternalLink href="tel:35796516752">0035 796516752</ExternalLink>
        </Paragraph>
        {/* <Paragraph className="mt-2 text-center text-[18px]" variant="withChildren">
          <span className="font-bold">Facebook Username: </span>
          <ExternalLink href="https://www.facebook.com/ka.za.338">Katarzyna Mróz</ExternalLink>
        </Paragraph> */}
        <Paragraph className="mt-2 text-center text-[18px]">
          <span className="font-bold">E-mail Address: </span>
          <ExternalLink href="mailto:mroz1812@gmail.com">mroz1812@gmail.com</ExternalLink>
        </Paragraph>
      </div>

      <div className="col-span-1 mt-8">
        <Subtitle underline={false}>Where apartment is located:</Subtitle>
        <div className="mt-4 flex justify-center">
          <Map></Map>
        </div>
        <div className="mx-12 mt-4 md:flex md:flex-col md:justify-center md:px-8">
          <Paragraph className="mt-2 text-[18px]">Address:</Paragraph>
          <Paragraph className="mt-2 text-[18px] font-bold">
            <span>
              10 Andrea Georgiou, Apt. 2016, <br />
              8046 Paphos City, <br />
              Cyprus
            </span>
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
