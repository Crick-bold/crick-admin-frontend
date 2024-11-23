import { useEffect, useState } from "react";
import useRequest from "../../../common/hooks/useRequest";
const useListSeries = ({ searchText = "", primaryCall = true }) => {
  const [count, setCount] = useState(0);

  const { data, loading, trigger } = useRequest({
    url: "series/list_series",
    method: "post",
    isConfig: true,
  });

  const listSeries = async () => {
    const payload = {
      filters: {
        created_by: 0,
      },
      like: {
        name: searchText,
      },
    };
    trigger(payload);
  };

  useEffect(() => {
    if (primaryCall) {
      listSeries();
    } else {
      if (count >= 1) {
        listSeries();
      }
    }
    setCount(count + 1);
  }, [searchText]);

  return {
    loading,
    data: data?.data,
    options: data?.data,
    listSeries,
  };
};
export default useListSeries;
