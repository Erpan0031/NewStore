import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import HeroSections from "@/components/HeroSections";
import ProductFeatures from "@/components/ProductFeatures";
import ContentSections from "@/components/ContentSections";
import LogoClouds from "@/components/LogoClouds";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar className=" fixed w-full z-[999] " />
      <main className=" h-screen bg-white pt-14">
        <HeroSections />
        <ProductFeatures />
        <ContentSections />
        <LogoClouds />
      </main>
    </>
  );
}
