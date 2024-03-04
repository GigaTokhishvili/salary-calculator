import React from 'react'
import inputStyles from '../styles/StageInput.module.css'

function StageInput( {name, changeStage, initialStage, obj} ) {

  return (
    <div className={inputStyles.labelDiv} onClick={() => changeStage(obj)} >
        <label className={initialStage === obj.name ? inputStyles.isChecked : null} htmlFor={name} >
            {name}
        </label>
        <input defaultChecked={initialStage === name ? true : false} type="radio" id={name} name='stage' value={name} className={inputStyles.stageInput} />
    </div>
  )
}

export default StageInput