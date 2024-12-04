import { useParams } from "react-router-dom";
import useGetSeries from "./hooks/useGetSeries";
import styles from "./styles.module.css";
import Tabs from "../Components/Tabs";
import { useState } from "react";
import MatchCard from "../Match/MatchCard";
import Table from "../Components/Table";
import {
  batsmanTableColumns,
  bowlerTableColumns,
  top4sPlayers,
  top6sPlayers,
} from "./utlis/top-perfromers-columns";
import SeriesMatches from "./SeriesMatches";

const Series = () => {
  const { id: seriesId } = useParams();
  const [active, setActive] = useState(0);
  const { loading, data: seriesData, getSeries } = useGetSeries({ seriesId });

  return (
    <>
      <div className={styles.series_heading}>
        <img src={seriesData?.imageUrl} className={styles.series_image} />
        <div>{seriesData?.name}</div>
        <div className="text-16 color-highlight">
          ({seriesData?.overs} overs)
        </div>
      </div>
      <Tabs
        tabs={["Matches", "Leaderboard", "News"]}
        active={active}
        onChange={(index) => setActive(index)}
      />
      {active === 0 && (
        <SeriesMatches
          loading={loading}
          seriesData={seriesData}
          getSeries={getSeries}
        />
      )}
      {active === 1 && (
        <div className={styles.topPerformerContainer}>
          <div>
            <div className={styles.title}>Runs</div>
            <Table
              columns={batsmanTableColumns}
              data={seriesData?.topPerformers?.batsmen}
            />
            <div className={styles.title}>Wickets</div>
            <Table
              columns={bowlerTableColumns}
              data={seriesData?.topPerformers?.bowlers}
            />
          </div>
          <div>
            <div className={styles.title}>Most 4s</div>
            <Table
              columns={top4sPlayers}
              data={seriesData?.topPerformers?.top4sBatsmen}
            />
            <div className={styles.title}>Most 6s</div>
            <Table
              columns={top6sPlayers}
              data={seriesData?.topPerformers?.top6sBatsmen}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default Series;
