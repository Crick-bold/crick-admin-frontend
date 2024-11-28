import TeamList from "../Team/List";
import SeriesList from "../Series/List";
import MatchList from "../Match/List";
import VenueList from "../Venue/List";
import PlayerList from "../Player/List";
import styles from "./styles.module.css";
import useGetDashboard from "./hooks/useGetDashboard";
import SeriesContainer from "./Container/Series";
import MatchContainer from "./Container/Match";
const DashboardPage = () => {
  const { data, loading, getDashboard } = useGetDashboard();

  const {
    matches = [],
    series = [],
    players = [],
    teams = [],
    venues = [],
  } = data || {};

  return (
    <>
      <div className={styles.cards}>
        <SeriesContainer
          series={series}
          loading={loading}
          getDashboard={getDashboard}
        />
        <MatchContainer matches={matches} loading={loading} />
      </div>
    </>
  );
};
export default DashboardPage;
