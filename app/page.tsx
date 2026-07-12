import HERO from "@/components/mainHERO/hero";
import Intro from "@/components/mainIntro/intro"
import ServicesPreview from "@/components/servicesPreview/servicesPreview";
import CTA from "@/components/mainCTA/cta";
import ProjectsPreview from "@/components/projectsPreview/projectsPreview";

export default function Page() {
  return (
    <>
      <HERO />
      <Intro />
      <ServicesPreview />
      <ProjectsPreview />
      <CTA />
    </>
  );
}