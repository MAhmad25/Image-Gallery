import { Route, Routes } from "react-router-dom";
import ImageView from "./pages/ImageView";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home";

const App = () => {
      new LocomotiveScroll();
      return (
            <main className="w-full min-h-screen  flex flex-col  items-center">
                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/topics/:type/photos" element={<Home />} />
                        <Route
                              path="/view/:id"
                              element={
                                    <div className="px-10 pt-5 bg-zinc-200 pb-10">
                                          <ImageView />
                                    </div>
                              }
                        />
                  </Routes>
            </main>
      );
};

export default App;
