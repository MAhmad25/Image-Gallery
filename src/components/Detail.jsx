/* eslint-disable no-unused-vars */
const Detail = ({ desc, Icon, value }) => {
      return (
            <div className="w-full flex items-center gap-1 ">
                  <Icon size="1rem" color="black" />
                  <h2 className="font-Nova text-zinc-500 sm:text-xl">
                        {desc} <span className="font-normal">{value}</span>
                  </h2>
            </div>
      );
};

export default Detail;
