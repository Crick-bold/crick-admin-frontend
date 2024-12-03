// import IconScreen from "../Components/Icons/IconScreen";
import HomePage from "./HomePage";
// import styles from "./styles.module.css";
const Welcome = ({user,setUser, setUserLoaded}) => {
  console.log(user);
  console.log(setUser);
  console.log(setUserLoaded);
  return (
    <>
      <HomePage user={user} setUser={setUser} setUserLoaded={setUserLoaded} />
    </>
  );
};
export default Welcome;
