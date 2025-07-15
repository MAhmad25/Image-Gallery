import gsap from "gsap";

export const IntroTextAnimation = (preloaderContainer, preloadDiv, loaderDiv, percentage) => {
      let tl = gsap.timeline({ defaults: { ease: "expo.inOut" } });
      gsap.set([document.documentElement, document.body], { overflow: "hidden", height: "100vh" });
      tl.to(preloadDiv.current, {
            yPercent: -40,
            duration: 7,
      })
            .to(
                  loaderDiv.current,
                  {
                        width: "100%",
                        duration: 7,
                        ease: "expo.inOut",
                  },
                  "<"
            )
            .to(
                  percentage.current,
                  {
                        textContent: 100,
                        ease: "power1.inOut",
                        duration: 6,
                        snap: { textContent: 1 },
                  },
                  "<"
            )
            .to(percentage.current, {
                  y: 100,
                  autoAlpha: 0,
                  ease: "power2.inOut",
            })
            .to(
                  loaderDiv.current,
                  {
                        scaleY: 0,
                  },
                  "-=.4"
            )
            .to(preloadDiv.current, {
                  autoAlpha: 0,
                  duration: 0.4,
                  ease: "expo.in",
            })
            .to(preloaderContainer.current, {
                  scaleY: 0,
                  duration: 0.8,
            });
      return tl;
};
export default IntroTextAnimation;
