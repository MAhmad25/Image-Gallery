import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import splash from "../axios/axios";

const useFetchDetail = (id) => {
      const [imgDetail, setImgDetail] = useState({});
      const fetchDetail = useCallback(async () => {
            try {
                  const { data } = await splash.get(`photos/${id}`);
                  setImgDetail(data);
            } catch (error) {
                  toast.error(error.message);
                  setImgDetail({});
                  return;
            }
      }, [id]);
      useEffect(() => {
            fetchDetail();
      }, [fetchDetail]);
      return { imgDetail };
};

export default useFetchDetail;
