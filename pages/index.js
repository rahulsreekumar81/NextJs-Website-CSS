import Head from "next/head";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import HeroSection from "../Components/HeroSection/HeroSection";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Js Webiste</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <CompanyProfile />
    </div>
  );
}
