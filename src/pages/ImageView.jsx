import { FaRegCalendar } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { GrValidate } from "react-icons/gr";
import { GoEye } from "react-icons/go";
import ImageStats from "../components/ImageStats";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { GrLike } from "react-icons/gr";
import { lazy, Suspense, useEffect, useRef } from "react";
import Download from "../components/Buttons/Download";
import LikeButton from "../components/Buttons/LikeButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useParams } from "react-router-dom";
import Close from "../components/Buttons/CloseButton";
// import LiquidGlass from "../components/LiquidGlass";
import Info from "../components/Info";
import LocomotiveScroll from "locomotive-scroll";
import ViewLoader from "../components/Loaders/ViewLoader";
import useFetchDetail from "../hooks/useFetchDetail";
import useFetchRelated from "../hooks/useFetchRelated";
import ShareButton from "../components/Buttons/ShareButton";
import imageAnimation from "../animation/imageAnimation";
const Image = lazy(() => import("../components/Image"));
const ImageView = () => {
      const { id } = useParams();
      new LocomotiveScroll();
      const { imgDetail } = useFetchDetail(id);
      const { relatedImage } = useFetchRelated(id);
      const mask = useRef(null);
      const img = useRef(null);
      const likecta = useRef(null);
      const { contextSafe } = useGSAP();
      const show = contextSafe(() => {
            gsap.set(likecta.current, { scale: 1 });
      });
      const hide = contextSafe(() => {
            gsap.set(likecta.current, { scale: 0 });
      });
      useGSAP(
            () => {
                  let master = gsap.timeline();
                  master.add(imageAnimation(img, mask));
            },
            { dependencies: [imgDetail], revertOnUpdate: true }
      );
      useEffect(() => {
            window.scrollTo(0, 0);
      }, [id]);
      return Object.keys(imgDetail).length > 0 ? (
            <section className="w-full bg-[#EEEEEE] overflow-hidden [&::-webkit-scrollbar]:hidden  scroll-smooth relative">
                  {/* <LiquidGlass /> */}
                  <div className="fixed z-20 top-3 right-3">
                        <Close />
                  </div>
                  {/* Head of Image */}
                  <section className="py-10 flex flex-col items-center  gap-5 sm:gap-3 md:gap-5 min-h-[50vh]   sm:h-screen  w-full">
                        {/* Top User ------ Download Button */}
                        <div className="w-full flex order-2  justify-between items-center">
                              {/* User Section */}
                              <section className="sm:px-10  px-5">
                                    <div className="flex gap-2 sm:px-10 items-center">
                                          <img className="rounded-full w-10 h-10 bg-zinc-400 object-cover" src={imgDetail?.user?.profile_image?.medium} alt="user" />
                                          <div className="grid grid-cols-3 grid-rows-2">
                                                <h1 className="text-black col-span-2  sm:text-2xl leading-none capitalize tracking-tight ">{imgDetail?.user?.first_name}</h1>
                                                <GrValidate />
                                                <p className="text-zinc-500 col-span-3 text-sm sm:text-lg">{imgDetail?.user?.username}</p>
                                          </div>
                                    </div>
                              </section>
                              {/* Dowload Section */}
                              <div className="mr-5">
                                    <Download photoid={imgDetail?.id} />
                              </div>
                        </div>
                        {/* Image Section */}
                        <section onMouseEnter={show} onMouseLeave={hide} className={`${imgDetail?.width >= imgDetail?.height ? "columns-[400px] sm:columns-[600px]" : "columns-[250px] sm:columns-[300px]"}  sm:order-2   overflow-hidden h-[50vh] sm:h-[75vh]  min-[550px]:h-[50vh] relative shrink-0`}>
                              {/* min-[550px]:w-1/2 sm:w-[80%] w-3/4  */}
                              <div ref={mask} className="absolute origin-top z-40 w-full h-full top-0 left-0 bg-black"></div>
                              <div ref={likecta} className="absolute scale-0 place-content-center grid top-0 left-0  z-10 w-full h-full bg-black/10">
                                    <LikeButton />
                              </div>
                              <img ref={img} data-scroll data-scroll-speed="-0.2" className="scale-125 h-full absolute object-cover" src={imgDetail?.urls?.regular} width={imgDetail?.width} height={imgDetail?.height} alt={imgDetail?.alt_description} />
                        </section>
                  </section>
                  {/* Info Section */}
                  <section className="w-full min-[550]:px-10 px-5  min-[550px]:py-5  shrink-0 ">
                        <div className="w-full flex flex-wrap sm:flex-nowrap gap-5 min-[550px]:gap-10 sm:gap-4 md:gap-10 sm:items-center">
                              <ImageStats Icon={GrLike} desc={"Likes"} value={imgDetail.likes} />
                              <ImageStats Icon={GoEye} desc={"Views"} value={imgDetail.views} />
                              <ImageStats Icon={LiaDownloadSolid} desc={"Downloads"} value={imgDetail.downloads} />
                              <ShareButton />
                        </div>
                        <p className="text-black/90 sm:text-xl mt-4 font-Nova">{(imgDetail?.description?.length > 7 && imgDetail.description) || imgDetail?.alt_description}</p>
                        <div className="mt-5">
                              {imgDetail?.location?.name && <Info Icon={IoLocationOutline} desc={"Location:  "} value={imgDetail?.location?.name} />}
                              <Info Icon={FaRegCalendar} desc={"Published on:  "} value={imgDetail?.created_at?.split("T")[0]} />
                              <Info Icon={GrUpdate} desc={"Updated at:  "} value={imgDetail?.updated_at?.split("T")[0]} />
                        </div>
                        <div className="mt-5 flex flex-wrap sm:w-3/4 gap-2 ">
                              {imgDetail?.tags?.map((tag, index) => (
                                    <Link to={"/search-for-photo"} key={index} className="shrink-0">
                                          <div className="py-1 px-3 text-sm sm:text-lg sm:py-2 sm:px-4 rounded-md font-Nova text-[#555555]  bg-white">{tag.title}</div>
                                    </Link>
                              ))}
                        </div>
                  </section>
                  {/* Related Image Section */}
                  <section className="w-full px-5 py-5  shrink-0">
                        <h1 className="tsm:ext-5xl text-3xl font-Nova">Related Images</h1>
                        <section className="w-full py-5 pb-10 columns-[250px]">
                              {relatedImage?.map((picture) => (
                                    <Suspense fallback={<p className="mx-auto text-black w-full h-5">Loading Related Images</p>}>
                                          <Image key={picture.id} picture={picture} />
                                    </Suspense>
                              ))}
                        </section>
                  </section>
            </section>
      ) : (
            <ViewLoader />
      );
};

export default ImageView;
