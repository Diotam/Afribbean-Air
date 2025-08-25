"use client";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Problems from "@/components/problems";
import Advantages from "@/components/advantages";
import Network from "@/components/network";
import Comfort from "@/components/comfort";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problems />
      <Advantages />
      <Network />
      <Comfort />
      <Footer />
    </div>
  );
}
