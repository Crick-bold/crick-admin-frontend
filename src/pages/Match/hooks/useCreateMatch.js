import axios from "axios";
import { setToast } from "../../../common/store/toastSlice";
import { useDispatch } from "react-redux";
const useCreateMatch = ({ getMatches, setShow, seriesId, overs, matchName, onCreateMatch = ()=>{}}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const dispatch = useDispatch();

  let res;
  const createMatch = async (data) => {
    try{
      const paylaod = {
        name: data?.name || matchName,
        overs: data?.overs || overs,
        team1Id: data?.team1,
        team2Id: data?.team2,
        venueId: data?.venue,
        seriesId: data?.series_id || seriesId,
        startTime: data?.start_time,
        createdBy: 1,
      };
      res = await axios.post(
        process.env.REACT_APP_BACKEND + "match",
        paylaod,
        config
      );
      getMatches();
      onCreateMatch()
      setShow(false);
      }
      catch(err){
        console.log(err)
        dispatch(
          setToast({
            severity: 'error',
            summary: 'Teams should be different',
            detail: err?.response?.data?.team2Id || err?.response?.data,
            life: 3000,
          }
        ))    
      }
  };

  return {
    createMatch,
    data: res?.data,
    status: res?.status,
  };
};
export default useCreateMatch;
