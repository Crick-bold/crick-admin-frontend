import { useEffect } from 'react'
import useRequest from '../../../common/hooks/useRequest'
const useGetDashboard = () => {
  const { data, loading, trigger } = useRequest({
    url: 'dashboard',
    method: 'get',
    isConfig: true
  })

  const getDashboard = async () => {
    const payload = {
      filters: {
        created_by: 0
      }
    }
    await trigger(payload)
    console.log(data, 'ddd')
  }

  useEffect(() => {
    getDashboard()
  }, [])
  return {
    loading,
    data: data?.data,
    getDashboard
  }
}
export default useGetDashboard
