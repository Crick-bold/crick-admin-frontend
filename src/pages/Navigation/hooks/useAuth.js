import axios from "axios";

const useAuth = ({ setUser, setUserLoaded }) => {
  const responseMessage = async (response) => {
    try {
      const config = {
        headers: {
          Authorization: `${response.credential}`
        }
      }
    
      const res = await axios.post(process.env.REACT_APP_BACKEND + 'login', {}, config)
      localStorage.setItem('token', response.credential)
      localStorage.setItem('profileData', JSON.stringify(res?.data))
      setUser(res?.data)
      setUserLoaded(true)
    } catch (err) {
      if (err.response.status === 403) {
        setUserLoaded(true);
        localStorage.removeItem("token");
        localStorage.removeItem("profileData");
      }
    }
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return {
    responseMessage,
    errorMessage,
  };
};
export default useAuth;
