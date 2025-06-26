import { NavLink } from "react-router-dom";
const Type = () => {
      return (
            <section className="w-full flex justify-end gap-2 items-center py-5 px-4 ">
                  {[
                        { category: "Featured", route: "/" },
                        { category: "Wallpaper", route: "/topics/wallpapers/photos?order_by=featured" },
                        { category: "3D Texture", route: "/topics/3dtexture/photos?order_by=featured" },
                        { category: "Travel", route: "/topics/travel/photos?order_by=featured" },
                        { category: "Nature", route: "/topics/nature/photos?order_by=featured" },
                  ].map((type, index) => (
                        <NavLink
                              key={index}
                              to={`${type.route}`}
                              className={({ isActive }) => {
                                    return `${isActive ? "bg-black  text-white" : "text-black"} font-Nova hover:bg-black  hover:text-white rounded-4xl border-[1px] px-3 py-1 border-zinc-800`;
                              }}
                        >
                              {type.category}
                        </NavLink>
                  ))}
            </section>
      );
};

export default Type;
