import { useParams } from 'react-router-dom'
import useGetSeries from './hooks/useGetSeries'
import styles from './styles.module.css'
import Tabs from '../Components/Tabs'
import { useState } from 'react'
import MatchCard from '../Match/MatchCard'
import Table from '../Components/Table'
import { batsmanTableColumns, battingAverageColumns, bestBowlingColumns, bowlerTableColumns, bowlingAverageColumns, highestRunsColumns, mostfiftiesColumns, mostHundredColumns } from './utlis/top-perfromers-columns'
import { battingAverage, bestBowlingFigures, bowlingAverage, highestRuns, mostfifties, mostHundred } from './utlis/Dummy/HighestRuns'

const Series = () => {
  const { id: seriesId } = useParams()
  const [active, setActive] = useState(0)
  const { loading, data: seriesData } = useGetSeries({ seriesId })

  return (<>
        <div className={styles.series_heading}>
            <img src = {seriesData?.image_url} className={styles.series_image}/>
            <div>
                {seriesData?.name}
            </div>
        </div>
        <Tabs tabs={['Matches', 'Top Performers', 'News']} active={active} onChange={(index) => setActive((index))}/>
                    { active === 0 &&
                        <div className={styles.matchContainer}>
                        {
                        !loading && seriesData?.matches?.upcoming?.map((match, index) => (
                            <MatchCard match={match} key={index}/>
                        ))}
                        {
                        !loading && seriesData?.matches?.live?.map((match, index) => (
                            <MatchCard match={match} key={index}/>
                        ))}
                        {
                        !loading && seriesData?.matches?.past?.map((match, index) => (
                            <MatchCard match={match} key={index}/>
                        ))}

                        </div>
                    }
                    { active === 1 &&
          <div className={styles.topPerformerContainer}>
              <div >
                  <div className={styles.title}>Runs</div>
                        <Table

                            columns={batsmanTableColumns}
                            data={seriesData?.topPerformers?.batsmans}
                  />
                  </div>
          <div>
             <div className={styles.title}>Wicket</div>
                        <Table
                            columns={bowlerTableColumns}
                            data={seriesData?.topPerformers?.bowlers}
                  />
              </div>
              <div>
              <div className={styles.title}>HighestRuns</div>
                        <Table
                        columns={highestRunsColumns}
                        data={highestRuns}
                  />
              </div>
              <div>
              <div className={styles.title}>BestBowlingFigures</div>
              <Table
                  columns={bestBowlingColumns}
                  data={bestBowlingFigures}
                  />
              </div>
              <div>
              <div className={styles.title}>BattingAverage</div>
               <Table
                  columns={battingAverageColumns}
                  data={battingAverage}
                  />
              </div>
              <div>
              <div className={styles.title}>BowlingAverage</div>
                <Table
                  columns={bowlingAverageColumns}
                  data={bowlingAverage}
                  />
              </div>
              <div>
              <div className={styles.title}>MostHundred</div>
               <Table
                  columns={mostHundredColumns}
                  data={mostHundred}
                  />
              </div>
              <div>
              <div className={styles.title}>MostFifties</div>
               <Table
                  columns={mostfiftiesColumns}
                  data={mostfifties}
                  />
                  </div>
                        </div>
                    }

    </>)
}
export default Series
