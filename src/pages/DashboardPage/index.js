import styles from './styles.module.css'
import useGetDashboard from './hooks/useGetDashboard'
import SeriesContainer from './Container/Series'
import LiveMatchContainer from './Container/LiveMatch'
import UpcomingMatchContainer from './Container/UpcomingMatch'

const DashboardPage = () => {
  const { data, loading, getDashboard } = useGetDashboard()

  const {
    matches = [],
    series = []
  } = data || {}

  return (
    <>
      <div className={styles.cards}>
        <SeriesContainer
          series={series}
          loading={loading}
          getDashboard={getDashboard}
        />
        <LiveMatchContainer matches={matches} loading={loading} />
        <UpcomingMatchContainer matches={matches} loading={loading} />
      </div>
    </>
  )
}
export default DashboardPage
