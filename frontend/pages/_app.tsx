import Head from "next/head";
import "./components/assets/css/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kite Institute of Professional Studies</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
