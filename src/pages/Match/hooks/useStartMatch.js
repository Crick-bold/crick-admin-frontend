import axios from "axios";
import { useState } from "react";
const useStartMatch = ({
  matchId,
  getMatchById,
  tossWinner,
  battingOrBowling,
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const startMatchNow = async () => {
    let firstBatting = -1;
    if (battingOrBowling === "batting") {
      if (tossWinner === 1) firstBatting = -1;
      else firstBatting = 1;
    } else {
      if (tossWinner === 1) firstBatting = 1;
      else firstBatting = -1;
    }
    const config = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    };
    const res = await axios.get(
      process.env.REACT_APP_BACKEND +
        "match/start-match/" +
        matchId +
        "/" +
        firstBatting,
      config
    );
    return res;
  };

  const startMatch = () => {
    console.log("hii");
    startMatchNow().then((res) => {
      setLoading(false);
      setData(res);
      getMatchById(matchId);
    });
  };

  return {
    loading,
    data: data?.data,
    startMatch,
  };
};
export default useStartMatch;
