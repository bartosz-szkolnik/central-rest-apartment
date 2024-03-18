import { Subtitle } from '@components/subtitle';
import { Paragraph } from '../../components/paragraph';
import { Map } from '../../components/map';
import { ExternalLink } from '../../components/external-link';
import { DictSection } from '../types';
import { Title } from '@components/title';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/Andrea+Georgiou+10-2016,+Paphos+8046,+Cyprus/@34.7735554,32.4154569,17z/data=!3m1!4b1!4m5!3m4!1s0x14e706f17b5d94d9:0xa55c1a4cc6167b86!8m2!3d34.7735554!4d32.4180318?entry=ttu';

export function ContactInfo({ dict }: { dict: DictSection<'CONTACT_INFO'> }) {
  return (
    <section className="relative mx-4 mb-20 grid grid-cols-1 gap-y-3 md:grid-cols-2">
      <div className="flex flex-col gap-4 md:col-span-2">
        <Title>{dict.INTERESTED}</Title>
        <Title>{dict.GOT_MORE_QUESTIONS}</Title>
        <Title>{dict.CONTACT_US}</Title>
      </div>

      <div className="col-span-1 mt-8 md:border-r-2 md:border-separator">
        <Subtitle underline={false}>{dict.CONTACT_INFO}</Subtitle>
        <Paragraph className="mt-4 text-center text-[18px]">
          <span className="font-bold">{dict.WHATS_APP_NUMBER}</span>
          <ExternalLink href="https://api.whatsapp.com/send?phone=48691699606">0048 691699606</ExternalLink>
        </Paragraph>
        <Paragraph className="mt-2 text-center text-[18px]">
          <span className="font-bold">{dict.LOCAL_NUMBER_IN_PAPHOS}</span>
          <ExternalLink href="tel:35796516752">0035 796516752</ExternalLink>
        </Paragraph>
        {/* <Paragraph className="mt-2 text-center text-[18px]" variant="withChildren">
          <span className="font-bold">Facebook Username: </span>
          <ExternalLink href="https://www.facebook.com/ka.za.338">Katarzyna Mróz</ExternalLink>
        </Paragraph> */}
        <Paragraph className="mt-2 text-center text-[18px]">
          <span className="font-bold">{dict.EMAIL_ADDRESS}</span>
          <ExternalLink href="mailto:mroz1812@gmail.com">mroz1812@gmail.com</ExternalLink>
        </Paragraph>
        <div className="mx-12 mt-8 md:flex md:flex-col md:justify-center md:px-8">
          <Paragraph className="mt-2 text-[18px]">{dict.ADDRESS}</Paragraph>
          <Paragraph className="mt-2 text-[18px] font-bold">
            <span>
              10 Andrea Georgiou, Apt. 2016, <br />
              8046 Paphos City, <br />
              {dict.CYPRUS}
            </span>
          </Paragraph>
          <Paragraph className="mt-4">
            <ExternalLink target="_blank" href={GOOGLE_MAPS_LINK}>
              {dict.OR_LOOK_AT_GOOGLE_MAPS}
            </ExternalLink>
          </Paragraph>
        </div>
      </div>

      <div className="col-span-1 mt-8">
        <Subtitle underline={false}>{dict.WHERE_APARTMENT_IS_LOCATED}</Subtitle>
        <div className="mt-4 flex justify-center">
          <Map />
        </div>
      </div>
    </section>
  );
}
