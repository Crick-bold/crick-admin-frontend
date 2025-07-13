import useListTeams from '../hooks/useListTeams'
import globalStyle from '../../Venue/List/styles.module.css'
import Modal from '../../Components/Modal'
import { useEffect, useState } from 'react'
import Button from '../../Components/Button'
import Table from '../../Components/Table'
import { columns } from '../utlis/team-table'
import AddTeamLayout from '../AddTeamLayout'

const List = ({
  teams: teamsFromDashboard,
  loading: loadingFromDashboard,
  primaryCall = true
}) => {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchText] = useState('')
  const {
    data: teamsFromMain,
    loadingFromMain,
    listTeams
  } = useListTeams({ searchText, primaryCall })

  useEffect(() => {
    setTeams(teamsFromDashboard)
    setLoading(loadingFromDashboard)
  }, [JSON.stringify(teamsFromDashboard)])

  useEffect(() => {
    setTeams(teamsFromMain)
    setLoading(loadingFromMain)
  }, [JSON.stringify(teamsFromMain)])

  const [show, setShow] = useState(false)
  return (
    <>
      <Modal show={show} setShow={setShow} size="md">
        <AddTeamLayout setShow={setShow} listTeams={listTeams} />
      </Modal>

      <div className={globalStyle.container}>
        <div className={globalStyle.flex_right}>
          <div className={globalStyle.heading}>Teams</div>
          {/* <input
            type="text"
            placeholder="Search Team..."
            className={layoutStyle.input}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          /> */}
          <Button value="+" onClick={() => setShow(true)} />
        </div>
        <div className={globalStyle.table_content}>
          <Table columns={columns} data={teams} loading={loading} />
        </div>
      </div>
    </>
  )
}

export default List
