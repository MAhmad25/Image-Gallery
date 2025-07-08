import { useCallback, useEffect, useState } from "react";
import splash from "../axios/axios";
import toast from "react-hot-toast";
const useSearchQuery = () => {
      const [pictures, setPictures] = useState([]);
      const [page, setPage] = useState(1);
      const [query, setQuery] = useState("");
      const showQueryResults = useCallback(async () => {
            const endpoint = "search/photos";
            const q = query.trim();
            if (!q) return;
            const params = { page, per_page: 30, query: q };
            try {
                  const { data } = await splash.get(endpoint, { params });
                  const images = data.results;
                  setPictures((prev) => (page === 1 ? images : [...prev, ...images]));
            } catch (error) {
                  toast.error(error.message);
            }
      }, [query, page]);
      useEffect(() => {
            showQueryResults();
      }, [page]);
      useEffect(() => {
            setPictures([]);
            setPage(1);
      }, [query]);
      const fetchMore = () => setPage((prev) => prev + 1);

      return { pictures, query, page, setQuery, fetchMore, showQueryResults };
};

export default useSearchQuery;
