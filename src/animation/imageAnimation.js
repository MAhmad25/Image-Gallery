import gsap from "gsap";
const imageAnimation = (img, mask) => {
      if (!mask.current || !img.current) return;
      let tl = gsap.timeline({ defaults: { duration: 1.3, ease: "expo.inOut" } });
      tl.to(mask.current, {
            scaleY: 0,
            delay: 0.3,
      }).to(
            img.current,
            {
                  scale: 1,
            },
            "-=.9"
      );
      return tl;
};
export default imageAnimation;
