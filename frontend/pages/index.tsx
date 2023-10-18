import NavigationPage from './components/header/NavigationPage';
import HeroSection from './components/Landing/hero';
import AboutSection from './components/Landing/labout';
import CoursesSection from './components/Landing/lcourses';
import LocationSection from './components/Landing/llocation';
import ContactSection from './components/Landing/lcontact';
import FooterPage from './components/footer/footer';
import {ScrollShadow} from "@nextui-org/react";

export default function Page () {
  return (
    <>
      <NavigationPage />
      <ScrollShadow size={100} className="w-[300px] h-[400px]">
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <LocationSection />
      <ContactSection />
      <FooterPage />
      </ScrollShadow>
    </>
  );
}
