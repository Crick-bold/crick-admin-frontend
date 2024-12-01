import { Link } from "react-router-dom";
import MatchCard from "../../../Match/MatchCard";
import Skelton from "../../../Components/Skelton";
import { isLiveMatch } from "../../../../common";

const LiveMatchContainer = ({ matches, loading }) => {
  return (
    <div className="bg-color-primary w-100 border-radius-4">
      <div className="text-16 p-8 bg-color-secondary p-16">Live Match</div>
      <div className="flex my-8 flex-wrap">
        {loading ? (
          <Skelton width="100%" height="200px" />
        ) : (
          matches.map((match) => {
            if (isLiveMatch(match.currentInning))
              return <MatchCard match={match} />;
          })
        )}
      </div>
    </div>
  );
};
export default LiveMatchContainer;
