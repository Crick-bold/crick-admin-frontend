import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import useGetMatchById from './hooks/useGetMatchById'
import Score from './Score'

import { useParams } from 'react-router-dom'
import ListSquad from './ListSquad'

const MatchPage = () => {
  const { id: matchId } = useParams()
  const { loading, data, getMatchById } = useGetMatchById(matchId)
  const [battingTeam, setBattingTeam] = useState(data?.currentInning)

  const [active, setActive] = useState(
    parseInt(data?.currentInning) <= 0 ? 0 : 1
  )

  useEffect(() => {
    const battingTeam = {
      0: 0,
      '-1': 1,
      1: 2,
      '-2': 1,
      2: 2,
      3: 3
    }[data?.currentInning]
    setBattingTeam(battingTeam)
    if (battingTeam === 3) setActive(0)
    else setActive(battingTeam - 1)
  }, [data])

  return (
    <>
      <div className={styles.container}>
        {data?.isSquadFinal === 0 && (
          <>
            <ListSquad
              squad1={{ ...data?.squad1, teamName: data?.team1?.name }}
              squad2={{ ...data?.squad2, teamName: data?.team2?.name }}
              matchId={matchId}
              getMatchById={getMatchById}
              isSquadFinal={data?.isSquadFinal}
            />
          </>
        )}
        {data?.isSquadFinal !== 0 && (
          <>
            <Score
              squad1={data?.squad1}
              squad2={data?.squad2}
              squad={battingTeam === 1 ? data?.squad1 : data?.squad2}
              antiSquad={battingTeam === 1 ? data?.squad2 : data?.squad1}
              battingTeam={battingTeam}
              getMatchById={getMatchById}
              matchId={matchId}
              matchData={data}
              loading={loading}
              active={active}
              setActive={setActive}
            />
          </>
        )}
      </div>
    </>
  )
}

export default MatchPage
