"use client";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavVideos from "@/components/NavVideos";
import GeracaoSection from "@/components/SectionGeracao";
import VideosContent from "@/components/VideosContent";
import { VideosProvider } from "@/context/VideosContext";

export default function Home() {
  return (
    <>
      <VideosProvider>
        <Header />
        <Banner/>
        <NavVideos/>
        <VideosContent />
        <GeracaoSection/>
        <Footer/>
      </VideosProvider>
    </>
  );
}
