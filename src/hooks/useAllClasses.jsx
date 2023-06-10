import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllClasses = (route, limit = 0) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const url = `${baseUrl}/${route}?limit=${limit}`;
  //   console.log("url", url);
  const { data = [], isLoading } = useQuery({
    queryKey: [route, limit],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/${route}?limit=${limit}`);
      //   console.log("data from hook", res.data);
      return res.data;
    },
  });
  return { data, isLoading, url };
};

export default useAllClasses;
