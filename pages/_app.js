import Navbar from '../components/Navbar'; // Import Navbar
import '../styles/globals.css'; // Import Tailwind or your global styles


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Add Navbar here */}
     
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
