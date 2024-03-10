import { AboutTheApartment } from '@/app/sections/about-the-apartment';
import { Interior } from '@/app/sections/interior';
import { TouristAttractions } from './sections/tourist-attractions';
import { ContactInfo } from './sections/contact-info';
import { Hero } from './sections/hero';

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <div className="mx-auto flex max-w-[1600px] flex-col gap-y-12">
        <AboutTheApartment></AboutTheApartment>
        <Interior></Interior>
        <TouristAttractions></TouristAttractions>
        <ContactInfo></ContactInfo>
      </div>
    </main>
  );
}
