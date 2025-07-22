import { Route, Routes } from "react-router-dom";
import ImageView from "./pages/ImageView";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import preloadWords from "../PreloaderText";
import IntroTextAnimation from "./animation/IntroAnimation";
const App = () => {
      const preloaderContainer = useRef(null);
      const preloadDiv = useRef(null);
      const loaderDiv = useRef(null);
      const percentage = useRef(null);
      const tlRef = useRef(null);
      useGSAP(() => {
            const hasIntro = sessionStorage.getItem("introPlayed");
            if (hasIntro) {
                  gsap.set(preloaderContainer.current, { autoAlpha: 0 });
                  return;
            }
            if (tlRef.current) tlRef.current.kill();
            let master = gsap.timeline({
                  onComplete: () => {
                        gsap.set([document.documentElement, document.body], { overflow: "auto", height: "auto" });
                        sessionStorage.setItem("introPlayed", "true");
                  },
            });
            master.add(IntroTextAnimation(preloaderContainer, preloadDiv, loaderDiv, percentage));
            tlRef.current = master;
            return () => master.kill();
      });
      return (
            <main className="w-full  min-h-screen isolate relative  flex flex-col ">
                  <div ref={preloaderContainer} className="overflow-hidden origin-top w-full fixed top-0 left-0 h-screen z-50   grid place-content-center bg-zinc-100">
                        <div className=" flex w-60 h-screen relative  px-1 flex-col">
                              {/* Overlay */}
                              <div className="absolute overlay  inset-0 z-20"></div>
                              {/* Words Container */}
                              <div ref={preloadDiv} className="-translate-y-100">
                                    {preloadWords.map((word) => (
                                          <h2 className="text-2xl sm:text-3xl   font-Astralaga text-zinc-800 ">{word}</h2>
                                    ))}
                              </div>
                        </div>
                        <div ref={loaderDiv} className="absolute overflow-hidden origin-bottom bottom-0  w-0 h-20 z-30 flex justify-end items-center  bg-zinc-800">
                              <h2 ref={percentage} className="font-Astralaga text-white mr-5 text-2xl sm:text-3xl md:text-4xl">
                                    0
                              </h2>
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
