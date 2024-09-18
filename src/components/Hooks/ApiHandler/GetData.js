import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../Snackbar/Reducers";

export const GetData = (title, apiUrl) => {
  const dispatch = useDispatch();
console.log(title, apiUrl)
  const fetchData = async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  };
  return useQuery({
    queryKey: [`${title}`], // for dependency
    queryFn: fetchData,
    retry: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onError : (error) =>{
        dispatch(showSnackbar({open: true, type:"error",message: error.message}))
    }
  });
};
  