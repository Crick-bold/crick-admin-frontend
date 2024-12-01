import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import moment from "moment";
import { useEffect, useState } from "react";
import { isLiveMatch } from "../../../common";
const MatchCard = ({ loading = true, match = {} }) => {
  const [matchStatus, setMatchStatus] = useState("");

  useEffect(() => {
    if (isLiveMatch(match?.currentInning)) setMatchStatus("Live");
    else if (match.result) setMatchStatus(match.result);
    else setMatchStatus(moment(match?.start_time).format("L"));
  }, [match]);

  return (
    <>
      <Link to={"/match/" + match?.id} className={styles.match_card}>
        <div className={styles.header}>
          <div className={styles.series_name}>{match?.series?.name}</div>
          <div
            className={
              matchStatus === "Live"
                ? `color-highlight ${styles.match_status}`
                : styles.match_status
            }
          >
            {matchStatus}
          </div>
        </div>

        <div>
          <div className={styles.match_card_team_name}>
            <div>
              <img
                src={match?.team1?.imageUrl}
                style={{ width: "20px", height: "20px", borderRadius: "50%" }}
              />
            </div>
            <div>{match?.team1?.name}</div>
          </div>
          <div className={styles.match_card_team_score}>
            {match?.currentInning
              ? `${match?.team1?.runs}-${match?.team1?.wickets} (${match?.team1?.overs})`
              : "Yet to play"}
          </div>
        </div>
        <div>
          <div className={styles.match_card_team_name}>
            <div>
              <img
                src={match?.team2?.imageUrl}
                style={{ width: "20px", height: "20px", borderRadius: "50%" }}
              />
            </div>
            <div>{match?.team2?.name}</div>
          </div>
          <div className={styles.match_card_team_score}>
            {" "}
            {match?.currentInning
              ? `${match?.team2?.runs}-${match?.team2?.wickets} (${match?.team2?.overs})`
              : "Yet to play"}
          </div>
        </div>
      </Link>
    </>
  );
};
export default MatchCard;
