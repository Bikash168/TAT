import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Head Section for SEO */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || "Default description"} />
        <meta name="keywords" content={keywords || "default, keywords"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>


   
    </div>
  );
};

export default Layout;
