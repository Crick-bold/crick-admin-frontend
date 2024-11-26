import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import moment from "moment";
const MatchCard = ({ loading = true, match = {} }) => {
  return (
    <>
      <Link to={"/match/" + match?.id} className={styles.match_card}>
        <div className={styles.header}>
          <div className={styles.series_name}>{match?.series?.name}</div>
          <div className={styles.match_status}>
            {[1, 2, -1, -2].includes(match?.currentInning) ? "Live" : null}
          </div>
          {
            match?.result
            ?
              match.result
            :
            <>
              {moment(match?.start_time).format('L')}
            </>
          }

          <div>
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
