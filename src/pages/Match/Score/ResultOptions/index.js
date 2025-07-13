import { useState } from 'react'
import useInsertBall from '../../hooks/useInsertBall'
import styles from './styles.module.css'
import { ToggleButton } from 'primereact/togglebutton'
import { InputText } from 'primereact/inputtext'
import Modal from '../../../Components/Modal'
import Button from '../../../Components/Button'

import { OUT_OPTIONS, RESULT_OPTIONS, SHOT_OPTIONS } from './utils'
import PlayerSelect from '../../../Components/PlayerSelect'
import { useDispatch } from 'react-redux'
import { setToast } from '../../../../common/store/toastSlice'

const ResultOptions = ({
  score,
  data,
  loading,
  battingTeam,
  getScoreData,
  getMatchById,
  squad,
  antiSquad,
  batsmanOnStrike,
  batsmanOnNonStrike,
  bowler
}) => {
  const [playedShot, setPlayedShot] = useState(null)
  const [result, setResult] = useState(25)
  const [outType, setOutType] = useState(null)
  const [isWide, setIsWide] = useState(false)
  const [isNoBall, setIsNoBall] = useState(false)
  const [validRuns, setValidRuns] = useState()
  const [byeRuns, setByeRuns] = useState()
  const [legByeRuns, setLegByeRuns] = useState()
  const [penatlyRuns, setPenaltyRuns] = useState()
  const [helpingPlayer, setHelpingPlayer] = useState()
  const [runOutPlayer, setRunOutPlayer] = useState()
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const { insertBall, loading: loadingIns } = useInsertBall({
    matchLoading: loading,
    matchData: data,
    ballOftheMatch:
      battingTeam === 1 ? score?.team1?.totalBalls : score?.team2?.totalBalls,
    batPlayerId:
      battingTeam === 1
        ? data?.squad1?.batsmanOnStrike
        : data?.squad2?.batsmanOnStrike,
    batsmanOnNonStrike:
      battingTeam === 1
        ? data?.squad1?.batsmanOnNonStrike
        : data?.squad2?.batsmanOnNonStrike,
    ballPlayerId:
      battingTeam === 1 ? data?.squad1?.bowler : data?.squad2?.bowler,
    squadId: battingTeam === 1 ? data?.squad1?.id : data?.squad2?.id,
    legalBalls:
      battingTeam === 1 ? score?.team1?.legalBalls : score?.team2?.legalBalls,
    battingTeam,
    getScoreData,
    getMatchById,
    autoLoad: false,
    outType,
    isNoBall,
    isWide,
    byeRuns,
    legByeRuns,
    penatlyRuns,
    validRuns,
    playedShot,
    runOutPlayer,
    helpingPlayer
  })

  const handleResultOptionClick = (value) => {
    if (!batsmanOnNonStrike || !batsmanOnNonStrike || !bowler) {
      dispatch(
        setToast({
          severity: 'error',
          summary: 'No Batsman/ Bowler Selected',
          detail: 'Please select batsman and bowler.',
          life: 3000
        })
      )
      return
    }
    setShow(true)
    if (value === 12) {
      setIsNoBall(true)
    } else {
      setIsNoBall(false)
    }

    console.log(value, 'balll')
    if (value === 11) {
      setIsWide(true)
    } else {
      setIsWide(false)
    }
    if (value === 25) {
      setOutType('bold')
    } else {
      setOutType('')
    }
    setResult(value)
  }

  const handleHelpingPlayer = (e) => {
    setHelpingPlayer(e.target.value)
  }

  const handleRunOutPlayer = (e) => {
    setRunOutPlayer(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.result_options}>
          {!loadingIns &&
            RESULT_OPTIONS?.map((option) => (
              <button
                key={option?.value}
                className={styles.result_option}
                style={{ backgroundColor: option?.color }}
                // onClick={() => setResult(option?.value)}
                onClick={() => handleResultOptionClick(option.value)}
              >
                {option?.label}
              </button>
            ))}
        </div>

        <Modal show={show} setShow={setShow} size="md">
          {[25].includes(result) && (
            <>
              <div className="text-16 color-theme">Out Type</div>
              <div className={styles.shot_container}>
                {OUT_OPTIONS.map((outObject, index) => (
                  <div
                    className={
                      outObject.value === outType
                        ? styles.selected_child
                        : styles.child
                    }
                    onClick={() => {
                      setOutType(outObject?.value)
                    }}
                    key={index}
                  >
                    {outObject?.label}
                  </div>
                ))}
              </div>
              {outType === 'run_out'
                ? (
                <>
                  <div className="text-16 my-16 color-theme">
                    Which player Is out?
                  </div>

                  <PlayerSelect
                    options={[
                      squad.players.find(
                        (player) => player.id === batsmanOnStrike
                      ),
                      squad.players.find(
                        (player) => player.id === batsmanOnNonStrike
                      )
                    ]}
                    onChange={handleRunOutPlayer}
                  />
                </>
                  )
                : null}
              {['stumps', 'catch_out', 'run_out']?.includes(outType)
                ? (
                <>
                  <div className="text-16 my-16 color-theme">
                    {
                      {
                        catch_out: 'Catch out by',
                        run_out: 'Run out by',
                        stumps: 'Stumped by'
                      }[outType]
                    }
                  </div>
                  <PlayerSelect
                    options={antiSquad.players}
                    onChange={handleHelpingPlayer}
                  />
                </>
                  )
                : null}

              <div className="text-16 my-16 color-theme">
                Wide / No ball / Valid Runs
              </div>
              <div className="flex gap-10">
                <ToggleButton
                  checked={isWide}
                  onLabel="Wide"
                  offLabel="Wide"
                  onChange={(e) => {
                    setIsWide(e.value)
                    setIsNoBall(false)
                  }}
                />
                <ToggleButton
                  checked={isNoBall}
                  onLabel="No Ball"
                  offLabel="No Ball"
                  onChange={(e) => {
                    setIsNoBall(e.value)
                    setIsWide(false)
                  }}
                />
                <InputText
                  type="text"
                  value={validRuns}
                  placeholder="Valid Runs (Run by Bat)"
                  onChange={(e) => setValidRuns(e.target.value)}
                />
              </div>
            </>
          )}
          {[12, 13].includes(result) && (
            <>
              <div className="text-16 my-16 color-theme">Valid Runs</div>

              <InputText
                type="number"
                value={validRuns}
                placeholder="Valid Runs"
                onChange={(e) => setValidRuns(e.target.value)}
              />
            </>
          )}
          {[0, 1, 2, 3, 4, 6].includes(result) && (
            <>
              <div className="text-16 my-16 color-theme">Shot Type</div>
              <div className={styles.shot_container}>
                {SHOT_OPTIONS?.[result]?.map((shot, index) => (
                  <div
                    className={
                      shot.value === playedShot
                        ? styles.selected_child
                        : styles.child
                    }
                    onClick={async () => {
                      setPlayedShot(shot?.value)
                      // await insertBall({ result, playedShot: shot?.value });
                    }}
                    key={index}
                  >
                    {shot?.label}
                  </div>
                ))}
              </div>
            </>
          )}

          {[11, 12, 14, 15, 25].includes(result)
            ? (
            <>
              <div className="text-16 my-16 color-theme">Extra Runs</div>
              <div className="flex gap-10">
                <InputText
                  type="number"
                  value={byeRuns}
                  placeholder="BYE Runs"
                  onChange={(e) => {
                    setByeRuns(e.target.value)
                    setLegByeRuns('')
                  }}
                />
                <InputText
                  type="number"
                  value={legByeRuns}
                  placeholder="LEG BYE Runs"
                  onChange={(e) => {
                    setLegByeRuns(e.target.value)
                    setByeRuns('')
                  }}
                />
              </div>
            </>
              )
            : null}
          <div className="my-8">
            <Button
              onClick={() => {
                insertBall({
                  result,
                  playedShot: null
                })
              }}
              value="Save"
            />
          </div>
        </Modal>
      </div>
    </>
  )
}
export default ResultOptions
