import Button from "../../../Components/Button";
import styles from "../styeles.module.css";

const SelectTossWinnerTeam = ({
  tossWinner,
  setTossWinner,
  matchData,
  setSteps,
}) => {
  return (
    <>
      <div className="center-div">
        <div className="flex justify-between w-70 align-center">
          <div
            className={
              tossWinner === 1 ? styles.selected_match_card : styles.match_card
            }
            onClick={() => setTossWinner(1)}
          >
            <div className={styles.match_card_image}>
              <img src={matchData?.team1?.imageUrl} className="img" />
            </div>
            <div className="text-center p-8 text-16">
              {matchData?.team1.name}
            </div>
          </div>
          <div class="p-8 text-24">Who won the toss?</div>
          <div
            className={
              tossWinner === 2 ? styles.selected_match_card : styles.match_card
            }
            onClick={() => setTossWinner(2)}
          >
            <div className={styles.match_card_image}>
              <img src={matchData?.team2?.imageUrl} className="img" />
            </div>
            <div className="text-center p-8 text-16">
              {matchData?.team2.name}
            </div>
          </div>
        </div>
        <div className="flex justify-end w-70 py-16">
          <Button value="Next" onClick={() => setSteps(2)} />
        </div>
      </div>
    </>
  );
};
export default SelectTossWinnerTeam;
