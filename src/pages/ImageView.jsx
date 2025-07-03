import { FaRegCalendar } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { GrValidate } from "react-icons/gr";
import { GoEye } from "react-icons/go";
import ImageStats from "../components/ImageStats";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { GrLike } from "react-icons/gr";
import Share from "../components/Buttons/Share";
import { useEffect, useRef } from "react";
import Download from "../components/Buttons/Download";
import LikeButton from "../components/Buttons/LikeButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { relatedImage } from "../../RelatedImage";
import Image from "../components/Image";
import Close from "../components/Buttons/CloseButton";
import LiquidGlass from "../components/LiquidGlass";
import Info from "../components/Info";
import LocomotiveScroll from "locomotive-scroll";
const ImageView = () => {
      new LocomotiveScroll();
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
      useGSAP(() => {
            let tl = gsap.timeline({ defaults: { duration: 1.3, ease: "expo.inOut" } });
            tl.to(mask.current, {
                  scaleY: 0,
                  delay: 0.3,
            }).to(
                  img.current,
                  {
                        scale: 1,
                  },
                  "-=.9"
            );
      });
      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);
      return (
            <section className="w-full bg-white overflow-hidden [&::-webkit-scrollbar]:hidden  scroll-smooth relative">
                  <LiquidGlass />
                  <div className="fixed z-20 top-3 right-3">
                        <Close />
                  </div>
                  {/* Head of Image */}
                  <section className="py-10 flex flex-col items-center  gap-5 sm:gap-3 md:gap-5 min-h-[50vh]   sm:h-screen  w-full">
                        {/* Top User ------ Download Button */}
                        <div className="w-full flex order-2  justify-between items-center">
                              {/* User Section */}
                              <section className="sm:px-10 px-5">
                                    <div className="flex gap-2 sm:px-10 items-center">
                                          <img className="rounded-full w-10 h-10  object-cover" src="https://images.unsplash.com/profile-1698461695925-efb929ec6179image?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128" alt="user" />
                                          <div className="flex flex-col relative">
                                                <h1 className="text-black sm:text-2xl leading-none capitalize tracking-tight ">rishi</h1>
                                                <GrValidate className="absolute right-5" />
                                                <p className="text-zinc-500 text-sm sm:text-lg">beingabstrac</p>
                                          </div>
                                    </div>
                              </section>
                              {/* Dowload Section */}
                              <Download />
                        </div>
                        {/* Image Section */}
                        <section onMouseEnter={show} onMouseLeave={hide} className="min-[550px]:w-1/2 sm:w-[80%] w-3/4  sm:order-2  overflow-hidden relative h-[50vh] sm:h-[75vh]  min-[550px]:h-[50vh] shrink-0 ">
                              <div ref={mask} className="absolute origin-top z-40 w-full h-full top-0 left-0 bg-black"></div>
                              <div ref={likecta} className="absolute scale-0 place-content-center grid top-0 left-0  z-10 w-full h-full bg-black/20">
                                    <LikeButton />
                              </div>
                              <img ref={img} data-scroll data-scroll-speed="-0.1" className="scale-125 w-full h-full absolute object-cover" src="https://images.unsplash.com/photo-1749802449762-5e428ccf9a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NjYxNjl8MHwxfGFsbHw5fHx8fHx8fHwxNzUwNzQ0MjgyfA&ixlib=rb-4.1.0&q=80&w=400" width={9024} height={6016} alt="Testing Pic" />
                        </section>
                  </section>
                  {/* Info Section */}
                  <section className="w-full min-[550]:px-10 px-5  min-[550px]:py-5  shrink-0 ">
                        <div className="w-full flex flex-wrap sm:flex-nowrap gap-5 min-[550px]:gap-10 sm:gap-4 md:gap-10 sm:items-center">
                              <ImageStats Icon={GrLike} desc={"Likes"} value={123} />
                              <ImageStats Icon={GoEye} desc={"Views"} value={12} />
                              <ImageStats Icon={LiaDownloadSolid} desc={"Downloads"} value={12} />
                              <Share />
                        </div>
                        <p className="text-black/90 mt-4 font-Nova">Gas station with red neons in the desert at night in Annakhil, Marrakesh, Morocco.</p>
                        <div className="mt-5">
                              <Info Icon={IoLocationOutline} desc={"Annakhil, Marrakesh, Morocco"} />
                              <Info Icon={FaRegCalendar} desc={"Published on:  "} value={"2025-01-03"} />
                              <Info Icon={GrUpdate} desc={"Updated at:  "} value={"2025-01-03"} />
                        </div>
                        <div className="mt-5 flex flex-wrap sm:w-3/4 gap-2 ">
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className=" py-2 px-1 text-sm sm:text-lg sm:py-3 sm:px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                        </div>
                  </section>
                  {/* Related Image Section */}
                  <section className="w-full px-5 py-5  shrink-0">
                        <h1 className="tsm:ext-5xl text-3xl font-Nova">Related Images</h1>
                        <section className="w-full py-5 pb-10 columns-[250px]">
                              {relatedImage.results.map((picture) => (
                                    <Image key={picture.id} picture={picture} />
                              ))}
                        </section>
                  </section>
            </section>
      );
};

export default ImageView;
