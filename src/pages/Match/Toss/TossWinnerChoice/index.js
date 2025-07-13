import Button from '../../../Components/Button'
import styles from '../styeles.module.css'
import batImageIcon from '../../../Components/Icons/bat.png'
import ballImageIcon from '../../../Components/Icons/ball.png'

const TossWiinnerChoice = ({
  battingOrBowling,
  setBattingOrBowling,
  setSteps,
  tossWinnerTeamName,
  startMatch
}) => {
  return (
    <>
      <div className="center-div">
        <div className="flex justify-between w-70 align-center">
          <div
            className={
              battingOrBowling === 'batting'
                ? styles.selected_match_card
                : styles.match_card
            }
            onClick={() => setBattingOrBowling('batting')}
          >
            <div className={styles.match_card_image}>
              <img src={batImageIcon} className="img" />
            </div>
            <div className="text-center p-8 text-16">Batting</div>
          </div>
          <div className="p-8 text-24 text-center">
            {tossWinnerTeamName} won the toss and choosen
          </div>
          <div
            className={
              battingOrBowling === 'bowling'
                ? styles.selected_match_card
                : styles.match_card
            }
            onClick={() => setBattingOrBowling('bowling')}
          >
            <div className={styles.match_card_image}>
              <img src={ballImageIcon} className="img" />
            </div>
            <div className="text-center p-8 text-16">Bowling</div>
          </div>
        </div>
        <div className="flex justify-end w-70 py-16">
          <Button
            value="Start Match"
            onClick={() => {
              setSteps(3), startMatch()
            }}
          />
        </div>
      </div>
    </>
  )
}
export default TossWiinnerChoice
