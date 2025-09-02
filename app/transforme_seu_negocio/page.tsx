import Image from "next/image";
import Header from "@/components/section_header/Header";
import Footer from "@/components/section_footer/Footer";
import HeroTwo from "@/components/transforme_seu_negocio/hero_two/HeroTwo";
import ProjetoPontoKa from "@/components/transforme_seu_negocio/projeto_ponto_ka/ProjetoPontoKa";
import ProjetoFullHair from "@/components/transforme_seu_negocio/projeto_full_hair/ProjetoFullHair";

export default function TransformeSeuNegocio() {
    return (
        <>
            <Header />
            <main>
                <HeroTwo />
                <ProjetoPontoKa />
                <ProjetoFullHair />
            </main>
            <Footer />
        </>
    );
}