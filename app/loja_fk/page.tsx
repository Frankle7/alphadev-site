'use client';

import Header from "@/components/section_header/Header";
import HomeLojaFk from "@/components/loja_fk/HomeLojaFk";
import FooterStore from "@/components/section_footer_store/FooterStore";

export default function LojaFk() {
  return (
    <>
      <Header />
      <main>
        <HomeLojaFk />
      </main>
      <FooterStore />
    </>
  );
}
