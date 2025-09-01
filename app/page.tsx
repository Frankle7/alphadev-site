import Header from "@/components/section_header/Header";
import Hero from "@/components/home_page/section_hero/HeroSection";
import QuemEIsfrankle from "@/components/home_page/section_sobre_isfrankle/QuemEIsfrankle";
import MetodoAlpha from "@/components/home_page/section_meto_alpha/MetodoAlpha";
import Depoimentos from "@/components/home_page/section_depoimentos/Depoimentos";
import FAQ from "@/components/home_page/section_faq/FAQ"
import Footer from "@/components/section_footer/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemEIsfrankle />
        <MetodoAlpha />
        <Depoimentos />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
