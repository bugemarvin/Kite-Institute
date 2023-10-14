import NavigationPage from './components/header/NavigationPage';
import HeroSection from './components/Location/hero';
import Head from 'next/head';

export default function LocationPage () {
  return (
    <>
      <Head>
        <title>Locate Us | Kite Institute of professional studies </title>
        <meta name='description' content='Kite Institute of professional studies is an organization that provides tutoring services to students in Kitengela Area.' />
      </Head>
      <NavigationPage />
      <HeroSection />
    </>
  );
}
