import gsap from "gsap";
import { useRef } from "react";
import { pictures } from "../../Pictures";
import Image from "../components/Image";
import Close from "../components/Buttons/CloseButton";
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
            <section className="w-full min-h-screen relative px-5 min-[500px]:px-6 sm:px-10 bg-zinc-100">
                  <div className=" fixed z-10 top-3 right-3">
                        <Close />
                  </div>
                  {/* Search Div */}
                  <div className="w-full  py-10 relative  px-7 min-[500px]:px-8 items-start sm:px-10 md:px-16  flex  justify-center md:items-center sm:items-start flex-col">
                        <label htmlFor="search"></label>
                        <input onBlur={handleBlur} onFocus={handleFocus} className="font-Nova  caret-zinc-700 py-2 w-full min-[500px]:w-3/4 md:w-full lg:w-3/4  outline-none px-1  lg:pr-28 text-sm min-[500px]:text-xl sm:text-3xl border-none " name="search" type="text" placeholder="What do you Like?" />
                        <button className="bg-zinc-800 text-sm min-[500px]:text-xl sm:text-2xl absolute top-[35%] right-10 min-[500px]:right-7 sm:right-10 md:right-14 lg:right-40 xl:right-48 px-4 font-Nova text-white py-1 rounded-4xl">Search</button>
                        {/* Line */}
                        <div className="lg:w-3/4 w-full bg-black/10 h-[2px]">
                              <div ref={line} className="w-full scale-x-0 origin-left bg-black h-full"></div>
                        </div>
                  </div>
                  {/* Image Result Div */}
                  <h1 className="min-[500px]:text-2xl text-lg font-Nova text-zinc-800 mb-5">Showing Result for 3D Wallpaper...</h1>
                  <section className="w-full  pb-10 columns-[250px]">
                        {pictures.map((picture) => (
                              <Image key={picture.id} picture={picture} />
                        ))}
                  </section>
            </section>
      );
};

export default Search;
