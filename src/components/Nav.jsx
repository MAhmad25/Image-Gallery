import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { memo, useRef } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Nav = () => {
      const title = useRef(null);
      const desc = useRef(null);
      useGSAP(() => {
            const splitTitle = new SplitText(title.current);
            let tl = gsap.timeline({
                  defaults: {
                        duration: 0.8,
                        stagger: {
                              amount: 0.5,
                              from: "center",
                        },
                  },
            });
            tl.from(splitTitle.chars, {
                  xPercent: -500,
                  filter: "blur(20px)",
            }).from(
                  desc.current,
                  {
                        yPercent: 120,
                  },
                  "<"
            );
      }, []);
      return (
            <section className="w-full py-5 flex justify-between items-center  px-20 ">
                  <CgMenuRightAlt className="rotate-180 cursor-pointer" size="2rem" color="#3D5557" />
                  <div className="overflow-hidden pb-1">
                        <h1 ref={title} className="text-4xl font-Astralaga selection:bg-[#3D5557]/60    text-[#3D5557] leading-none  font-semibold uppercase">
                              way to explore more !
                        </h1>
                        <p ref={desc} className="text-xl font-Nova selection:bg-[#3D5557]/60 capitalize opacity-85 tracking-normal leading-none  font-medium text-center">
                              our word is amazing
                        </p>
                  </div>
                  <Link to="/search-for-photo">
                        <IoSearchOutline className="cursor-pointer" size="2.5rem" color="#3D5557" />
                  </Link>
            </section>
      );
};

export default memo(Nav);
