import ImageContext from "../contexts/ImageContext";
import useFetchPhotos from "../hooks/useFetchPhotos";
const ImageProvider = ({ children }) => {
      const { category, setCategory, pictures, fetchMore } = useFetchPhotos();
      const appState = { category, setCategory, pictures, fetchMore };
      return <ImageContext.Provider value={appState}>{children}</ImageContext.Provider>;
};
export default ImageProvider;
