import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetFood = (query) => {
  return useQuery({
    queryKey: ["getFood", query],
    enabled: query?.email ? true : false,
    queryFn: async () => {
      const params = new URLSearchParams();

      if (query?.email) {
        params.append("email", query?.email);
      }

      const { data } = await axios.get(`http://localhost:5000/foods`, {
        params,
      });
   
      return data;
    },
  });
};
