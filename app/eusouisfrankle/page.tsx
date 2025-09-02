import Header from "@/components/section_header/Header";
import MainCard from "@/components/eu_sou_isfrankle/main_card/MainCard";
import Timeline from "@/components/eu_sou_isfrankle/section_timeline/Timeline";
import HardSkills from "@/components/eu_sou_isfrankle/section_hardskill/HardSkills";
import Experience from  "@/components/eu_sou_isfrankle/section_experience/Experience";
import Footer from "@/components/section_footer/Footer";

export default function EuSouIsfrankle() {
  return (
    <>
      <Header />
      <main>
        <MainCard />
        <Timeline />
        <HardSkills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
