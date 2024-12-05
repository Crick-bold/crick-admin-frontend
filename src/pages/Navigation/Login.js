import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import Button from "../Components/Button";
import styles from "./styles.module.css";
const Login = ({ responseMessage, errorMessage, text = "Login" }) => {
  return (
    <div className={styles.login_btn}>
      <Button value={text} />
      <div style={{ opacity: 0 }}>
        <GoogleLogin
          onSuccess={responseMessage}
          onError={errorMessage}
          theme="outline"
          size="medium"
          text="signin"
          width="120px"
        />
      </div>
    </div>
  );
};

export default Login;
