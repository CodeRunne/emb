import React from "react";
import HeroImage1 from "../../assets/images/img (5).webp";
import HeroImage2 from "../../assets/images/img (6).webp";
import HeroImage3 from "../../assets/images/img (7).webp";
import HeroImage4 from "../../assets/images/img (2).webp";

function Hero() {
  return (
    <section className="mt-5 py-3 px-3.5 w-95 mx-auto grid grid-cols-hero gap-x-8">
      <div className="pr-8 mt-28">
        <h1 className="text-6.5xl text-blue-dark leading-none font-roboto font-black mb-4 tracking-tight">
          Learn the latest in tech and blockchains
        </h1>
        <p className="text-[1.06rem] text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis
          nobis unde dolorum nemo sequi officiis aspernatur sunt rem, maiores
          eligendi voluptates est placeat. Tempora vel architecto officiis quis
          quam. Iure omnis nobis unde dolorum nemo sequi officiis aspernatur
          sunt rem, maiores eligendi voluptates est placeat
        </p>
      </div>

      {/* Hero Image */}
      <div className="image grid grid-cols-2 gap-x-2.5">
        <div className="first mt-8 grid gap-y-2">
          <blockquote className="w-full h-60 rounded overflow-hidden">
            <img
              src={HeroImage1}
              alt="hero content 1"
              className="w-100 h-full object-cover"
            />
          </blockquote>

          <blockquote className="w-full h-60 rounded overflow-hidden">
            <img
              src={HeroImage4}
              alt="hero content 1"
              className="w-100 h-full object-cover"
            />
          </blockquote>
        </div>
        <div className="second mb-8 grid gap-y-2">
          <blockquote className="w-full h-60 rounded overflow-hidden">
            <img
              src={HeroImage3}
              alt="hero content 1"
              className="w-100 h-full object-cover"
            />
          </blockquote>
          <blockquote className="w-full h-60 rounded overflow-hidden">
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
