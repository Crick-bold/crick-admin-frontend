import Pill from "../../../Components/Pill";
import styles from "./styles.module.css";
import Skelton from "../../../Components/Skelton";
import Commentary from "./Commentary";
const ScoreCard = ({
  team,
  batsmanOnStrike,
  batsmanOnNonStrike,
  index,
  battingTeam,
  loadingScore,
  target,
  allBattingPlayers,
  currentInning,
  result,
}) => {
  return (
    <>
      <div className={styles.score_card}>
        {loadingScore && <Skelton width="100%" height="300px" />}
        {!loadingScore && (
          <>
            <div className={styles.name_run_over}>
              <div className={styles.team_name}>
                <div className={styles.team_logo}>
                  <img
                    src={team?.imageUrl}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div>
                  {team?.name}{" "}
                  {((battingTeam === 1 && index === 1) ||
                    (battingTeam === 2 && index === 2)) && <>*</>}
                </div>
              </div>

                <div className={styles.target}>
                  {currentInning === 3 ? result : `Target : ${team?.target || ''}`}
                </div>

              <div className={styles.run_over}>
                <div className={styles.run}>
                  {team?.runs}/{team?.wickets}
                </div>
                <div className={styles.over}>({team?.overs})</div>
              </div>
            </div>

            <div className={styles.flex}>
              <div>
                <div className={styles.player_list}>
                  <div className={styles.player_list_row}>
                    <div>
                      <b>Player</b>
                    </div>
                    <div>
                      <b>Runs</b>
                    </div>
                    <div>
                      <b>Balls</b>
                    </div>
                    <div>
                      <b>4s</b>
                    </div>
                    <div>
                      <b>6s</b>
                    </div>
                  </div>
                  {allBattingPlayers
                    ?.filter((player) => {
                      return player?.selected && player?.battingOrder < 12;
                    })
                    ?.map((player) => {
                      const playerId = player?.id;
                      return (
                        <>
                          <div
                            className={
                              parseInt(batsmanOnStrike) === parseInt(playerId)
                                ? styles.player_list_row_striker
                                : styles.player_list_row
                            }
                          >
                            <div>
                              {team?.battingPlayers[playerId]?.name ||
                                player?.name}
                              {parseInt(player.id) ===
                                parseInt(batsmanOnStrike) && <>*</>}
                            </div>
                            <div>
                              {team?.battingPlayers[playerId]?.runs || 0}
                            </div>
                            <div>
                              {team?.battingPlayers[playerId]?.balls || 0}
                            </div>
                            <div>
                              {team?.battingPlayers[playerId]?.fours || 0}
                            </div>
                            <div>
                              {team?.battingPlayers[playerId]?.sixes || 0}
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>

                <div className={styles.player_list}>
                  <div className={styles.player_list_row}>
                    <div>
                      <b>Bowler</b>
                    </div>
                    <div>
                      <b>Over</b>
                    </div>
                    <div>
                      <b>Wickets</b>
                    </div>
                    <div>
                      <b>Runs</b>
                    </div>
                    <div>
                      <b>Ecc</b>
                    </div>
                  </div>
                  {(Object.keys(team?.bowlingPlayers || {}) || []).map(
                    (player) => (
                      <>
                        <div
                          className={
                            parseInt(batsmanOnStrike) === parseInt(player)
                              ? styles.player_list_row_striker
                              : styles.player_list_row
                          }
                        >
                          <div>
                            {team?.bowlingPlayers[player].name}
                            {parseInt(player) === parseInt(batsmanOnStrike) && (
                              <>*</>
                            )}
                          </div>
                          <div>
                            {parseInt(team?.bowlingPlayers[player].balls / 6)}.
                            {parseInt(team?.bowlingPlayers[player].balls % 6)}
                          </div>
                          <div>{team?.bowlingPlayers[player].wickets}</div>
                          <div>{team?.bowlingPlayers[player].runs}</div>
                          <div>
                            {parseInt(
                              team?.bowlingPlayers[player].runs /
                                (team?.bowlingPlayers[player].balls / 6)
                            )}
                          </div>
                        </div>
                      </>
                    )
                  )}
                </div>

                <Pill content={`Extras : ${team?.extra}`} type="transparent" />
              </div>
              <div className={styles.commentary}>
                <Commentary comments={team?.thisOverBalls} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ScoreCard;
