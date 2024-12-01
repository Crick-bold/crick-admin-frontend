import { useDispatch } from "react-redux";
import useRequest from "../../../common/hooks/useRequest";
import { setToast } from "../../../common/store/toastSlice";
const useInsertBall = ({
  matchData,
  getScoreData,
  batPlayerId,
  ballPlayerId,
  batsmanOnNonStrike,
  getMatchById,
  battingTeam,
  autoLoad,
  outType,
  isNoBall,
  isWide,
  byeRuns,
  legByeRuns,
  penatlyRuns,
  validRuns,
  playedShot,
  helpingPlayer,
  runOutPlayer,
}) => {
  const { data, loading, trigger } = useRequest({
    url: "ball",
    method: "post",
    autoLoad,
  });

  const dispatch = useDispatch();

  const insertBall = async ({ result }) => {
    if (loading) return;
    if (battingTeam === 0) {
      dispatch(
        setToast({
          severity: "error",
          summary: "Match not started yet",
          detail: "Please start the match first.",
          life: 3000,
        })
      );
      return;
    }
    if (batPlayerId && batsmanOnNonStrike && ballPlayerId) {
      const payload = {
        matchId: matchData?.id,
        result,
        resultObject: {
          outType,
          playerId: helpingPlayer,
          noBall: isNoBall,
          wide: isWide,
          extraRuns: [byeRuns || 0, legByeRuns || 0, penatlyRuns || 0],
          validRuns: [25, 12, 11, 14, 15].includes(result) ? validRuns : result,
          runOutPlayerId: runOutPlayer,
        },

        playedShot,
      };
      await trigger(payload);
      await getScoreData();
      await getMatchById(matchData?.id);
      return data;
    } else {
      dispatch(
        setToast({
          severity: "error",
          summary: "No Batsman/ Bowler Selected",
          detail: "Please select batsman and bowler.",
          life: 3000,
        })
      );
    }
  };

  return {
    loading,
    data: data?.data,
    insertBall,
  };
};
export default useInsertBall;
