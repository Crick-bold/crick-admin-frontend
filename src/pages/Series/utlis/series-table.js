import { Link } from 'react-router-dom'
import styles from '../../Team/List/styles.module.css'

export const columns = [
  {
    key: 'imageUrl',
    header: 'Image',
    accessor: (row) => (
      <>
        <img src={row?.imageUrl} className={styles.img} />
      </>
    )
  },
  {
    key: 'name',
    header: 'Name',
    accessor: (row) => (
      <>
        <Link to={'/series/' + row?.id} className={styles.view_btn}>
          {row?.name}
        </Link>
      </>
    )
  }
]
