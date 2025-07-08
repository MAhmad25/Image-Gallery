import { Route, Routes } from "react-router-dom";
import ImageView from "./pages/ImageView";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
const App = () => {
      const preloaderText = useRef(null);
      const preloaderContainer = useRef(null);
      const tlRef = useRef(null);
      useGSAP(() => {
            const hasIntro = sessionStorage.getItem("introPlayed");
            if (hasIntro) {
                  gsap.set(preloaderContainer.current, { autoAlpha: 0 });
                  return;
            }
            if (tlRef.current) tlRef.current.kill();
            gsap.set([document.documentElement, document.body], { overflow: "hidden", height: "100vh" });
            const preloader = gsap.timeline({
                  defaults: { duration: 1, ease: "power1.inOut" },
                  onComplete: () => {
                        gsap.set([document.documentElement, document.body], { overflow: "auto", height: "auto" });
                        sessionStorage.setItem("introPlayed", "true");
                  },
            });
            preloader.to(preloaderText.current, { y: "0rem", delay: 0.6 }).to(preloaderText.current, { y: "-5rem" }, "+=0.2").to(preloaderContainer.current, { scaleY: 0, ease: "expo.inOut" });
            tlRef.current = preloader;
            return () => preloader.kill();
      });
      return (
            <main className="w-full  min-h-screen isolate relative  flex flex-col ">
                  <div ref={preloaderContainer} className="container-preloader origin-top w-full fixed top-0 left-0 z-50 h-screen  grid place-content-center bg-zinc-900">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl  overflow-hidden py-2  font-Astralaga text-white ">
                              <span ref={preloaderText} className="inline-block translate-y-20   leading-0">
                                    Welcome to Image Gallery
                              </span>
                        </h1>
                  </div>
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                              path="/view-photo/:id"
                              element={
                                    <div className="sm:px-10 pt-5 bg-zinc-200 pb-10">
                                          <ImageView />
                                    </div>
                              }
                        />
                        <Route path="/search-for-photo" element={<Search />} />
                  </Routes>
                  <Toaster />
            </main>
      );
};

export default App;
{
      {
            /* For Debugging Purpose Only */
      }
      {
            /* <div className="fixed top-0 left-10 px-5 z-30 py-2 rounded-4xl bg-black text-white font-Nova text-sm">{currWidth}px</div> */
      }
      /* For Debugging Purpose Only  
             const [currWidth, setCurrWidth] = useState(window.innerWidth);
      const handleResize = (e) => {
            setCurrWidth(e.target.innerWidth);
      };
      useEffect(() => {
            window.addEventListener("resize", handleResize);
      }, []);*/
}
