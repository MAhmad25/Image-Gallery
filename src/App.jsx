import { Route, Routes } from "react-router-dom";
import ImageView from "./pages/ImageView";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import preloadWords from "../PreloaderText";
const App = () => {
      const preloaderContainer = useRef(null);
      const preloadDiv = useRef(null);
      const tlRef = useRef(null);
      useGSAP(() => {
            const hasIntro = sessionStorage.getItem("introPlayed");
            if (hasIntro) {
                  gsap.set(preloaderContainer.current, { autoAlpha: 0 });
                  return;
            }
            if (tlRef.current) tlRef.current.kill();
            let tl = gsap.timeline({
                  defaults: { ease: "expo.inOut" },
                  onComplete: () => {
                        gsap.set([document.documentElement, document.body], { overflow: "auto", height: "auto" });
                        sessionStorage.setItem("introPlayed", "true");
                  },
            });
            gsap.set([document.documentElement, document.body], { overflow: "hidden", height: "100vh" });
            tl.to(preloadDiv.current, {
                  yPercent: -40,
                  duration: 7,
            })
                  .to(preloadDiv.current, {
                        autoAlpha: 0,
                        duration: 0.4,
                        ease: "expo.in",
                  })
                  .to(preloaderContainer.current, {
                        scaleY: 0,
                        duration: 0.8,
                  });
            tlRef.current = tl;
            return () => tl.kill();
      });
      return (
            <main className="w-full  min-h-screen isolate relative  flex flex-col ">
                  <div ref={preloaderContainer} className="overflow-hidden origin-top w-full fixed top-0 left-0 h-screen z-50   grid place-content-center bg-zinc-100">
                        <div className=" flex w-40 h-screen relative  px-1 flex-col">
                              {/* Overlay */}
                              <div className="absolute overlay inset-0 z-50"></div>
                              {/* Words Container */}
                              <div ref={preloadDiv} className="-translate-y-200">
                                    {preloadWords.map((word) => (
                                          <h2 className="text-2xl sm:text-3xl   font-Astralaga text-zinc-800 ">{word}</h2>
                                    ))}
                              </div>
                        </div>
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
