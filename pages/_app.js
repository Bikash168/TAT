import Head from "next/head";
import Navbar from "../components/Navbar"; // Import Navbar
import "../styles/globals.css"; // Import Tailwind or your global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <Navbar /> {/* Add Navbar here */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
