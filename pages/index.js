/* eslint-disable react/no-unescaped-entities */
import { server } from "../config/index";
import Head from "next/head";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import About from "../components/About";
import Contact from "../components/Contact";
import homeStyles from "../styles/Home.module.scss";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Adam Gonlag</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <Hero />

      <h1 id="projects" className={homeStyles.title}>
        Some things I've built
      </h1>
      <ProjectList projects={projects} />
      <h1 id="about" className={homeStyles.title}>
        About
      </h1>
      <About />
      <h1 id="contact" className={homeStyles.title}>
        Contact
      </h1>
      <Contact />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects`);
  const projects = await res.json();

  return { props: { projects } };
};
