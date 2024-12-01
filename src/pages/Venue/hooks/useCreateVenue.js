import axios from "axios";
import { useState } from "react";
import { setToast } from "../../../common/store/toastSlice";
import { useDispatch } from "react-redux";

const useCreateVenue = ({ setShow, listVenues }) => {
  const config = {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  };
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const createVenue = async (data) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND + "venue",
        data,
        config
      );
      setShow(false);
      listVenues();
      dispatch(
        setToast({
          severity: "success",
          summary: "Saved",
          detail: "Venue saved successfully",
          life: 3000,
        })
      );
      return res;
    } catch (err) {
      dispatch(
        setToast({
          severity: "error",
          summary: "Something went wrong",
          detail: err.response.data?.teams || err.response.data.error,
          life: 3000,
        })
      );
    }
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
