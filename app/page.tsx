import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/shared/Navbar";
import { Projects } from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { IntroSplash } from "@/components/shared/IntroSplash";
import { Footer } from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <IntroSplash />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

