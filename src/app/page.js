import Image from "next/image";
import Bannerimg from "../../public/images/hero.png";
import Container from "../component/Container";

export default function Home() {
  return (
    <section>
      <Container>
        <div className="flex items-center gap-x-20 max-lg:flex-col max-lg:flex-col-reverse                                                                    ">
          <div>
            <h2 className="class text-[52px] max-md:text-[32px] leading-[1.1] bg-gradient-to-b from-[#568868] to-[#e2e8f0]">
              Better Design For Your Digital Products
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
          <Image
            src={Bannerimg}
            className="animate-bounce-custom w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px]"
          />
        </div>
      </Container>                                      
    </section>
  );
}
                                                                                          