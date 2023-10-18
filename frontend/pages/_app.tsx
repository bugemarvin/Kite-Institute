import Head from "next/head";
import "./components/assets/css/globals.css";
import './components/assets/leaflet/leaflet.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property='og:title' content='Kite Institute of Professional Studies' />
        <meta property='og:description' content='Kite Institute of Professional Studies is an organization that provides tutoring services to students in Kitengela Area.' />
        <title>Kite Institute of Professional Studies</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
