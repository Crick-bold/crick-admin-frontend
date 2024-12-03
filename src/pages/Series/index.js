import { Link, useParams } from "react-router-dom";
import useGetSeries from "./hooks/useGetSeries";
import styles from "./styles.module.css";
import Tabs from "../Components/Tabs";
import { useState } from "react";
import MatchCard from "../Match/MatchCard";
import Table from "../Components/Table";
import {
  batsmanTableColumns,
  bowlerTableColumns,
} from "./utlis/top-perfromers-columns";

const Series = () => {
  const { id: seriesId } = useParams();
    const [active, setActive] = useState(0);
    const [createMatchIndex, setCreateMatchIndex] = useState(0);
  const { loading, data: seriesData } = useGetSeries({ seriesId });
    const createNewMatchHandler = () => {
        let count = active + 5;
        setActive(count);
        setCreateMatchIndex(1);
    }
    
    return (
    <>
      <div className={styles.series_heading}>
        <img src={seriesData?.imageUrl} className={styles.series_image} />
        <div>{seriesData?.name}</div>
      </div>
      <Tabs
        tabs={["Matches", "Top Performers", "News"]}
        active={active}
        onChange={(index) => setActive(index)}
      />
      {active === 0 && (
        <div>
          <div className={styles.matchStatus}>
            <div className={styles.matchStatusHeader}>Live Match</div>
            <div className={styles.matchContainer}>
              {!loading &&
                seriesData?.liveMatches?.length===0?
                <div className={styles.noMatch}> No Live match</div>
                :
                seriesData?.liveMatches?.map((match, index) => (
                  <MatchCard match={match} key={index} />
                ))}
            </div>
          </div>
          <div className={styles.matchStatus}>
            <div className={styles.matchStatusHeader}>Upcoming Matches</div>
                        <div className={styles.matchContainer}>
                             {createMatchIndex ===1?( <div>ranjeet</div> ): ( <div>no match created here</div>)}  
              {!loading &&
                              seriesData?.upcomingMatches?.length === 0 ?
                              
                                (<><div className={styles.noMatch}>No upcoming Matches</div>
                                    <Link to="/series/10">
                                  <button onClick={createNewMatchHandler}>create new Matches</button>
                                    </Link>
                                    
                                </>
                         
                )
                :
                seriesData?.upcomingMatches?.map((match, index) => (
                  <MatchCard match={match} key={index} />
                ))}
            </div>
          </div>
          <div className={styles.matchStatus}>
            <div className={styles.matchStatusHeader}>Past Matches</div>
            <div className={styles.matchContainer}>
              {!loading &&
                seriesData?.pastMatches?.length===0?
                <div className={styles.noMatch} >No past matches to display</div>
                :
                seriesData?.pastMatches?.map((match, index) => (
                  <MatchCard match={match} key={index} />
                ))}
            </div>
          </div>
        </div>
      )}
      {active === 1 && (
        <div className={styles.topPerformerContainer}>
          <Table
            columns={batsmanTableColumns}
            data={seriesData?.topPerformers?.batsmans}
          />
          <Table
            columns={bowlerTableColumns}
            data={seriesData?.topPerformers?.bowlers}
          />
        </div>
      )}
    </>
  );
};
export default Series;
