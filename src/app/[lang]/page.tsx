import { AboutTheApartment } from '@sections/about-the-apartment';
import { Interior } from '@sections/interior';
import { TouristAttractions } from '@sections/tourist-attractions';
import { ContactInfo } from '@sections/contact-info';
import { Hero } from '@sections/hero';
import { Locale, getDictionary } from './dictionaries';
import { Settings } from './settings';
import { Separator } from '@components/separator';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <main>
        <Hero dict={dict.HERO} />
        <div className="mx-auto flex max-w-[1600px] flex-col gap-y-12 md:gap-y-16">
          <Separator className="mt-12 md:mt-16" />
          <AboutTheApartment dict={dict.ABOUT_THE_APARTMENT} />
          <Separator />
          <Interior dict={dict.INTERIOR} />
          <Separator />
          <TouristAttractions dict={dict.TOURIST_ATTRACTIONS} />
          <Separator />
          <ContactInfo dict={dict.CONTACT_INFO} />
        </div>
        <aside className="fixed bottom-6 right-6 block md:hidden">
          <Settings locale={lang} dict={dict.SETTINGS} />
        </aside>
        <aside className="fixed left-6 top-6 hidden md:block">
          <Settings locale={lang} dict={dict.SETTINGS} />
        </aside>
      </main>
    </>
  );
}
