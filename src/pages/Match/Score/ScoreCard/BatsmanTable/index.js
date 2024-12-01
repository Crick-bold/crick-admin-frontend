import styles from "../styles.module.css";
const BatsmanTable = ({ allBattingPlayers, batsmanOnStrike, team }) => {
  console.log(allBattingPlayers);
  return (
    <>
      <table className={styles.player_list} style={{ width: "100%" }}>
        <tr className={styles.player_list_row}>
          <th>
            <b>Name</b>
          </th>
          <th>
            <b>R</b>
          </th>
          <th>
            <b>B</b>
          </th>
          <th>
            <b>4s</b>
          </th>
          <th>
            <b>6s</b>
          </th>
        </tr>
        {allBattingPlayers
          ?.filter((player) => {
            return player?.selected && player?.battingOrder < 12;
          })
          ?.map((player) => {
            const playerId = player?.id;
            return (
              <>
                <tr
                  className={
                    parseInt(batsmanOnStrike) === parseInt(playerId)
                      ? styles.player_list_row_striker
                      : styles.player_list_row
                  }
                >
                  <td>
                    {team?.battingPlayers[playerId]?.name || player?.name}
                    {parseInt(player.id) === parseInt(batsmanOnStrike) && (
                      <>*</>
                    )}
                  </td>
                  <td>{team?.battingPlayers[playerId]?.runs || 0}</td>
                  <td>{team?.battingPlayers[playerId]?.balls || 0}</td>

                  <td>{team?.battingPlayers[playerId]?.fours || 0}</td>
                  <td>{team?.battingPlayers[playerId]?.sixes || 0}</td>
                </tr>
              </>
            );
          })}
      </table>
    </>
  );
};

export default BatsmanTable;
