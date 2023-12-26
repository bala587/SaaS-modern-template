import OpeningSection from "./components/OpeningSection";
import CallToAction from "./components/CallToAction";
import FeaturedSection from "./components/FeaturedSection";
import NumberStats from "./components/NumberStats";
import PricingTable from "./components/PricingTable";
import NewsletterSection from "./components/NewsletterSection";
import Features from "./components/Features";
import ContactUsForm from "./components/ContactUsForm";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <OpeningSection />
      <FeaturedSection />
      <CallToAction />
      <PricingTable />
      <NumberStats />
      <NewsletterSection />
      <Features />
      <ContactUsForm />
      <Footer />
    </>
  );
}
