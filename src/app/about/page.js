import React from "react";
import Container from "../../component/Container";
import img from "../../../public/images/redd-f-5U_28ojjgms-unsplash.jpg";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <Container>
      <div className="relative">
        <Image src={img} className="h-[250px] object-cover" />
        <div className="w-[100%] absolute max-w-[600px] max-sm:max-w-[300px] max-sm:bottom-2 max-sm:left-3 max-md:max-w-[500px] bottom-[20px] bg-[#4ade80] left-[40px] px-4 py-3 rounded-md ">
          <h2 className="text-2xl font-semibold max-md:text-xl">Where does it come from?</h2>
          <h3 className="text-lg max-md:text-base">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock.
          </h3>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-2 gap-4 py-10 max-md:py-4 max-sm:grid-cols-1">
        <div>
          <h2 className="text-2xl font-medium">Who Are We?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-medium">What We Do?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
          </p>
          <Link className="max-md:w-[80px] max-md:text-sm w-[100px] bg-[#4ade80] my-5 py-2 text-black rounded-md font-semibold block text-center" href='/Contact'>contact</Link>
        </div>
      </div>
    </Container>
  );
};

export default About;
