import { Link } from "react-router-dom";
const Image = ({ picture }) => {
      return (
            <div style={{ backgroundColor: picture.color }} key={picture.id} className={`mb-4 overflow-hidden relative cursor-zoom-in`}>
                  <Link to={`/view/${picture.id}`}>
                        <img data-scroll data-scroll-speed="-0.1" loading="lazy" className="object-cover" width={picture.width} height={picture.height} src={picture.urls.small} alt={picture.alt_description} />
                  </Link>
            </div>
      );
};
export default Image;
{
      /* <div ref={userRef} className="w-full flex gap-2 translate-y-[10rem] origin-bottom items-center bg-black/20 backdrop-blur-lg z-20 p-2  absolute bottom-0 left-0">
                        <img className="rounded-full w-8 h-8  object-cover" src="https://images.unsplash.com/profile-1698461695925-efb929ec6179image?ixlib=rb-4.1.0&crop=faces&fit=crop&w=128&h=128" alt="user" />
                        <h1 className="text-white text-xl leading-none capitalize tracking-tight ">rishi</h1>
                  </div>
                  
                     const userRef = useRef(null);
      const show = () => {
            gsap.to(userRef.current, { y: "0rem" });
      };
      const hide = () => {
            gsap.to(userRef.current, { y: "10rem" });
      };*/
}
