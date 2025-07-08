/* eslint-disable no-unused-vars */
import { numify } from "numify";
const ImageStats = ({ Icon, desc, value }) => {
      return (
            <div className="flex shrink-0 sm:shrink items-center gap-2">
                  <Icon />
                  <h1 className="sm:text-xl text-sm  font-Nova text-black/50">
                        {desc}: <span className="text-black font-semibold">{numify(value)}</span>
                  </h1>
            </div>
      );
};

export default ImageStats;
