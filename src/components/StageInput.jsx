import React, { useState } from 'react'
import inputStyles from '../styles/StageInput.module.css'

function StageInput( {name, changeStage, initialStage, obj, index, totalHours} ) {
  const [off, setOff] = useState();
  // totalHours && console.log(totalHours <= 96, name )

  const handleClick = () => {
    // if (totalHours <= 96) return;
    changeStage(obj)
  }

  return (
    <div className={inputStyles.labelDiv} onClick={handleClick} >
        <label className={initialStage === obj.name ? inputStyles.isChecked : null} htmlFor={index} >
            {name}
        </label>
        <input 
          defaultChecked={initialStage === name ? true : false} 
          type="radio" 
          id={index} 
          name='stage' 
          value={name} className={inputStyles.stageInput} 
        />
    </div>
  )
}

export default StageInput