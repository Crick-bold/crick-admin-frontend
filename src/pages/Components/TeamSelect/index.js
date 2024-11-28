import React, { useState } from "react";
import style from "../Layout/styles.module.css";
import Modal from "../Modal";
import AddTeamLayout from "../../Team/AddTeamLayout";
// eslint-disable-next-line react/display-name
const TeamSelect = React.forwardRef(
  (
    {
      onChange,
      onBlur,
      name,
      label,
      options,
      placeholder,
      loading,
      error,
      rules,
      disabled,
      onCreateTeam = ()=>{},
      showCreateNewBtn = false,
    },
    ref,
  ) => {
    
    const [show, setShow] = useState(false)
    return (
    <>
      <Modal show={show} setShow={setShow} size="md">
        <AddTeamLayout setShow={setShow} listTeams={onCreateTeam}/>
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
            placeholder="Select"
          >
            <option value="" disabled selected style={{ display: "none" }}>
              {placeholder || "Select Team"}{" "}
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
          showCreateNewBtn?
          <div className={style.create_new_div}>
              Not in the list 
              <button onClick={()=>setShow(true)}>Create New</button>
          </div>

          : null
        }
        <span className={style.error_text}>
          {error ? rules?.required || "Required" : null}
        </span>
      </div>
    </>
  )}
);

export default TeamSelect;
