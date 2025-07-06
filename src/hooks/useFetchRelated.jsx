import { useCallback, useEffect, useState } from "react";
import splash from "../axios/axios";
import toast from "react-hot-toast";

const useFetchRelated = (id) => {
      const [relatedImage, setRelatedImage] = useState([]);
      const fetchRelatedImages = useCallback(async () => {
            try {
                  const { data } = await splash.get(`photos/${id}/related`);
                  setRelatedImage(data.results);
            } catch (error) {
                  toast.error(error.message);
                  setRelatedImage([]);
                  return;
            }
      }, [id]);
      useEffect(() => {
            fetchRelatedImages();
      }, [fetchRelatedImages]);
      return { relatedImage };
};

export default useFetchRelated;
