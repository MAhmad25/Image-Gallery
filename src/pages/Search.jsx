import gsap from "gsap";
import { useRef } from "react";
import Image from "../components/Image";
import Close from "../components/Buttons/CloseButton";
import { useGSAP } from "@gsap/react";
import useSearchQuery from "../hooks/useSearchQuery";
import LocomotiveScroll from "locomotive-scroll";
const Search = () => {
      new LocomotiveScroll();
      const line = useRef(null);
      const { contextSafe } = useGSAP();
      const { pictures, query, setQuery, fetchMore, showQueryResults } = useSearchQuery();
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
                  <div className="w-full  py-10 relative  px-0 min-[500px]:px-8 items-start sm:px-10 md:px-16  flex  justify-center md:items-center sm:items-start flex-col">
                        <label htmlFor="search"></label>
                        <input value={query} onChange={(e) => setQuery(e.target.value)} onBlur={handleBlur} onFocus={handleFocus} className="font-Search  caret-zinc-700 py-2 w-full min-[500px]:w-3/4 font-medium md:w-full lg:w-3/4  outline-none px-1  lg:pr-28 pr-32 text-2xl min-[500px]:text-3xl sm:text-4xl lg:text-7xl border-none " name="search" type="text" placeholder="What do you Like?" />
                        <button onClick={() => showQueryResults(query)} className="bg-zinc-800 text-sm min-[500px]:text-xl sm:text-2xl absolute top-[35%] right-10 min-[500px]:right-7 sm:right-10 md:right-14 lg:right-40 xl:right-48 px-4 font-Nova text-white py-1 rounded-4xl">
                              Search
                        </button>
                        {/* Line */}
                        <div className="lg:w-3/4 w-full bg-black/10 h-[2px]">
                              <div ref={line} className="w-full scale-x-0 origin-left bg-black h-full"></div>
                        </div>
                  </div>
                  {/* Image Result Div */}
                  <section className="w-full  pb-10 columns-[250px]">{pictures.length > 0 && pictures.map((picture) => <Image key={picture.id} picture={picture} />)}</section>
                  <section className="w-full  grid place-content-center h-20">
                        {pictures.length > 0 && (
                              <button className="outline-none cursor-pointer  font-Astralaga  rounded-xl w-40   border-none text-zinc-200 bg-zinc-900 py-2" onClick={fetchMore}>
                                    Load More
                              </button>
                        )}
                  </section>
            </section>
      );
};

export default Search;
