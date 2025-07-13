import { useForm } from 'react-hook-form'
import ScoreCard from './ScoreCard'
import style from './styles.module.css'
import control from './addplayer'
import Layout from '../../Components/Layout'
import useUpdateStrike from '../hooks/useUpdateStrike'
import { useEffect } from 'react'
import ResultOptions from './ResultOptions'
import Tabs from '../../Components/Tabs'
import useGetScore from '../hooks/useGetScore'
import Dashboard from '../Dashboard'
import Toss from '../Toss'
import Modal from '../../Components/Modal'

const Score = ({
  squad,
  antiSquad,
  squad1,
  squad2,
  battingTeam,
  getMatchById,
  matchId,
  matchData,
  loading,
  active,
  setActive
}) => {
  const {
    loading: loadingScore,
    score,
    getScoreData
  } = useGetScore({
    matchId,
    team1: matchData?.team1?.id,
    team2: matchData?.team2?.id
  })

  const controls = control({
    playerOptions1: squad?.players,
    playerOptions2: antiSquad?.players,
    squad
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()
  const { updateStrike } = useUpdateStrike({
    battingTeam,
    squadId: squad?.id,
    getMatchById,
    matchId,
    wickets: battingTeam === 1 ? score?.team1?.wickets : score?.team2?.wickets
  })

  useEffect(() => {
    setValue('batsmanOnStrike', squad?.batsmanOnStrike)
    setValue('batsmanOnNonStrike', squad?.batsmanOnNonStrike)
    setValue('bowler', squad?.bowler)
  }, [battingTeam, squad])

  return (
    <>
      {battingTeam === 0
        ? (
        <Toss
          battingTeam={battingTeam}
          matchData={matchData}
          getMatchById={getMatchById}
        />
          )
        : (
        <>
          <div className={style.dashboard}>
            {squad &&
            (!squad?.batsmanOnStrike ||
              !squad?.batsmanOnNonStrike ||
              !squad?.bowler)
              ? (
              <Modal show={true} setShow={() => {}} size="md">
                <Layout
                  register={register}
                  handleSubmit={handleSubmit}
                  onSubmit={updateStrike}
                  controls={controls}
                  errors={errors}
                  submitBtnName="Update"
                />
              </Modal>
                )
              : null}

            <Tabs
              tabs={[score?.team1?.name, score?.team2?.name]}
              active={active}
              onChange={() => setActive((active + 1) % 2)}
            ></Tabs>
            <div className={style.scoreCardBox}>
              <ScoreCard
                team={active === 0 ? score?.team1 : score?.team2}
                batsmanOnStrike={
                  active === 0
                    ? squad1?.batsmanOnStrike
                    : squad2?.batsmanOnStrike
                }
                batsmanOnNonStrike={
                  active === 0
                    ? squad1?.batsmanOnNonStrike
                    : squad2?.batsmanOnNonStrike
                }
                bowler={active === 0 ? squad1?.bowler : squad2?.bowler}
                currentInning={matchData?.currentInning}
                result={score?.result}
                index={active}
                battingTeam={battingTeam}
                loadingScore={loadingScore}
                allBattingPlayers={
                  active === 0 ? squad1?.players : squad2?.players
                }
              />
            </div>

            {!loading &&
              battingTeam === active + 1 &&
              ![0, 3]?.includes(matchData?.currentInning) && (
                <div className={style.entry_box}>
                  <ResultOptions
                    score={score}
                    data={matchData}
                    loading={loading}
                    battingTeam={battingTeam}
                    getScoreData={getScoreData}
                    getMatchById={getMatchById}
                    antiSquad={battingTeam === 1 ? squad2 : squad1}
                    batsmanOnStrike={
                      battingTeam === 1
                        ? matchData?.squad1?.batsmanOnStrike
                        : matchData?.squad2?.batsmanOnStrike
                    }
                    batsmanOnNonStrike={
                      battingTeam === 1
                        ? matchData?.squad1?.batsmanOnNonStrike
                        : matchData?.squad2?.batsmanOnNonStrike
                    }
                    bowler={
                      battingTeam === 1
                        ? matchData?.squad1?.bowler
                        : matchData?.squad2?.bowler
                    }
                    squad={battingTeam === 1 ? squad1 : squad2}
                  />
                </div>
            )}
          </div>
          <Dashboard score={score} battingTeam={battingTeam} active={active} />
        </>
          )}
    </>
  )
}

export default Score
