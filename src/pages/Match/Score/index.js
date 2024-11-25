import { useForm } from "react-hook-form";
import ScoreCard from "./ScoreCard";
import style from "./styles.module.css";
import control from "./addplayer";
import Layout from "../../Components/Layout";
import useUpdateStrike from "../hooks/useUpdateStrike";
import { useEffect, useState } from "react";
import Pill from "../../Components/Pill";
import Button from "../../Components/Button";
import useStartMatch from "../hooks/useStartMatch";
import ResultOptions from "./ResultOptions";
import Tabs from "../../Components/Tabs";
import useGetScore from "../hooks/useGetScore";
import Dashboard from "../Dashboard";
import Toss from "../Toss";
import { act } from "react";

const Score = ({
  squad1,
  squad2,
  battingTeam,
  getMatchById,
  matchId,
  matchData,
  loading,
  active,
  setActive,
}) => {
  const {
    loading: loadingScore,
    score,
    getScoreData,
  } = useGetScore({
    matchId,
    team1: matchData?.team1?.id,
    team2: matchData?.team2?.id,
  });

  const controls = control({
    playerOptions1: battingTeam === 1 ? squad1?.players : squad2?.players,
    playerOptions2: battingTeam === 1 ? squad2?.players : squad1?.players,
    squad: battingTeam === 1 ? squad1 : squad2,
  });


  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { updateStrike } = useUpdateStrike({
    battingTeam,
    squadId: battingTeam === 1 ? squad1?.id : squad2?.id,
    getMatchById,
    matchId,
    wickets: battingTeam === 1 ? score?.team1?.wickets : score?.team2?.wickets,
  });
  console.log(squad1, squad2, "sss");
  useEffect(() => {
    setValue(
      "batsmanOnStrike",
      battingTeam === 1 ? squad1?.batsmanOnStrike : squad2?.batsmanOnStrike
    );
    setValue(
      "batsmanOnNonStrike",
      battingTeam === 1
        ? squad1?.batsmanOnNonStrike
        : squad2?.batsmanOnNonStrike
    );
    setValue("bowler", battingTeam === 1 ? squad1?.bowler : squad2?.bowler);
  }, [battingTeam, squad1, squad2]);

  return (
    <>

       {battingTeam === 0
       ?
       <Toss battingTeam={battingTeam} matchData={matchData} getMatchById={getMatchById}/>
        :
       
        <>
      <div className={style.dashboard}>
        <Tabs
          tabs={[score?.team1?.name, score?.team2?.name]}
          active={active}
          onChange={() => setActive((active + 1) % 2)}
        ></Tabs>
        <div className={style.scoreCardBox}>
          <ScoreCard
            team={active === 0 ? score?.team1 : score?.team2}
            batsmanOnStrike={
              active === 0 ? squad1?.batsmanOnStrike : squad2?.batsmanOnStrike
            }
            batsmanOnNonStrike={
              active === 0
                ? squad1?.batsmanOnNonStrike
                : squad2?.batsmanOnNonStrike
            }
            currentInning={matchData?.currentInning}
            result={score?.result}
            index={active}
            battingTeam={battingTeam}
            loadingScore={loadingScore}
            allBattingPlayers={active === 0 ? squad1?.players : squad2?.players}
          />
        </div>
        
        {!loading && battingTeam === active + 1 && ![0,3]?.includes(matchData?.currentInning) && (
          <div className={style.entry_box}>
            <Layout
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={updateStrike}
              controls={controls}
              errors={errors}
            />
            <ResultOptions
              score={score}
              data={matchData}
              loading={loading}
              battingTeam={battingTeam}
              getScoreData={getScoreData}
              getMatchById={getMatchById}
            />
          </div>
        )}
      </div>
      <Dashboard score={score} battingTeam={battingTeam} active={active} />
      </>
      }
    </>
  );
};

export default Score;
