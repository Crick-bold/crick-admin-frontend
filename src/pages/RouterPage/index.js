import { Routes, Route } from 'react-router-dom'
import MatchPage from '../Match'
import PlayerPage from '../Player'
import SquadPage from '../Squad'
import TeamPage from '../Team'
import SeriesList from '../Series/List'
import SeriesPage from '../Series'
import MatchList from '../Match/List'
import VenueList from '../Venue/List'
import { useEffect, useRef, useState } from 'react'
import Dashboard from '../../common/Dashboard'
import WelcomePage from '../Welcome'
import Navigations from '../Navigation'
import { navigation } from './navigation'
import DashboardPage from '../DashboardPage'
import { useSelector, useDispatch } from 'react-redux'
import { Toast } from 'primereact/toast'
import { clearToast } from '../../common/store/toastSlice'

const Comp = ({ path, user, setUser, setUserLoaded }) => {
  return {
    '/': <WelcomePage user={user} setUser={setUser} setUserLoaded={setUserLoaded} />,
    '/dashboard': <DashboardPage />,
    '/player': <PlayerPage />,
    '/squad': <SquadPage />,
    '/team': <TeamPage />,
    '/match': <MatchList />,
    '/match/:id': <MatchPage />,
    '/venue': <VenueList />,
    '/series': <SeriesList />,
    '/series/:id': <SeriesPage />
  }[path]
}

const Router = () => {
  const [userLoaded, setUserLoaded] = useState(false)
  const [user, setUser] = useState(null)

  const toastRef = useRef(null)
  const dispatch = useDispatch()
  const toastConfig = useSelector(state => state.toast)

  useEffect(() => {
    if (toastConfig && toastRef.current) {
      toastRef.current.show(toastConfig) // Show the toast
      dispatch(clearToast()) // Clear toast state after showing
    }
  }, [toastConfig, dispatch])

  return (
    <>
    <Toast ref={toastRef} />
      {/* {!user && (
        <Navigations
          user={user}
          setUser={setUser}
          setUserLoaded={setUserLoaded}
        />
      )} */}

      <Dashboard
        user={user}
        setUser={setUser}
        setUserLoaded={setUserLoaded}
        userLoaded={userLoaded}
      >
        <Routes>
          {navigation.map((nav, index) => (
            <Route
              key={index}
              path={nav?.path}
              element={<Comp {...{ path: nav?.path }} user={user} setUser={setUser} setUserLoaded={setUserLoaded} />}
            />
          ))}
        </Routes>
      </Dashboard>
    </>
  )
}

export default Router
