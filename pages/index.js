import Head from "next/head";
import AmazingPartnersSection from "../Components/AmazingPartnersSection/AmazingPartnersSections";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import CustomerServiceSection from "../Components/CustomerServiceSection/CustomerServiceSection";
import DreamBigSection from "../Components/DreamBigSection/DreamBigSection";
import HeroSection from "../Components/HeroSection/HeroSection";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Js Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <CompanyProfile />
      <DreamBigSection />
      <AmazingPartnersSection />
      <CustomerServiceSection />
    </div>
  );
}
