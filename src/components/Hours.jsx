import React, { useEffect, useState } from 'react'
import hourStyles from '../styles/Hours.module.css'
import { nanoid } from 'nanoid';

function Hours({header, description, shiftType, totalHours}) {
    const [hours, setHours] = useState(0)
    const [modal, setModal] = useState(false);

    useEffect(() => {
        setHours(Number(localStorage.getItem(shiftType)));
    }, [])

    const handleClick = (e) => {
        const value = Number(e.target.innerHTML);

        if (0 <= hours + value && hours + value <= 240) {
            setHours(prev => Number(prev) + value)
            localStorage.setItem(shiftType, hours + value)
            totalHours(shiftType, Number(hours) + value);
        } else if (Number(hours) + value < 0) {
            setHours(0)
            localStorage.setItem(shiftType, 0)
            totalHours(shiftType, 0);
        } else if (Number(hours) + value > 240) {
            setHours(240)
            localStorage.setItem(shiftType, 240)
            totalHours(shiftType, 240);
        }
    }

    const handleHourChange = e => {
        const value = Number(e.target.value);
        
        if (0 <= value && value <= 240) {
            setHours(value)
            localStorage.setItem(shiftType, value)
            totalHours(shiftType, value);
        } else if (value < 0) {
            setHours(0);
            totalHours(shiftType, 0);
            localStorage.setItem(shiftType, 0)
        } else if (value > 240) {
            setHours(240)
            localStorage.setItem(shiftType, 240)
            totalHours(shiftType, 240);
        }
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
                value={hours} 
                onChange={handleHourChange}
                type="number" 
                placeholder='Hours worked'
                id={nanoid()}
                className={hourStyles.hoursInput}
            />
            <button className={hourStyles.button38} onClick={handleClick} >+4</button>
            <button className={hourStyles.button38} onClick={handleClick} >+16</button>
        </div>
    </section>
    )
}

export default Hours