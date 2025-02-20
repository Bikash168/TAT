// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />

        <meta name="description" content="TACT-School of Biotech Sciences official website. Explore our courses, infrastructure, and research initiatives." />
        <meta name="keywords" content="Biotechnology, Education, Research, TSBS, Courses, Infrastructure" />
        <meta name="author" content="TACT-School of Biotech Sciences" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome (for icons) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />

        {/* Tailwind CSS (if needed for additional global styles) */}
        <link href="/path-to-your-tailwind-styles.css" rel="stylesheet" />
      </Head>
      <body className="bg-gray-50 text-gray-800 antialiased">
        <Main /> {/* Main content of the page */}
        <NextScript /> {/* Necessary for scripts */}
      </body>
    </Html>
  );
}
