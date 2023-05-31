import HeroSections from "@/components/HeroSections";
import ProductLists from "@/components/ProductLists";
import Navbar from "@/components/navbar";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar className="fixed top-0 w-full z-50" />
      <div className="pt-11 snap-proximity snap-y">
        <section className="snap-center">
          <HeroSections
            className="overflow-hidden"
            style={{ height: "calc(100vh - 44px)" }}
          />
        </section>
        <section className="snap-center">
          <ProductLists />
        </section>
      </div>
    </div>
  );
}
