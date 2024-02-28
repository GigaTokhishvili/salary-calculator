import React from 'react'
import inputStyles from '../styles/StageInput.module.css'

function StageInput( {name, changeStage, initialStage, obj} ) {
  
  return (
    <div className={inputStyles.labelCss} onClick={() => changeStage(obj)} >
        <label htmlFor={name} >
            {name}
        </label>
        <input onClick={(e) => console.log(e)} defaultChecked={initialStage === name ? true : false} type="radio" id={name} name='stage' value={name} className={inputStyles.stageInput} />
    </div>
  )
}

export default StageInput