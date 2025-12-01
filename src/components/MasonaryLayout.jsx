import Loader from "../components/Loaders/Loader";
import Image from "./Image";
import LocomotiveScroll from "locomotive-scroll";
import useFetchPhotos from "../hooks/useFetchPhotos";
const CATEGORY = ["featured", "wallpaper", "3D", "pakistan", "nature", "people", "travel"];
const MasonaryLayout = () => {
      new LocomotiveScroll();
      const { category, setCategory, pictures, fetchMore } = useFetchPhotos();
      return (
            <>
                  <section className="w-full flex overflow-x-scroll sm:justify-end  gap-2 items-center [&::-webkit-scrollbar]:hidden  py-5 sm:px-4 px-2 ">
                        {CATEGORY.map((type, index) => (
                              <button key={index} onClick={() => setCategory(type)} className={`${category === type ? "bg-black text-white" : "text-black bg-white"} font-Nova capitalize transition text-sm sm:text-[1rem]   whitespace-nowrap  hover:bg-black  hover:text-white rounded-2xl sm:rounded-4xl  border-[1px] px-3 py-1 border-zinc-800`}>
                                    {type}
                              </button>
                        ))}
                  </section>
                  <section className="w-full px-10 pb-10 columns-[250px]">{pictures.length > 0 ? pictures.map((picture) => <Image key={picture.id} picture={picture} />) : <Loader />}</section>
                  <button className="outline-none cursor-pointer font-Astralaga  rounded-xl w-40 mb-5 mx-auto border-none text-zinc-200 bg-zinc-900 py-2" onClick={fetchMore}>
                        Load More
                  </button>
            </>
      );
};

export default MasonaryLayout;
