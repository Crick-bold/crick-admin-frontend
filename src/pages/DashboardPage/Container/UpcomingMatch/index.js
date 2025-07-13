import MatchCard from '../../../Match/MatchCard'
import Skelton from '../../../Components/Skelton'
import { isUpcomingMatch } from '../../../../common'
import globalStyle from '../../../Venue/List/styles.module.css'

const UpcomingMatchContainer = ({ matches, loading }) => {
  const upcomingMatchList = matches?.filter((match) => {
    return isUpcomingMatch(match.currentInning)
  })
  return (
    <div className="bg-color-primary w-100 border-radius-4">
      <div className="text-16 p-8 bg-color-secondary p-16">
        Upcoming Matches
      </div>
      <div className="flex my-8 flex-wrap">
        {loading
          ? (
          <Skelton width="100%" height="250px" />
            )
          : upcomingMatchList.length === 0
            ? (
          <div className={globalStyle.no_data_found}>No Data Found</div>
              )
            : (
                upcomingMatchList.map((match) => <MatchCard key={match.id} match={match} />)
              )}
      </div>
    </div>
  )
}
export default UpcomingMatchContainer
