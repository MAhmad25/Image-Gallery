import { memo } from "react";
import Nav from "../components/Nav";
import MasonaryLayout from "../components/MasonaryLayout";

const Home = () => {
      return (
            <>
                  <Nav />
                  <MasonaryLayout />
            </>
      );
};

export default memo(Home);
