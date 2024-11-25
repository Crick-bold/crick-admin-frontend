import axios from "axios";
import { useEffect, useState } from "react";
const useGetScore = ({ matchId, team1, team2 }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getScore = async () => {
    const res = await axios.get(process.env.REACT_APP_BACKEND + 'match/get_score/'+matchId, { matchId, team1, team2 })
    return res
  }

  const getScoreData = () => {
    getScore().then((res) => {
      setLoading(false);
      setData(res);
    });
  };

  useEffect(() => {
      getScoreData();
  }, [team1, team2, matchId]);
  return {
    loading,
    score: data?.data,
    getScoreData,
  };
};
export default useGetScore;
