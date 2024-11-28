import axios from "axios";
import { useEffect, useState } from "react";
import useRequest from "../../../common/hooks/useRequest";
const useGetSeries = ({ seriesId }) => {
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // const getSeries = async (data) => {
  //   const res = await axios.get(
  //     process.env.REACT_APP_BACKEND + "series/" + seriesId,
  //     data
  //   );
  //   return res;
  // };

  // useEffect(() => {
  //   getSeries().then((res) => {
  //     setLoading(false);
  //     setData(res?.data);
  //   });
  // }, []);
  // return {
  //   loading,
  //   data,
  //   getSeries
  // };
  const { data, loading, trigger } = useRequest({
    url: 'series/' + seriesId,
    method: 'get',
    isConfig: true
  })

  const getSeries = () => {
    trigger();
  };

  useEffect(() => {
    if (seriesId) {
      getSeries();
    }
  }, [seriesId]);
  return {
    loading,
    data: data?.data,
    options: data?.data,
    getSeries,
  };
};
export default useGetSeries;
