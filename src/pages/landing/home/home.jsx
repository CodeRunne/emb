import React from "react";
import { missionContent, visionContent, featuresContent } from "../../../constants/home";
import { Hero, ZPattern, Features } from "../../../components";

function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Benefits Section (Features) */}
      <Features title="Features" features={featuresContent} />

      {/* Mission Section */}
      <ZPattern {...missionContent} type="mission" />

      {/* Vision Section */}
      <ZPattern {...visionContent} variant="inverse" type="vision" />
    </>
  );
}

export default Home;
