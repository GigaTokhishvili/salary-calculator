import React, { useState } from 'react'
import hourStyles from '../styles/hours.module.css'

function HoursInput({header, description, value, changeHours, hourButtons}) {
    const [modal, setModal] = useState(false);

    const handleClick = (e) => {
        hourButtons(Number(e.target.innerHTML))
    }

    const handleHourChange = e => {
        changeHours(e.target.value)
    }

    return (
    <section>
        <div onClick={() => setModal(prev => !prev)} className={hourStyles.modalDiv}>
            <h1>{header}</h1>
            <span className={modal ? hourStyles.modalBtnUp : hourStyles.modalBtnDown}>﹀</span>
        </div>
        <div className={modal ? hourStyles.openModal : hourStyles.closeModal}>
            <p>{description}</p>
        </div>

        <div className={hourStyles.hoursDiv}>
            <button className={hourStyles.button38} onClick={handleClick} >-16</button>
            <button className={hourStyles.button38} onClick={handleClick} >-4</button>

            <input 
                value={value} 
                onChange={handleHourChange}
                type="number" 
                placeholder='Hours worked' 
            />
            <button className={hourStyles.button38} onClick={handleClick} >+4</button>
            <button className={hourStyles.button38} onClick={handleClick} >+16</button>
        </div>
    </section>
    )
}

export default HoursInput