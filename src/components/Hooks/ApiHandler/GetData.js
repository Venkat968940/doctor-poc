import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../Reducers/SnackbarReducers";
import { AxiosInstance } from "../Axios/AxiosInstance";

export const GetData = (title, apiUrl) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await AxiosInstance.get(apiUrl).catch((err) => {
      dispatch(showSnackbar({open: true, type: "error", message: err.response.data.message,}));
    });
    return response.data;
  };
  return useQuery({
    queryKey: [`${title}`], // for dependency
    queryFn: fetchData,
    retry: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  }); 
};
