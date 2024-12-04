import { Link } from "react-router-dom";
import MatchCard from "../../../Match/MatchCard";
import Skelton from "../../../Components/Skelton";
import { isLiveMatch } from "../../../../common";
import globalStyle from "../../../Venue/List/styles.module.css";

const LiveMatchContainer = ({ matches, loading }) => {
  const liveMatchList = matches?.filter((match) => {
    return isLiveMatch(match.currentInning);
  });

  return (
    <div className="bg-color-primary w-100 border-radius-4">
      <div className="text-16 p-8 bg-color-secondary p-16">Live Match</div>
      <div className="flex my-8 flex-wrap">
        {loading ? (
          <Skelton width="100%" height="250px" />
        ) : liveMatchList.length === 0 ? (
          <div className={globalStyle.no_data_found}>No Data Found</div>
        ) : (
          liveMatchList.map((match) => <MatchCard match={match} />)
        )}
      </div>
    </div>
  );
};
export default LiveMatchContainer;
