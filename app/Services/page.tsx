import ServicesHero from "@/components/servicesHero/servicesHero";
import ServicesList from "@/components/servicesList/servicesList";
import ServicesRoadmap from "@/components/servicesRoadmap/servicesRoadmap";
import ServicesProcess from "@/components/servicesProcess/servicesProcess";
import ServicesCta from "@/components/servicesCta/servicesCta";

export const metadata = {
  title: "Услуги — EL'ART",
  description: "Архитектурное проектирование, консалтинг, дизайн-проекты и 3D-визуализация спортивных комплексов под ключ.",
  openGraph: {
    title: "Услуги — EL'ART",
    description: "Архитектурное проектирование, консалтинг, дизайн-проекты и 3D-визуализация спортивных комплексов под ключ.",
  },
};


export default function ServicesPage() {
  return (
    <>
        <ServicesHero />
        <ServicesList />
        <ServicesRoadmap />
        {/* <ServicesProcess /> */}
        <ServicesCta />      
    </>
  );
}
