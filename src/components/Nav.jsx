import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { memo, useRef } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Nav = () => {
      const title1 = useRef(null);
      const title2 = useRef(null);
      const desc = useRef(null);
      const searchRef = useRef(null);
      useGSAP(() => {
            const splitTitle2 = new SplitText(title2.current);
            let tl = gsap.timeline({
                  defaults: {
                        duration: 0.8,
                        stagger: {
                              amount: 0.5,
                              from: "center",
                        },
                  },
            });
            tl.from(splitTitle2.chars, {
                  xPercent: -500,
                  filter: "blur(20px)",
            })
                  .from(
                        [desc.current, title1.current],
                        {
                              yPercent: 120,
                              filter: "blur(20px)",
                        },
                        "<"
                  )
                  .from(
                        searchRef.current,
                        {
                              filter: "blur(20px)",
                        },
                        "-=0.8"
                  );
      }, []);
      return (
            <section className="w-full py-5 pr-7   flex justify-between  items-center  sm:px-20 ">
                  <CgMenuRightAlt className="rotate-180 scale-50 sm:scale-100 hidden cursor-pointer" size="2rem" color="#3D5557" />
                  <div className="overflow-hidden flex px-5  sm:px-0 items-center text-center w-[90%]  sm:w-full  pb-1">
                        <svg className="scale-50 min-[500px]:scale-75 sm:scale-100" width="68" height="56" viewBox="0 0 68 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M39.3823 6L56.2698 35.25H22.4948L39.3823 6Z" fill="#4A4646" />
                              <path d="M32.5 6L49.3875 35.25H15.6125L32.5 6Z" fill="#D9D9D9" />
                              <circle cx="33.6471" cy="23.2059" r="5.73529" fill="#4A4646" />
                              <path d="M19 38C19 40.7614 21.2386 43 24 43H44C46.7614 43 49 40.7614 49 38V5C49 2.23858 51.2386 0 54 0H63C65.7614 0 68 2.23858 68 5V51C68 53.7614 65.7614 56 63 56H5C2.23858 56 0 53.7614 0 51V5C0 2.23858 2.23858 0 5 0H14C16.7614 0 19 2.23858 19 5V38Z" fill="#4A4646" />
                              <rect x="19" y="35" width="30" height="21" fill="#D9D9D9" />
                        </svg>
                        <div className="flex-11/12">
                              <h1 ref={title2} className="sm:text-2xl md:text-3xl lg:text-4xl   text-[1.5rem]  hidden  min-[500px]:block  sm:block  font-Astralaga selection:bg-[#3D5557]/60  text-[#3D5557] sm:leading-none  font-semibold uppercase">
                                    way to explore more !
                              </h1>
                              <h1 ref={title1} className="text-[1.1rem]  min-[500px]:hidden    font-Astralaga selection:bg-[#3D5557]/60  text-[#3D5557] sm:leading-none  font-semibold uppercase">
                                    Image Gallery
                              </h1>
                              <p ref={desc} className="text-xl  sm:block hidden font-Nova selection:bg-[#3D5557]/60 capitalize opacity-85 tracking-normal leading-none  font-medium text-center">
                                    our word is amazing
                              </p>
                        </div>
                  </div>
                  <Link to="/search-for-photo" ref={searchRef}>
                        <IoSearchOutline className="cursor-pointer scale-75 min-[500px]:scale-100 " size="2.5rem" color="#3D5557" />
                  </Link>
            </section>
      );
};

export default memo(Nav);
