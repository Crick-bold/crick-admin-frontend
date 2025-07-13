import { useState } from 'react'
import useStartMatch from '../hooks/useStartMatch'
import styles from './styeles.module.css'
import Pill from '../../Components/Pill'
import Button from '../../Components/Button'
import SelectTossWinnerTeam from './SelectTossWinnerTeam'
import TossWiinnerChoice from './TossWinnerChoice'

const Toss = ({ matchId, getMatchById, matchData }) => {
  const [tossWinner, setTossWinner] = useState(1)
  const [battingOrBowling, setBattingOrBowling] = useState('batting')
  const { startMatch } = useStartMatch({ matchId: matchData?.id, getMatchById, battingOrBowling, tossWinner })
  const [steps, setSteps] = useState(1)
  return <>

        {{
          1:
                    <>
                        <SelectTossWinnerTeam
                            tossWinner={tossWinner}
                            setTossWinner={setTossWinner}
                            matchData={matchData}
                            setSteps={setSteps}
                        />
                    </>,
          2:
                  <>
                      <TossWiinnerChoice
                          matchData={matchData}
                          setSteps={setSteps}
                          startMatch={startMatch}
                          tossWinnerTeamName={
                            tossWinner === 1
                              ? matchData?.team1?.name
                              : matchData?.team2?.name
                        }
                          battingOrBowling={battingOrBowling}
                          setBattingOrBowling={setBattingOrBowling}
                      />
                  </>

        }[steps]}

</>
}
export default Toss
