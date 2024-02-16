import React from 'react'

function Input( {name, changeStage, initialStage, obj} ) {
  
  return (
    <div onClick={() => changeStage(obj)} >
        <label htmlFor={name} >
            {name}
        </label>
        <input defaultChecked={initialStage === name ? true : false} type="radio" id={name} name='stage' value={name} />
    </div>
  )
}

export default Input