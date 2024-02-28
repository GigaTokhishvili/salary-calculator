import React from 'react'

function HoursInput({header, description, value, changeHours, hourButtons}) {

    const handleClick = (e) => {
        hourButtons(Number(e.target.innerHTML))
    }

    return (

    <section>
        <h1>{header}</h1>
        <p>{description}</p>

        <button className='button-38' onClick={handleClick} >-16</button>
        <button className='button-38' onClick={handleClick} >-4</button>

        <input 
            value={value} 
            onChange={(e) => changeHours(e.target.value)}
            type="number" 
            placeholder='Hours worked' 
        />

        <button className='button-38' onClick={handleClick} >+4</button>
        <button className='button-38' onClick={handleClick} >+16</button>

    
    </section>
    )
}

export default HoursInput