import { Link } from "react-router-dom";
import MatchCard from "../../../Match/MatchCard";
import Skelton from "../../../Components/Skelton";

const MatchContainer = ({ matches, loading }) => {
  return (
    <div className="bg-color-secondary w-100 p-16 border-radius-4">
      <div className="text-24 p-8">Live Match</div>
      <div className="flex my-8 flex-wrap">
        {loading ? (
          <Skelton width="100%" height="200px" />
        ) : (
          matches.map((match) => {
            if ([1, 2, -1, -2].includes(match?.currentInning))
              return <MatchCard match={match} />;
          })
        )}
      </div>
    </div>
  );
};
export default MatchContainer;
