import NavigationPage from './components/header/NavigationPage';
import HeroSection from './components/About/hero';
import Head from 'next/head';

export default function AboutPage () {
  return (
    <>
      <Head>
        <title>About Us | Kite Institute of professional studies </title>
        <meta name='description' content='Kite Institute of professional studies is an organization that provides tutoring services to students in Kitengela Area.' />
      </Head>
      <NavigationPage />
      <HeroSection />
    </>
  );
}
