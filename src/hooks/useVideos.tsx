import { useContext } from "react";
import VideosContext from "@/context/VideosContext";

const useVideosHook = () => useContext(VideosContext);

export default useVideosHook;
