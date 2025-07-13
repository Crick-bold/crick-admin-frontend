import { useEffect, useState } from 'react'
import IconSuccss from '../../../../Components/Icons/IconSuccess'
import IconFailed from '../../../../Components/Icons/IconFailed'

import style from './styles.module.css'

const PlayerItem = ({
  player,
  squadId,
  getMatchById,
  matchId,
  index,
  isSquadFinal
}) => {
  const [checked, setChecked] = useState(player?.selected)
  useEffect(() => {
    setChecked(player?.selected)
  }, [player])
  return (
    <>
      <div
        className={checked ? style.selected_item : style.not_selected_item}
      >
        {checked ? <IconSuccss /> : <IconFailed />}
        {player.name} &nbsp;
        {player.is_captain === 1 && <>(Captain)</>}
      </div>
    </>
  )
}

export default PlayerItem
