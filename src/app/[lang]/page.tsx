import { AboutTheApartment } from '@sections/about-the-apartment';
import { Interior } from '@sections/interior';
import { TouristAttractions } from '@sections/tourist-attractions';
import { ContactInfo } from '@sections/contact-info';
import { Hero } from '@sections/hero';
import { Locale, getDictionary } from './dictionaries';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <main>
      <Hero dict={dict.HERO} />
      <div className="mx-auto flex max-w-[1600px] flex-col gap-y-12">
        <AboutTheApartment dict={dict.ABOUT_THE_APARTMENT} />
        <Interior dict={dict.INTERIOR} />
        <TouristAttractions dict={dict.TOURIST_ATTRACTIONS} />
        <ContactInfo dict={dict.CONTACT_INFO} />
      </div>
    </main>
  );
}
