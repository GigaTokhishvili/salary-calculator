import React, { useEffect, useState, memo } from 'react';
import HourStyles from '../styles/HoursInput.module.css';
import { nanoid } from 'nanoid';

const Hours = memo(({header, description, shiftType, totalHours, initialValue}) => {
    const [hours, setHours] = useState(0)
    const [modal, setModal] = useState(false);

    useEffect(() => {
        localStorage.getItem(shiftType) ? setHours(Number(localStorage.getItem(shiftType))) : setHours(initialValue);
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
            setHours(value);
            localStorage.setItem(shiftType, value);
            totalHours(shiftType, value);
        } else if (value < 0) {
            setHours(0);
            totalHours(shiftType, 0);
            localStorage.setItem(shiftType, 0);
        } else if (value > 240) {
            setHours(240);
            localStorage.setItem(shiftType, 240);
            totalHours(shiftType, 240);
        }
    }

    return (
    <section>
        <div onClick={() => setModal(prev => !prev)} className={HourStyles.modalDiv}>
            <h1>{header}</h1>
            <span className={modal ? HourStyles.modalBtnUp : HourStyles.modalBtnDown}>﹀</span>
        </div>
        <div className={modal ? HourStyles.openModal : HourStyles.closeModal}>
            <p>{description}</p>
        </div>

        <div className={HourStyles.hoursDiv}>
            {shiftType !== 'bonusHours' && <button className={HourStyles.button38} onClick={handleClick} >-16</button>}            
            <button className={HourStyles.button38} onClick={handleClick} >{shiftType !== 'bonusHours' ? '-4' : '-1'}</button>
            <input 
                value={hours.toString()} 
                onChange={handleHourChange}
                type="number" 
                placeholder='Hours worked'
                id={nanoid()}
                className={HourStyles.hoursInput}
            />
            <button className={HourStyles.button38} onClick={handleClick} >{shiftType !== 'bonusHours' ? '+4' : '+1'}</button>
            {shiftType !== 'bonusHours' && <button className={HourStyles.button38} onClick={handleClick} >+16</button>}
        </div>
    </section>
    )
});

export default Hours
