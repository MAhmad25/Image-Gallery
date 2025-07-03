import { memo, useEffect, useState } from "react";
import Nav from "./Nav";
import Image from "./Image";
import Type from "./Type";
import axios from "axios";
import Loader from "./Loader";
import LocomotiveScroll from "locomotive-scroll";
const Home = () => {
      new LocomotiveScroll();
      const [picture, setPictures] = useState([]);
      useEffect(() => {
            (async () => {
                  try {
                        console.log("Getting Data");
                        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}photos?page=1&per_page=30&client_id=${import.meta.env.VITE_KEY}`);
                        console.log("Data agya");
                        setPictures(data);
                  } catch (error) {
                        console.log(error.message);
                  }
            })();
      }, []);
      console.log(picture);
      return (
            <>
                  <Nav />
                  <Type />
                  <section className="w-full px-10  pb-10 columns-[250px]">{picture.length > 0 ? picture.map((picture) => <Image key={picture.id} picture={picture} />) : <Loader />}</section>
            </>
      );
};

export default memo(Home);
