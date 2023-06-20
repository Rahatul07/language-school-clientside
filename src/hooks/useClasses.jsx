import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useClasses = () => {
  const { user, loading } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/classes?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [classes, refetch];
};
export default useClasses;
