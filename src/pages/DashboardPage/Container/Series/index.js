import { Link } from 'react-router-dom'
import Skelton from '../../../Components/Skelton'
import Modal from '../../../Components/Modal'
import AddSeriesLayout from '../../../Series/AddSeriesLayout'
import { useState } from 'react'
import Button from '../../../Components/Button'
import globalStyle from '../../../Venue/List/styles.module.css'

const SeriesContainer = ({ series, loading, getDashboard }) => {
  const [show, setShow] = useState(false)
  return (
    <div className="bg-color-primary w-100 border-radius-4">
      <div className="flex justify-between bg-color-secondary p-8">
        <div className="text-16 p-8">Latest Series</div>
        <Button value="Create New" onClick={() => setShow(true)} />
      </div>
      {show
        ? (
        <Modal show={show} setShow={setShow} size="md">
          <AddSeriesLayout setShow={setShow} onCreateSeries={getDashboard} />
        </Modal>
          )
        : null}

      <div className="flex my-8 flex-wrap">
        {loading
          ? (
          <Skelton width="100%" height="250px" />
            )
          : series.length === 0
            ? (
          <div className={globalStyle.no_data_found}>No Data Found</div>
              )
            : (
                series.map((item) => (
            <Link to={'/series/' + item?.id} key={item.id}>
              <div
                className="m-8 bg-color-secondary p-16 border-radius-4 flex align-center gap-10 "
                style={{ width: '300px' }}
              >
                <div style={{ width: '50px', height: '50px' }}>
                  <img src={item?.imageUrl} className="img border-radius-4" />
                </div>
                <div className="color-primary text-decoration-none">
                  {item?.name}
                </div>
              </div>
            </Link>
                ))
              )}
      </div>
    </div>
  )
}
export default SeriesContainer
