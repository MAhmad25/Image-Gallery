import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { memo, useRef } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import navAnimation from "../animation/navAnimation";
const Nav = () => {
      const title1 = useRef(null);
      const desc = useRef(null);
      const logo = useRef(null);
      const searchRef = useRef(null);
      useGSAP(() => {
            const hasIntro = sessionStorage.getItem("introPlayed");
            if (hasIntro) {
                  let master = gsap.timeline();
                  master.add(navAnimation(logo, title1, desc, searchRef));
            }
      });
      return (
            <section className="w-full py-5 pr-7   flex justify-between  items-center  sm:px-20 ">
                  <CgMenuRightAlt className="rotate-180 scale-50 sm:scale-100 hidden cursor-pointer" size="2rem" color="#3D5557" />
                  <div className="overflow-hidden flex px-5  sm:px-0 items-center text-center w-[90%]  sm:w-full  pb-1">
                        <svg ref={logo} className="scale-50 sm:scale-75 " width="70" height="58" viewBox="0 0 70 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M40.2121 6.12643L57.4555 35.9927H22.9688L40.2121 6.12643Z" fill="#4A4646" />
                              <path d="M33.1848 6.12643L50.4281 35.9927H15.9415L33.1848 6.12643Z" fill="#D9D9D9" />
                              <circle cx="34.356" cy="23.6948" r="5.85614" fill="#4A4646" />
                              <path d="M0 5C0 2.23858 2.23858 0 5 0H14.4003C17.1618 0 19.4003 2.23858 19.4003 5V57.1799H0V5Z" fill="#4A4646" />
                              <path d="M50.0324 5C50.0324 2.23858 52.271 0 55.0324 0H64.4327C67.1942 0 69.4327 2.23858 69.4327 5V57.1799H50.0324V5Z" fill="#4A4646" />
                              <rect x="1.02106" y="43.906" width="67.3906" height="13.2739" rx="5" fill="#4A4646" />
                              <rect x="19.4004" y="35.7374" width="30.6321" height="21.4425" fill="#D9D9D9" />
                        </svg>

                        <div className="flex-11/12">
                              <h1 ref={title1} className="sm:text-2xl dark:text-white  md:text-3xl lg:text-4xl text-[1.5rem]  hidden min-[500px]:text-[1.3rem]  min-[500px]:block  sm:block  font-Astralaga selection:bg-[#3D5557]/60  text-[#3D5557] sm:leading-none  font-semibold uppercase">
                                    way to explore more !
                              </h1>
                              <h1 className="text-[1.1rem]  min-[500px]:hidden    font-Astralaga selection:bg-[#3D5557]/60  text-[#3D5557] sm:leading-none  font-semibold uppercase">Image Gallery</h1>
                              <p ref={desc} className="text-xl  sm:block hidden font-Nova selection:bg-[#3D5557]/60 capitalize opacity-85 tracking-normal leading-none  font-medium text-center">
                                    Over 6M+ Curated Photos
                              </p>
                        </div>
                  </div>
                  <Link to="/search-for-photo" ref={searchRef}>
                        <IoSearchOutline className="cursor-pointer  mix-blend-difference dark:invert scale-75 min-[500px]:scale-100 " size="2.5rem" color="#3D5557" />
                  </Link>
            </section>
      );
};

export default memo(Nav);
