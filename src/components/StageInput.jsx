import React from 'react'
import inputStyles from '../styles/StageInput.module.css'

function StageInput( {name, changeStage, initialStage, obj, index} ) {

  return (
    <div className={inputStyles.labelDiv} onClick={() => changeStage(obj)} >
        <label className={initialStage === obj.name ? inputStyles.isChecked : null} htmlFor={index} >
            {name}
        </label>
        <input defaultChecked={initialStage === name ? true : false} type="radio" id={index} name='stage' value={name} className={inputStyles.stageInput} />
    </div>
  )
}

export default StageInput