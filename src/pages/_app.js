import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Antonio Grosu Developer</title>
        <meta
          name="description"
          content="I specialize in building captivating websites that engage users and drive results."
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
