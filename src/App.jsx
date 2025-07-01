import { Route, Routes } from "react-router-dom";
import ImageView from "./pages/ImageView";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home";
import Search from "./pages/Search";
// import { useEffect, useState } from "react";

const App = () => {
      new LocomotiveScroll();
      {
            /* For Debugging Purpose Only  
             const [currWidth, setCurrWidth] = useState(window.innerWidth);
      const handleResize = (e) => {
            setCurrWidth(e.target.innerWidth);
      };
      useEffect(() => {
            window.addEventListener("resize", handleResize);
      }, []);*/
      }

      return (
            <main className="w-full min-h-screen relative  flex flex-col ">
                  {/* For Debugging Purpose Only */}
                  {/* <div className="fixed top-0 left-10 px-5 z-30 py-2 rounded-4xl bg-black text-white font-Nova text-sm">{currWidth}px</div> */}
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/topics/:type/photos" element={<Home />} />
                        <Route
                              path="/view/:id"
                              element={
                                    <div className="sm:px-10 pt-5 bg-zinc-200 pb-10">
                                          <ImageView />
                                    </div>
                              }
                        />
                        <Route path="/search-for-photo" element={<Search />} />
                  </Routes>
            </main>
      );
};

export default App;
