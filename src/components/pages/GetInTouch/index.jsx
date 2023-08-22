import { Division, Text } from '../../atoms';
import { Header, Footer, ContactUsFrom, MultiHeadingComponent, OfficeAddress } from '../../organisms';

export function GetInTouch() {
  return (
    <Division divVariant="bg-blue-20">
      <Header HeaderPositionProperty="" />
      <MultiHeadingComponent headingText="Contact Pakistan Tech Expo For More Information." headingVariant="font-bold font-worksans text-30px sm:text-40px md:text-50px lg:text-60px text-white leading-none" desText="" desVariant="" />
      <ContactUsFrom />
      <OfficeAddress />
      <Footer />
    </Division>
  )
}