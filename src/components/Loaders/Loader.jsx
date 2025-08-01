import { LoaderData } from "../../../LoaderData";
const Loader = () => {
      return (
            <>
                  {LoaderData.map((pic, index) => (
                        <div style={{ backgroundColor: pic.color }} key={index} className={`mb-4  animate-pulse  relative cursor-zoom-in`}>
                              <img className="bg-zinc-400 invisible" alt="Images are Loading" width={pic.width} height={pic.height} />
                        </div>
                  ))}
            </>
      );
};
export default Loader;
