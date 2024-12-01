import axios from "axios";
import { useState } from "react";
import { setToast } from "../../../common/store/toastSlice";
import { useDispatch } from "react-redux";
const useUpdateStrike = ({
  squadId,
  getMatchById,
  matchId,
  battingTeam,
  wickets,
  squadPlayerMappingId,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const updateStrike = async (values) => {
    if (loading) return;
    if ([0, 3].includes(battingTeam)) {
      alert("Match has not started yet.");
      return;
    }
    const {
      batsmanOnStrike: batsmanOnStrike,
      batsmanOnNonStrike: batsmanOnNonStrike,
      bowler,
    } = values;

    if (batsmanOnStrike === batsmanOnNonStrike) {
      dispatch(
        setToast({
          severity: "error",
          summary: "Error",
          detail: "Please select different strike player and not strike player",
          life: 3000,
        })
      );
    }

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
