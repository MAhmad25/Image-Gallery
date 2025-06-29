import { FaRegCalendar } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { GrValidate } from "react-icons/gr";
import Detail from "../components/detail";
import { GoEye } from "react-icons/go";
import Detail2 from "../components/Detail2";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { GrLike } from "react-icons/gr";
import Share from "../components/Share";
import { useEffect, useRef } from "react";
import Download from "../components/Download";
import LikeButton from "../components/LikeButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { relatedImage } from "../../RelatedImage";
import Image from "../components/Image";
import Close from "../components/CloseButton";
const ImageView = () => {
      const mask = useRef(null);
      const img = useRef(null);
      const likecta = useRef(null);
      const show = () => {
            gsap.set(likecta.current, { scale: 1 });
      };
      const hide = () => {
            gsap.set(likecta.current, { scale: 0 });
      };
      useGSAP(() => {
            let tl = gsap.timeline({ defaults: { duration: 1.3, ease: "expo.inOut" } });
            tl.to(mask.current, {
                  scaleY: 0,
            }).to(
                  img.current,
                  {
                        scale: 1,
                  },
                  "-=.9"
            );
      }, []);
      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);
      return (
            <section className="w-full bg-white scroll-smooth relative">
                  <div className=" fixed top-3 right-3">
                        <Close />
                  </div>
                  {/* Head of Image */}
                  <section className="flex py-10  h-screen w-full">
                        {/* User Section */}
                        <section className="w-1/4 px-10 h-full  shrink-0 ">
                              <div className="flex gap-2 px-10 items-center">
                                    <img className="rounded-full w-10 h-10  object-cover" src="https://images.unsplash.com/profile-1698461695925-efb929ec6179image?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128" alt="user" />
                                    <div className="flex flex-col relative">
                                          <h1 className="text-black text-2xl leading-none capitalize tracking-tight ">rishi</h1>
                                          <GrValidate className="absolute right-5" />
                                          <p className="text-zinc-500">beingabstrac</p>
                                    </div>
                              </div>
                        </section>
                        {/* Image Section */}
                        <section onMouseEnter={show} onMouseLeave={hide} className="w-2/4  overflow-hidden relative h-full shrink-0 ">
                              <div ref={mask} className="absolute origin-top z-20  top-0 left-0 bg-black w-full h-[calc(100vh-32px-20px)]"></div>
                              <div ref={likecta} className="absolute scale-0 place-content-center grid top-0 left-0  z-10 w-full h-full bg-black/20">
                                    <LikeButton />
                              </div>
                              <img data-scroll data-scroll-speed="-0.4" ref={img} className="w-full scale-125 absolute h-[calc(100vh-32px-20px)] object-cover" src="https://images.unsplash.com/photo-1743601567013-b72682fdc511?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NjYxNjl8MHwxfGFsbHwxfHx8fHx8fHwxNzUwNzQ0MjgyfA&ixlib=rb-4.1.0&q=85" width={2448} height={3264} alt="Testing Pic" />
                        </section>
                        {/* Dowload Section */}
                        <section className="w-1/4 flex flex-col px-10 h-full shrink-0 ">
                              <Download />
                        </section>
                  </section>
                  {/* Info Section */}
                  <section className="w-full px-10   py-5  shrink-0 ">
                        <div className="w-full  flex gap-10 items-center">
                              <Detail2 Icon={GrLike} desc={"Likes"} value={123} />
                              <Detail2 Icon={GoEye} desc={"Views"} value={12} />
                              <Detail2 Icon={LiaDownloadSolid} desc={"Downloads"} value={12} />
                              <Share />
                        </div>
                        <p className="text-black/90 mt-4 font-Nova">Gas station with red neons in the desert at night in Annakhil, Marrakesh, Morocco.</p>
                        <div className="mt-5">
                              <Detail Icon={IoLocationOutline} desc={"Annakhil, Marrakesh, Morocco"} />
                              <Detail Icon={FaRegCalendar} desc={"Published on:  "} value={"2025-01-03"} />
                              <Detail Icon={GrUpdate} desc={"Updated at:  "} value={"2025-01-03"} />
                        </div>
                        <div className="mt-5 flex flex-wrap w-3/4 gap-2 ">
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                              <Link className="shrink-0">
                                    <div className="py-3 px-2 rounded-md font-Nova text-[#555555]  bg-[#EEEEEE]">Morrcoc</div>
                              </Link>
                        </div>
                  </section>
                  {/* Related Image Section */}
                  <section className="w-full px-10   py-5  shrink-0">
                        <h1 className="text-5xl font-Nova">Related Images</h1>
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
