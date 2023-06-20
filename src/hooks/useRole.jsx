import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, isLoading: authLoading } = useContext(AuthContext);

  const { data: role, isLoading: roleLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !authLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/students/${user?.email}`);
      return res.data.role || "student";
    },
  });
  return { role, roleLoading };
};

export default useRole;
