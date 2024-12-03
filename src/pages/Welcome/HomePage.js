import React, { useEffect} from 'react'
import "./HomePage.css"
import img7 from "./image7.svg"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import Login from '../Navigation/Login'
import useAuth from '../Navigation/hooks/useAuth'
const HomePage = ({user,setUser,setUserLoaded}) => {
    const { responseMessage, errorMessage } = useAuth({setUser, setUserLoaded});
      useEffect(() => {
    responseMessage({ credential: localStorage.getItem("token") });
  }, []);
  return (
      <div className="main-container">
          <div className="container-1">
              <div className='container-1-1'>
              <div className="container-1-1-text">
                  <h5>SAY NO TO PEN & PAPER</h5>
                      <p>Organise Cricket Tournament in<br /> Just One Click</p>
                      {/* <button onClick={()=>setUser(!user)}>START NOW</button> */}
                      <Login responseMessage={responseMessage} errorMessage={errorMessage}/>
              </div>
              <div className="container-1-1-img">
                  <img src={img7} alt='img1'/>
              </div>
              </div>
              <div className='what-crick'>What is Crick Bold</div>
          </div>

           <div className="container-2">    
              
              <div className="container-2-text">
                  <h3>HOST TOURNAMENTS</h3>
                  <p>Create and mangage cricket tournaments with ease<br/>.Set up matches, manage teams,and keep track of scores all in one place.</p>
                  {/* <button>HOST NOW</button> */}
                  <Login responseMessage={responseMessage} errorMessage={errorMessage}/>
                      </div>
              <div className="container-2-img">
                  <img src={img2} alt='img2'/>
              </div>
    
          </div>
           <div className="container-3">
              
              <div className="container-2-img">
                  <img src={img3} alt='img3'/>
              </div>
              <div className="container-2-text">
                  <h3>MANAGE TEAMS</h3>
                  <p>Easily build teams by adding players, customizing<br />names, and assigning roles Schedule matches,
                  and track progess-all in one place.</p>
                  {/* <button>CREATE NOW</button> */}
                  <Login responseMessage={responseMessage} errorMessage={errorMessage}/>
                      </div>
              
    
          
          </div>
           <div className="container-4">
             
              <div className="container-2-text">
                  <h3>SCHEDULE MATCH</h3>
                  <p>Set match dates, times, and venues in just a few clicks<br />Create a seamless schedule that keeps teams and 
                 fans on track</p>
                  {/* <button>SCHEDULE NOW</button> */}
                  <Login responseMessage={responseMessage} errorMessage={errorMessage}/>
              </div>
               <div className="container-2-img">
                  <img src={img4} alt='img4'/>
              </div>
        </div>
     </div>
  )
}

export default HomePage
