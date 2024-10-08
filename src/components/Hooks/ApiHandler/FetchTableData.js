import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../Reducers/SnackbarReducers";
import { AxiosInstance } from "../Axios/AxiosInstance";

export const FetchTableData = (title, getUrl, page, rowsPerPage, search, setPageCount) => {
  const dispatch = useDispatch();

  const getMethod = async () => {
    const url = `${getUrl}page=${page + 1}&limit=${rowsPerPage}`;
    const response = await AxiosInstance.get(url).catch((err) => {
      console.log(err)
      dispatch(showSnackbar({open: true, type: "error", message: err.response.data.message,}));
    });
    setPageCount(response.data.total);
    
    return response?.data?.data;
  };
  return useQuery({
    queryKey: [`${title}`, page, rowsPerPage],
    queryFn: getMethod,
    retry: false,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    // throwOnError: true,
  });
};
