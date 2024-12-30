// pages/_app.js
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout title={pageProps.title || "Trident Academy of Technology"}> {/* Pass dynamic title */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

