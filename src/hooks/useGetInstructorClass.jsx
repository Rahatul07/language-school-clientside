import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetInstructorClass = (route, limit = 0) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [route, limit],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/${route}?limit=${limit}`);

      return res.data;
    },
  });
  return { data, isLoading, refetch };
};

export default useGetInstructorClass;
