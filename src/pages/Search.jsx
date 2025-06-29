import gsap from "gsap";
import { useRef } from "react";
import { pictures } from "../../TestingData";
import Image from "../components/Image";
import Close from "../components/CloseButton";
import { useGSAP } from "@gsap/react";

const Search = () => {
      const line = useRef(null);
      const { contextSafe } = useGSAP();
      const handleFocus = contextSafe(() => {
            gsap.to(line.current, {
                  scaleX: 1,
                  duration: 0.5,
                  ease: "power1.inOut",
            });
      });
      const handleBlur = contextSafe(() => {
            gsap.to(line.current, {
                  scaleX: 0,
                  duration: 0.5,
                  ease: "power1.inOut",
            });
      });
      return (
            <section className="w-full min-h-screen relative px-10 bg-zinc-100">
                  <div className=" fixed z-10 top-3 right-3">
                        <Close />
                  </div>
                  {/* Search Div */}
                  <div className="w-full py-10 relative px-16  flex  justify-center items-center flex-col">
                        <label htmlFor="search"></label>
                        <input onBlur={handleBlur} onFocus={handleFocus} className="font-Nova caret-zinc-700 py-2 w-1/2  outline-none px-1 pr-28 text-3xl border-none " name="search" type="text" placeholder="What do you Like?" />
                        <button className="bg-zinc-800 text-2xl absolute top-[35%] left-[64%] px-4 font-Nova text-white py-1 rounded-4xl">Search</button>
                        {/* Line */}
                        <div className="w-1/2  bg-black/10 h-[2px]">
                              <div ref={line} className="w-full scale-x-0 origin-left bg-black h-full"></div>
                        </div>
                  </div>
                  {/* Image Result Div */}
                  <h1 className="text-2xl font-Nova text-zinc-800 mb-5">Showing Result for 3D Wallpaper...</h1>
                  <section className="w-full  pb-10 columns-[250px]">
                        {pictures.map((picture) => (
                              <Image key={picture.id} picture={picture} />
                        ))}
                  </section>
            </section>
      );
};

export default Search;
