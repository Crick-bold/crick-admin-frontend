import { ballLabelMaping } from '../../ball-label-mapping'
import styles from './styles.module.css'
const Item = ({ item }) => {
  const extraRuns = item.resultObject.extraRuns
  let extraRunsValue = extraRuns[0] + extraRuns[1] + extraRuns[2]
  if (item.resultObject.noBall) {
    extraRunsValue += item.resultObject.validRuns
  }
  console.log(extraRunsValue, 'exd', extraRuns, item.resultObject)

  const getResult = (value) => {
    if (item.resultObject.noBall) return 12
    if (item.resultObject.wide) return 11
    if (value === 13) return item.resultObject.validRuns
    if (value === 14) return item.resultObject.validRuns
    if (value === 15) return item.resultObject.validRuns

    return value
  }
  return (
    <>
      <div className={styles.item}>
        <div
          className={styles.result}
          style={{ ...ballLabelMaping[getResult(item?.result)]?.style }}
        >
          {ballLabelMaping[getResult(item?.result)]?.label ||
            getResult(item?.result)}
          {extraRunsValue ? '+' + extraRunsValue : null}
        </div>
        <div className={styles.comment}>
          {item?.commentary || 'No Commentary Found.'}
        </div>
      </div>
    </>
  )
}
export default Item
