import p1 from "@/public/assets/forAboutUs1.png";
import p3 from "@/public/assets/forAboutUs2.png";

import AboutStudio from "@/components/aboutStudio/aboutStudio";
import OurApproach from "@/components/aboutOurApproach/ourApproach";
import CoreValues from "@/components/aboutCoreValues/coreValues";
import Team from "@/components/aboutTeam/team";
import Banner from "@/components/aboutBanner/banner";
import AboutContact from "@/components/aboutContact/aboutContact";


export const metadata = {
  title: "About — EL'ART",
  description: "Студия проектирования спортивных комплексов под ключ на любом этапе.",
  openGraph: {
    title: "About — EL'ART",
    description: "Студия проектирования спортивных комплексов под ключ на любом этапе.",
  },
};


export default function AboutPage() {
  return (
    <>
      <AboutStudio />
      <OurApproach imageSrc={p1}/>
      <Team />
      {/* <Banner imageSrc={p3}/> */}
      <AboutContact />
    </>
  );
}
