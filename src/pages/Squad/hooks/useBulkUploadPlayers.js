import axios from "axios";
import { useState } from "react";
import { setToast } from "../../../common/store/toastSlice";
import { useDispatch } from "react-redux";

const useBulkUploadPlayers = ({
  squadId,
  players,
  getMatchById,
  matchId,
  setPlayers,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const uploadPlayers = async (data) => {
    const config = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    };
    const payload = {
      squadId,
      matchId,
      players: players?.map((player) => player.id),
    };
    const res = await axios.post(
      process.env.REACT_APP_BACKEND + "squad/bulk-upload-players",
      payload,
      config
    );
    return res;
  };

  const uploadPlayersInSquad = (data) => {
    setLoading(true);
    uploadPlayers(data)
      .then((res) => {
        setLoading(false);
        setData(res);
        getMatchById(matchId);
        setPlayers([]);
      })
      .catch((err) => {
        setLoading(false);
        dispatch(
          setToast({
            severity: "error",
            summary: "Please select  11 players.",
            detail: err.response.data?.players || err.response.data,
            life: 3000,
          })
        );
      });
  };

  return {
    uploadPlayersInSquad,
    loading,
    data: data?.data,
    options: data?.data,
  };
};
export default useBulkUploadPlayers;
