'use client'
import Image from "next/image";
import Bannerimg from "../../public/images/hero.png";
import Container from "../component/Container";
import { TypeAnimation } from 'react-type-animation';
export default function Home() {
  return (
    <section>
      <Container>
        <div className="max-sm:h-[81.1vh] max-sm:py-14 flex items-center gap-x-20 max-lg:flex-col-reverse">
          <div className="max-sm:px-[25px]">  
            <TypeAnimation sequence={['Better Design For Your Digital Products']} wrapper="span" speed={50}  className="class text-[52px] max-md:text-[32px] leading-[1.1] bg-gradient-to-b from-[#568868] to-[#e2e8f0] repeat={Infinity}"/>
            <h2>
              
            </h2>
            <p className="py-10 max-md:py-4">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s
            </p>
            <button className="w-[140px] max-md:w-[120px] max-md:text-sm bg-[#4ade80] py-2 text-black rounded-md font-semibold">
              See Our Works
            </button>
          </div>
          <div className="max-sm:mb-4" >
          <Image
            src={Bannerimg}
            className="animate-bounce-custom w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px]"
          />
          </div>
        </div>
      </Container>                                      
    </section>
  );
}
                                                                                          