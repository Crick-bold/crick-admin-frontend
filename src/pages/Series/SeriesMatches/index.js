import { useState } from 'react'
import MatchCard from '../../Match/MatchCard'
import styles from '../styles.module.css'
import style from './styles.module.css'
import AddMatchLayout from '../../Match/List/AddMatchLayout'

const SeriesMatches = ({ loading, seriesData, getSeries }) => {
  const [show, setShow] = useState(false)

  return <>
        <div className={style.parent}>
            {show
              ? (
                    <div>
                        <AddMatchLayout
                            onCreateMatch={getSeries}
                            seriesData={seriesData}
                            setShow={setShow}

                        />
                        </div>
                )
              : <><div className={styles.matchStatus}>
                    <div className={styles.matchStatusHeader}>Live Match</div>
                    <div className={styles.matchContainer}>
                        {!loading &&
                            seriesData?.liveMatches?.length === 0
                          ? <div className={styles.noMatch}> No live match available.</div>
                          : seriesData?.liveMatches?.map((match, index) => (
                                <MatchCard match={match} key={index} />
                          ))}
                    </div>
                </div><div className={styles.matchStatus}>
                        <div className={styles.matchStatusHeader}>Upcoming Matches
                            <div className={style.create_new_div}>
                                Want to create new?
                                <button onClick={() => setShow(true)}>Create New</button>
                            </div>
                        </div>

                        <div className={styles.matchContainer}>
                            {!loading &&
                                seriesData?.upcomingMatches?.length === 0
                              ? <div className={styles.noMatch}>No upcoming match available.</div>
                              : seriesData?.upcomingMatches?.map((match, index) => (
                                    <MatchCard match={match} key={index} />
                              ))}
                        </div>
                    </div><div className={styles.matchStatus}>
                        <div className={styles.matchStatusHeader}>Past Matches</div>
                        <div className={styles.matchContainer}>
                            {!loading &&
                                seriesData?.pastMatches?.length === 0
                              ? <div className={styles.noMatch}>No past matche available.</div>
                              : seriesData?.pastMatches?.map((match, index) => (
                                    <MatchCard match={match} key={index} />
                              ))}
                        </div>
                    </div></>
    }
    </div>

        </>
}
export default SeriesMatches
