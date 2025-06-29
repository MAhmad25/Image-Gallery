import { memo, useRef } from "react";
import { pictures } from "../../TestingData";
import Nav from "./Nav";
import Image from "./Image";
import Type from "./Type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Home = () => {
      const imageCollec = useRef(null);
      useGSAP(() => {
            const imageArr = gsap.utils.toArray(imageCollec.current.childNodes);
            gsap.from(imageArr, {
                  filter: "blur(100px)",
                  duration: 0.8,
                  stagger: 0.05,
            });
      }, []);
      return (
            <>
                  <Nav />
                  <Type />
                  <section ref={imageCollec} className="w-full px-10 pb-10 columns-[250px]">
                        {pictures.map((picture) => (
                              <Image key={picture.id} picture={picture} />
                        ))}
                  </section>
            </>
      );
};

export default memo(Home);
