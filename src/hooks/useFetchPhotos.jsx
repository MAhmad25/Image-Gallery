import { useCallback, useEffect, useState } from "react";
import splash from "../axios/axios";
import toast from "react-hot-toast";
const useFetchPhotos = () => {
      const [pictures, setPictures] = useState([]);
      const [page, setPage] = useState(1);
      const [category, setCategory] = useState("featured");
      const fetchPhotos = useCallback(async () => {
            const endpoint = category !== "featured" ? "search/photos" : "photos";
            const params = { page, per_page: 30, ...(category !== "featured" && { query: category }) };
            try {
                  const { data } = await splash.get(endpoint, { params });
                  const images = endpoint === "search/photos" ? data.results : data;
                  setPictures((prev) => (page === 1 ? images : [...prev, ...images]));
            } catch (error) {
                  toast.error(error.message);
            }
      }, [category, page]);
      useEffect(() => {
            fetchPhotos();
      }, [fetchPhotos]);
      useEffect(() => {
            setPage(1);
            setPictures([]);
      }, [category]);
      const fetchMore = () => setPage((prev) => prev + 1);
      return { pictures, category, page, setCategory, fetchMore };
};

export default useFetchPhotos;
