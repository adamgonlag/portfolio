import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../config/particles-config1";

export default function ParticleBackground() {
  return (
    <>
      <Particles params={ParticleConfig}></Particles>
    </>
  );
}
