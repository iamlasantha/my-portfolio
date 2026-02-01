import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import { fetchProjects } from "@/utils/projectUtils";

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Blogs />
      <Contact />
      <Newsletter />
    </main>
  );
} 