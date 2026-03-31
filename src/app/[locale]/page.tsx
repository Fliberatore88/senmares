import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const Services = dynamic(() => import("@/components/sections/Services"));
const About = dynamic(() => import("@/components/sections/About"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
