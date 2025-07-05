import axios from "axios";

const splash = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_KEY}`,
      },
});
export default splash;
