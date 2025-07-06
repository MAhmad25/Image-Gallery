import { Link } from "react-router-dom";
const Image = ({ picture }) => {
      return (
            <div style={{ backgroundColor: picture.color }} key={picture.id} className={`mb-4 overflow-hidden relative cursor-zoom-in`}>
                  <Link to={`/view-photo/${picture.id}`}>
                        <img data-scroll data-scroll-speed="-0.1" loading="lazy" className="object-cover" width={picture.width} height={picture.height} src={picture.urls.small} alt={picture.alt_description} />
                  </Link>
            </div>
      );
};
export default Image;
