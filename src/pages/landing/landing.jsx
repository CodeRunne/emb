import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { Navigation, SEO } from "../../components";

// Pages
const Home = lazy(() => import("./home/home"));
const Signin = lazy(() => import("./signin/signin"));

function Landing() {
  return (
    <>
      <SEO
        title="Home | Empowered Blockchain"
        description="We educate on the latest blockchain and tech related topics."
        type="article"
      />

      {/* Navigation */}
      <Navigation />

      <Suspense fallback="loading...">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Landing;
