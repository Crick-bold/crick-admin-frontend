import axios from 'axios'
import useRequest from '../../../common/hooks/useRequest'
import { useDispatch } from 'react-redux'
import { setToast } from '../../../common/store/toastSlice'

const useCreatePlayer = ({ listPlayers, setShow }) => {
  const dispatch = useDispatch()

  const { data, loading, trigger } = useRequest({
    url: 'player',
    method: 'post',
    isConfig: true
  })

  const createPlayer = async (data) => {
    try {
      await trigger(data)
      setShow(false)
      listPlayers()
      dispatch(
        setToast({
          severity: 'success',
          summary: 'Saved',
          detail: 'Player saved successfully',
          life: 3000
        }
        ))
    } catch (err) {
      await trigger(data)
      setShow(false)
      listPlayers()
      dispatch(
        setToast({
          severity: 'error',
          summary: 'Please select  11 players.',
          detail: err.response.data?.players || err.response.data,
          life: 3000
        }
        ))
    }
  }

  return { createPlayer, loading, data }
}
export default useCreatePlayer
