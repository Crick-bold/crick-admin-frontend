import axios from "axios";
import { useState } from "react";

const useCreateVenue = ({  setShow, listVenues }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const createVenue = async (data) => {
    const res = await axios.post(
      process.env.REACT_APP_BACKEND + "venue",
      data,
      config,
    );
    setShow(false);
    listVenues();
    return res;
  };

  const addVenue = (data) => {
    createVenue(data).then((res) => {
      setLoading(false);
      setData(res);
    });
  };
  return { addVenue, loading, data };
};
export default useCreateVenue;
