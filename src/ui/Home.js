import React from "react";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import PartnerList from "../components/PartnerList";
import FAQSection from "../components/FAQSection";
import ServiceList from "../components/ServiceList";
import Revenue from "../components/Revenue";

const Home = () => {
  return (
    <>
      <InnerHeader />
      <Carousel />
      <main id="main">
        <ServiceList/>
        <PartnerList/>
        <FAQSection/>
        <Revenue/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
