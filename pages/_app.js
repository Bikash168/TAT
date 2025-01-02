import Navbar from '../components/Navbar'; // Import Navbar
import '../styles/globals.css'; // Import Tailwind or your global styles
import SideMenu from '../components/SideMenu';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Add Navbar here */}
      <SideMenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
