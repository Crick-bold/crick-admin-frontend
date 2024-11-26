
import PlayerItem from "./PlayerItem";
import styles from "./styles.module.css";
// import OpenRegistraiton from './OpenRegistration'
import { useState } from "react";
import useListPlayers from "../../../Player/hooks/useListPlayers";
import Button from "../../../Components/Button";
import useBulkUploadPlayers from "../../../Squad/hooks/useBulkUploadPlayers";
import PrimeMultiSelect from "../../../Components/PrimeReact/MultiSelect";
        
const SquadItem = ({
  squad,
  matchId,
  getMatchById,
  isSquadFinal,
  antiSquad,
}) => {

  const [players, setPlayers] = useState([]);
  const {data: playersOptions} = useListPlayers({});
  const { uploadPlayersInSquad, loading} = useBulkUploadPlayers({squadId:squad.id,players, getMatchById, matchId, setPlayers})


  return (
    <>
      <div className={styles.squad}>
        {
          squad?.players?.length === 0 ?
          <div className="p-8">
            {players?.length || "No"} Players selected               
          </div>
          : null
        }

      <div className={styles.flex}>
          {squad?.players?.map((player, index) => (
            <PlayerItem
              key={index}
              index={index + 1}
              player={player}
              squadId={squad?.id}
              matchId={matchId}
              getMatchById={getMatchById}
              isSquadFinal={isSquadFinal}
            />
          ))}
        </div>
        {!squad?.players?.length&& (
          <>
          <PrimeMultiSelect options={playersOptions} values={players} setValues={setPlayers} placeholder={"Select Players"} />
          &nbsp;&nbsp;
          <Button value="Update Squad" onClick={uploadPlayersInSquad} disabled={loading}/>
        </>
         
)}
      </div>
    </>
  );
};

export default SquadItem;
