import splash from "../axios/axios";
import toast from "react-hot-toast";
const handleDownload = async (photoid) => {
      const toastId = toast.loading("Downloading....");
      try {
            const TRACK = await splash.get(`/photos/${photoid}/download`);
            const downloadUrl = TRACK.data.url;
            const resp = await fetch(downloadUrl);
            const blob = await resp.blob();
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = blobUrl;
            a.download = `${photoid}.png`;
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(blobUrl);
            a.remove();
            toast.success("Check your gallery", { id: toastId });
      } catch (err) {
            toast.error("Download error: " + err.message, { id: toastId });
      }
};
export default handleDownload;
