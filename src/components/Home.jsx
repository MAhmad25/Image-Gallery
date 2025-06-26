import { memo } from "react";
import { pictures } from "../../TestingData";
import Nav from "./Nav";
import Image from "./Image";
import Type from "./Type";
const Home = () => {
      return (
            <>
                  <Nav />
                  <Type />
                  <section className="w-full px-10 pb-10 column">
                        {pictures.map((picture) => (
                              <Image key={picture.id} picture={picture} />
                        ))}
                  </section>
            </>
      );
};

export default memo(Home);
