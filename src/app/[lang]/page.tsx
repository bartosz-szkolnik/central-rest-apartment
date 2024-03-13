import { AboutTheApartment } from '@/app/sections/about-the-apartment';
import { Interior } from '@/app/sections/interior';
import { TouristAttractions } from '../sections/tourist-attractions';
import { ContactInfo } from '../sections/contact-info';
import { Hero } from '../sections/hero';
import { Locale, getDictionary } from './dictionaries';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <main>
      <Hero dict={dict.HERO}></Hero>
      <div className="mx-auto flex max-w-[1600px] flex-col gap-y-12">
        <AboutTheApartment dict={dict.ABOUT_THE_APARTMENT}></AboutTheApartment>
        <Interior dict={dict.INTERIOR}></Interior>
        <TouristAttractions dict={dict.TOURIST_ATTRACTIONS}></TouristAttractions>
        <ContactInfo dict={dict.CONTACT_INFO}></ContactInfo>
      </div>
    </main>
  );
}
