import axios from "axios";
import { useState } from "react";
const useUpdateStrike = ({
  squadId,
  getMatchById,
  matchId,
  battingTeam,
  wickets,
  squadPlayerMappingId,
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const updateStrike = async (values) => {
    if ([0, 3].includes(battingTeam)) {
      alert("Match has not started yet.");
      return;
    }
    const {
      batsmanOnStrike: batsmanOnStrike,
      batsmanOnNonStrike: batsmanOnNonStrike,
      bowler,
    } = values;

    if (
      batsmanOnStrike &&
      batsmanOnNonStrike &&
      bowler &&
      batsmanOnStrike !== batsmanOnNonStrike
    ) {
      const payload = {
        squadId,
        squadPlayerMappingId,
        wickets,
        ...values,
      };
      const res = await axios.post(
        process.env.REACT_APP_BACKEND + "squad/update-strike",
        payload
      );
      setLoading(false);
      getMatchById(matchId);
      setData(res);
      return res;
    }
  };

  return {
    loading,
    data: data?.data,
    updateStrike,
  };
};
export default useUpdateStrike;
