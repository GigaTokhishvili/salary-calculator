import React from 'react'

function Button( {amount, targeted} ) {
  return (
    <button onClick={() => targeted(amount)} className='button-38'>
        {amount}
    </button>
  )
}

export default Button