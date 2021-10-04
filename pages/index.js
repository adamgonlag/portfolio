/* eslint-disable react/no-unescaped-entities */
import { server } from "../config/index";
import { useState, useEffect, useRef } from "react";
import { projectDatabase } from "../data/data";

import Head from "next/head";
import Hero from "../components/Hero";
import ProjectList from "../components/ProjectList";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Adam Gonlag</title>
        <meta name="keywords" content="web development, programming" />
      </Head>

      <Hero />

      <ProjectList projects={projects} />

      <About />

      <Contact />
    </>
  );
}

export const getStaticProps = async () => {
  const projects = projectDatabase;

  return { props: { projects } };
};
