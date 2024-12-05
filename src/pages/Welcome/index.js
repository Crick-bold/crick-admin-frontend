// import IconScreen from "../Components/Icons/IconScreen";

import styles from "./styles.module.css";
import img7 from "./image7.svg";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import Login from "../Navigation/Login";
import useAuth from "../Navigation/hooks/useAuth";
import { useEffect } from "react";
const Welcome = ({ user, setUser, setUserLoaded }) => {
  const { responseMessage, errorMessage } = useAuth({ setUser, setUserLoaded });
  useEffect(() => {
    responseMessage({ credential: localStorage.getItem("token") });
  }, []);

  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["navbar"]}>
          <div className={styles["navbar-text"]}>Crick Bold</div>
        </div>

        <div className={styles["container-1"]}>
          <div className={styles["container-1-1"]}>
            <div className={styles["container-1-1-text"]}>
              <div className={styles["container-1-1-text1"]}>
                Say No to Pen & Paper
              </div>

              <p>Organise Cricket Tournament in Just few Click</p>
              {/* <button onClick={()=>setUser(!user)}>START NOW</button> */}
              <div className="center-div">
                <Login
                  responseMessage={responseMessage}
                  errorMessage={errorMessage}
                  text="START NOW"
                />
              </div>
            </div>
            <div className={styles["container-1-1-img"]}>
              <img src={img7} alt="img1" />
            </div>
          </div>
          <div className={styles["what-crick"]}>What we do ?</div>
          <hr className={styles["horizontal-line"]} />
        </div>

        <div className={styles["container-2"]}>
          <div className={styles["container-2-text"]}>
            <div className={styles["container-2-text-2"]}>HOST TOURNAMENTS</div>
            <p>
              Create and mangage cricket tournaments with <br />
              ease.Set up matches, manage teams,and keep track <br />
              of scores all in one place.
            </p>
            {/* <button>HOST NOW</button> */}
            <Login
              responseMessage={responseMessage}
              errorMessage={errorMessage}
              text="HOST NOW"
            />
          </div>
          <div className={styles["container-2-img"]}>
            <img src={img2} alt="img2" />
          </div>
        </div>
        <hr className={styles["horizontal-line"]} />
        <div className={styles["container-3"]}>
          <div className={styles["container-2-img"]}>
            <img src={img3} alt="img3" />
          </div>
          <div className={styles["container-2-text"]}>
            <div className={styles["container-2-text-2"]}>MANAGE TEAMS</div>
            <p>
              Easily build teams by adding players, customizing
              <br />
              names, and assigning roles Schedule matches, and track <br />{" "}
              progess-all in one place.
            </p>
            {/* <button>CREATE NOW</button> */}
            <Login
              responseMessage={responseMessage}
              errorMessage={errorMessage}
              text="CREATE NOW"
            />
          </div>
        </div>
        <hr className={styles["horizontal-line"]} />
        <div className={styles["container-4"]}>
          <div className={styles["container-2-text"]}>
            <div className={styles["container-2-text-2"]}>SCHEDULE MATCH</div>
            <p>
              Set match dates, times, and venues in just a few clicks
              <br />
              Create a seamless schedule that keeps teams <br /> and fans on
              track
            </p>
            {/* <button>SCHEDULE NOW</button> */}
            <Login
              responseMessage={responseMessage}
              errorMessage={errorMessage}
              text="SCHEDULE NOW"
            />
          </div>
          <div className={styles["container-2-img"]}>
            <img src={img4} alt="img4" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Welcome;
