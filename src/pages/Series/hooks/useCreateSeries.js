import useRequest from '../../../common/hooks/useRequest'

const useCreateSeries = ({ setShow, listSeries }) => {
  const { data, loading, trigger } = useRequest({
    url: 'series',
    method: 'post',
    isConfig: true
  })
  const createSeries = async (data) => {
    await trigger(data)
    setShow(false)
    await listSeries()
  }
  return {
    data,
    loading,
    createSeries
  }
}
export default useCreateSeries
