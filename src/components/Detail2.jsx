/* eslint-disable no-unused-vars */
const Detail2 = ({ Icon, desc, value }) => {
      return (
            <div className="flex items-center gap-2">
                  <Icon />
                  <h1 className="text-xl font-Nova text-black/50">
                        {desc}: <span className="text-black font-semibold">{value}</span>
                  </h1>
            </div>
      );
};

export default Detail2;
