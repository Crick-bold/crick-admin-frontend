import React, { useState } from 'react'
import style from '../Layout/styles.module.css'
import AddVenueLayout from '../../Venue/AddVenueLayout'
import Modal from '../Modal'
// eslint-disable-next-line react/display-name
const VenueSelect = React.forwardRef(
  (
    {
      onChange,
      onBlur,
      name,
      label,
      options,
      placeholder = '',
      loading,
      error,
      rules,
      disabled,
      onCreateVenue = () => {},
      showCreateNewBtn = false
    },
    ref
  ) => {
    const [show, setShow] = useState(false)
    return (
    <>
      <Modal show={show} setShow={setShow} size="md">
        <AddVenueLayout setShow={setShow} listVenues={onCreateVenue}/>
      </Modal>
      <div>
        <div>
          <label className={style.label}>{label}</label>
        </div>
        <div>
          <select
            className={style.input}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            disabled={disabled}
          >
            <option value="" disabled selected style={{ display: 'none' }}>
              {placeholder || 'Select Venue'}{' '}
            </option>
            {!loading &&
              options?.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
        </div>
        {
          showCreateNewBtn
            ? <div className={style.create_new_div}>
              Not in the list
              <button onClick={() => setShow(true)}>Create New</button>
          </div>

            : null
        }
        <span className={style.error_text}>
          {error ? rules?.required || 'Required' : null}
        </span>
      </div>
    </>
    )
  }
)

export default VenueSelect
