import gsap from "gsap";
const navAnimation = (logo, title, dec, search) => {
      const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power1.inOut" } });
      tl.from(logo.current, {
            y: 100,
            autoAlpha: 0,
      })
            .from(
                  title.current,
                  {
                        yPercent: -150,
                        autoAlpha: 0,
                  },
                  "<"
            )
            .from(
                  dec.current,
                  {
                        y: 100,
                        autoAlpha: 0,
                  },
                  "<"
            )
            .from(search.current, {
                  scale: 0,
                  autoAlpha: 0,
            });
      return tl;
};
export default navAnimation;
