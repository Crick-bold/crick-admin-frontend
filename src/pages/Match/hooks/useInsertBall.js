import { useDispatch } from "react-redux";
import useRequest from "../../../common/hooks/useRequest";
import { setToast } from "../../../common/store/toastSlice";
const useInsertBall = ({
  matchData,
  ballOftheMatch,
  getScoreData,
  batPlayerId,
  ballPlayerId,
  batsmanOnNonStrike,
  squadId,
  getMatchById,
  legalBalls,
  battingTeam,
  reset,
  autoLoad,
  outType,
}) => {
  const { data, loading, trigger } = useRequest({
    url: "ball",
    method: "post",
    autoLoad,
  });

  const dispatch = useDispatch();

  const insertBall = async ({ result, playedShot, outType }) => {
    if (battingTeam === 0) {
      dispatch(
        setToast({
          severity: 'error',
          summary: 'Match not started yet',
          detail: "Please start the match first.",
          life: 3000,
        }
      ))
      return;
    }
    if (batPlayerId && batsmanOnNonStrike && ballPlayerId) {
      const payload = {
        matchId: matchData?.id,
        result,
        specialEvents: outType ? [outType] : null,
        playedShot,
      };
      await trigger(payload);
      await getScoreData();
      await getMatchById(matchData?.id);
      return data;
    } else {
      dispatch(
        setToast({
          severity: 'error',
          summary: 'No Batsman/ Bowler Selected',
          detail: "Please select batsman and bowler.",
          life: 3000,
        }
      ))    }
  };

  return {
    loading,
    data: data?.data,
    insertBall,
  };
};
export default useInsertBall;
