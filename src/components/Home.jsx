import { memo } from "react";
import Nav from "./Nav";
import LocomotiveScroll from "locomotive-scroll";
import MasonaryLayout from "./MasonaryLayout";

const Home = () => {
      return (
            <>
                  <Nav />
                  <MasonaryLayout />
            </>
      );
};

export default memo(Home);
