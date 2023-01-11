import React from "react";
import HeroImage1 from "../../assets/images/img (5).webp";
import HeroImage2 from "../../assets/images/img (6).webp";
import HeroImage3 from "../../assets/images/img (7).webp";
import HeroImage4 from "../../assets/images/img (2).webp";

function Hero() {
  return (
    <section className="mt-5 py-3 px-3.5 w-95 mx-auto grid grid-cols-hero gap-x-5">
      <div className="pr-7 mt-28">
        <h1 className="text-6.5xl leading-none font-roboto font-extrabold mb-3.5 tracking-tight">
          Learn the latest in tech and blockchain
        </h1>
        <p className="text-lg text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis
          nobis unde dolorum nemo sequi officiis aspernatur sunt rem, maiores
          eligendi voluptates est placeat. Tempora vel architecto officiis quis
          quam.
        </p>
      </div>

      {/* Hero Image */}
      <div className="image grid grid-cols-2 gap-x-2.5">
        <div className="first mt-8 grid gap-y-2">
          <blockquote className="w-full h-80 rounded overflow-hidden">
            <img
              src={HeroImage1}
              alt="hero content 1"
              className="w-100 h-full object-cover"
            />
          </blockquote>

          <blockquote className="w-full h-80 rounded overflow-hidden">
            <img
              src={HeroImage4}
              alt="hero content 1"
              className="w-100 h-full object-cover"
            />
          </blockquote>
        </div>
        <div className="second mb-8 grid gap-y-2">
          <blockquote className="w-full h-80 rounded overflow-hidden">
            <img
              src={HeroImage3}
              alt="hero content 1"
              className="w-100 h-full object-cover"
            />
          </blockquote>
          <blockquote className="w-full h-80 rounded overflow-hidden">
            <img
              src={HeroImage2}
              alt="hero content 1"
              className="w-100 h-full"
            />
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Hero;
