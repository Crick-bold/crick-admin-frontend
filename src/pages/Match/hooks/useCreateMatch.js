import axios from "axios";
const useCreateMatch = ({ getMatches, setShow }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  let res;
  const createMatch = async (data) => {
    const paylaod = {
      name: data?.name,
      overs: data?.overs,
      team1Id: data?.team1,
      team2Id: data?.team2,
      venueId: data?.venue,
      seriesId: data?.series_id,
      startTime: data?.start_time,
      createdBy: 1,
    };
    res = await axios.post(
      process.env.REACT_APP_BACKEND + "match",
      paylaod,
      config
    );
    getMatches();
    setShow(false);
  };

  return {
    createMatch,
    data: res?.data,
    status: res?.status,
  };
};
export default useCreateMatch;
