"use client";
import Hero from "@/components/Hero";
import PersonIntro from "@/components/PersonIntro";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import dynamic from "next/dynamic";

const PixelTracker = dynamic(() => import("../components/PixelTracker"), {
  ssr: false,
});
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <PixelTracker />
        <PersonIntro />
        <Stats />
        <Benefits />
        <Schedule />
        <Testimonials />
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
