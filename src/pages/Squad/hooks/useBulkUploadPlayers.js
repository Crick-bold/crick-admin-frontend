import axios from "axios";
import { useState } from "react";

const useBulkUploadPlayers = ({ squadId, players, getMatchById, matchId,setPlayers}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const uploadPlayers = async (data) => {
    const payload = {
      squadId,
    players : players?.map((player)=>(player.id))
    };
      const res = await axios.post(
        process.env.REACT_APP_BACKEND + "squad/bulk-upload-players",
        payload,
      );
      return res;
  };

  const uploadPlayersInSquad = (data) => {
    uploadPlayers(data).then((res) => {
      setLoading(false);
      setData(res);
      getMatchById(matchId);
      setPlayers([])
      console.log(res,'hey')
    }).catch((err)=>{
      console.log(err.response.data.players)
    })
  };

  return {
    uploadPlayersInSquad,
    loading,
    data: data?.data,
    options: data?.data,
  };
};
export default useBulkUploadPlayers;
