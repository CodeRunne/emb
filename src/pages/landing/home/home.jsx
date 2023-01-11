import React from "react";
import { missionContent, visionContent } from "../../../constants/home";
import { Hero, ZPattern } from "../../../components";

function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Mission Section */}
      <ZPattern {...missionContent} />

      {/* Vision Section */}
      <ZPattern {...visionContent} />
    </>
  );
}

export default Home;
