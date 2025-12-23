import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { Poppins, Manrope } from "next/font/google";

/* Poppins */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* Manrope */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blockchain Development Company & Game Development Company | Beelockchain.io",
  description: "Beelockchain.io is a full-cycle AI Centric Blockchain & Game Development Company offering custom blockchain, crypto & game development services for startups and enterprises globally",
  keywords: "game development company, blockchain development, game development agency, video game development company, blockchain development services, blockchain development company USA, Blockchain Game Development Company, game development services, web3 development company, blockchain development companies in usa, blockchain software development company, dapp development services, enterprise blockchain development company, blockchain smart contract development, web3 development company, game design company",
   icons: "assets/images/favicon.png",
}; 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Beelockchain - AI Centric Blockchain & Game Development Company",
    image: "", 
    description:
      "Top AI-centric Custom Blockchain & Game Development Company developed DApps, crypto platforms, game art design, and prediction market software.",
    brand: {
      "@type": "Brand",
      name: "Beelockchain.io",
    },
    offers: {
      "@type": "AggregateOffer",
      url: "https://www.beelockchain.io/",
      priceCurrency: "USD",
      lowPrice: "5000",
      highPrice: "10000",
      offerCount: "10",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      ratingCount: "1587",
    },
  };

  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.beelockchain.io/" />
        
        <meta name="robots" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Beelockchain" />
        <meta property="og:url" content="https://www.beelockchain.io/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_AE" />
        <meta property="og:locale:alternate" content="en_IN" />
        <meta property="og:title" content="AI-Powered Custom Blockchain & Game Development Company | Beelockchain" />
        <meta property="og:description" content="Beelockchain is an AI-powered blockchain and game development company delivering secure, scalable blockchain solutions, game art design service, and prediction market software for startups and enterprises." />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image" content="url" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beelockchain – AI-Centric Custom Blockchain & Game Development Solution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Custom Blockchain & Game Development Company | Beelockchain" />
        <meta name="twitter:description" content="Build secure blockchain platforms, Web3 games, crypto solutions, and prediction market software powered by AI. Explore Beelockchain.io." />
        <meta name="twitter:image" content="url" />
        <meta name="twitter:site" content="@beelockchain_io" />
      </Head>
      <body  className={` ${poppins.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
