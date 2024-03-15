import { useCallback, useState } from 'react'
import './App.css'
import StageInput from './components/StageInput'
import STAGES from './data/stages';
import HOURSOBJ from './data/hoursObj';
import PA from './data/pa';
import SGC from './data/sgc';
import REACTION from './data/reactionTime';
import SPEED from './data/gameSpeed';
import ROULETTE from './data/roulette';
import Hours from './components/Hours';
import { nanoid } from 'nanoid';


function App() {
  const [stage, setStage] = useState(JSON.parse(localStorage.getItem('stage')) || STAGES[0])
  const [totalHours, setTotalHours] = useState([
    {amount: Number(localStorage.getItem('hours')) || 120, type: 'hours'},
    {amount: Number(localStorage.getItem('nightHours')) || 0, type: 'nightHours'},
    {amount: Number(localStorage.getItem('doubleHours')) || 0, type: 'doubleHours'},
  ])
  const [pa, setPa] = useState(JSON.parse(localStorage.getItem('pa')) || PA[0])
  const [sgc, setSgc] = useState(JSON.parse(localStorage.getItem('sgc')) || SGC[0])
  const [reaction, setReaction] = useState(JSON.parse(localStorage.getItem('reaction')) || REACTION[0])
  const [speed, setSpeed] = useState(JSON.parse(localStorage.getItem('speed')) || REACTION[0])
  const [roulette, setRoulette] = useState(JSON.parse(localStorage.getItem('roulette')) || REACTION[0])

  const changeStage = (x) => {
    setStage(x)
    localStorage.setItem('stage', JSON.stringify(x))
  }

  const workedHours = useCallback((type, hrs) => {
    const updatedHours = totalHours.map((hours) => {
      if (type === hours.type) {
        return { ...hours, amount: hrs}
      }
      return hours;
    })
    setTotalHours(updatedHours)
  }, [])

  const changePaBonus = (x) => {
    setPa(x)
    localStorage.setItem('pa', JSON.stringify(x))
  }

  const changeSgcBonus = (x) => {
    setSgc(x)
    localStorage.setItem('sgc', JSON.stringify(x))
  }

  const changeReactionBonus = (x) => {
    setReaction(x)
    localStorage.setItem('reaction', JSON.stringify(x))
  }

  const changeSpeedBonus = (x) => {
    setSpeed(x)
    localStorage.setItem('speed', JSON.stringify(x))
  }

  const changeRouletteBonus = (x) => {
    setRoulette(x)
    localStorage.setItem('roulette', JSON.stringify(x))
  }

  return (
    <>
      {/* stage */}
      <section>
        <h1>CHOOSE STAGE</h1>

        <div className='stageDiv'>
          {STAGES.map((item) => {
            return (
            <StageInput
              key={item.name}
              name={item.name}
              changeStage={changeStage}
              initialStage={stage.name}
              obj={item}
            />)
          })}
        </div>
      </section>

      {/* All hours */}
      <section className='hoursSection'>
        {HOURSOBJ.map(({ header, description, shiftType }, index) => (
          <Hours 
            key={index}
            header={header}
            description={description}
            shiftType={shiftType}
            totalHours={workedHours}
          />
        ))}
      </section>

      {/* PA bonus */}
      <section>
        <h1>PA Bonus</h1>
        <div className='stageDiv'>
          {PA.map((item) => {
            return (
            <StageInput
              key={item.name}
              name={item.name}
              changeStage={changePaBonus}
              initialStage={pa.name}
              obj={item}
              totalHours={totalHours[0].amount}
            />)
          })}
        </div>
      </section>

      {/* SGC bonus */}
      <section>
        <h1>SGC Bonus</h1>
        <div className='stageDiv'>
          {SGC.map((item) => {
            return (
            <StageInput
              key={item.name}
              name={item.name}
              changeStage={changeSgcBonus}
              initialStage={sgc.name}
              obj={item}
              totalHours={totalHours[0].amount}
            />)
          })}
        </div>
      </section>

      {/* Reaction time bonus */}
      <section>
        <h1>Reaction Time Bonus</h1>
        <div className='stageDiv'>
          {REACTION.map((item) => {
            return (
            <StageInput
              key={item.name}
              name={item.name}
              changeStage={changeReactionBonus}
              initialStage={reaction.name}
              obj={item}
              totalHours={totalHours[0].amount}
            />)
          })}
        </div>
      </section>

      {/* Game Speed bonus */}
      <section>
        <h1>Game Speed Bonus</h1>
        <div className='stageDiv'>
          {SPEED.map((item) => {
            return (
            <StageInput
              key={item.name}
              name={item.name}
              changeStage={changeSpeedBonus}
              initialStage={speed.name}
              obj={item}
              totalHours={totalHours[0].amount}
            />)
          })}
        </div>
      </section>

      {/* Roulette bonus */}
      <section>
        <h1>Roulette cooperation Bonus</h1>
        <div className='stageDiv'>
          {ROULETTE.map((item, index) => {
            return (
            <StageInput
              key={item.name}
              name={item.name}
              changeStage={changeRouletteBonus}
              initialStage={roulette.name}
              obj={item}
              id={index}
              totalHours={totalHours[0].amount}
            />)
          })}
        </div>
      </section>

      <section>
        <h1>gross salary</h1>
        <h1>{Math.round((totalHours[0].amount * stage.salary + totalHours[1].amount * stage.salary/2 + totalHours[2].amount * stage.salary/2 + totalHours[0].amount * pa.salary + totalHours[0].amount * sgc.salary + totalHours[0].amount * reaction.salary + totalHours[0].amount * speed.salary + totalHours[0].amount * roulette.salary) * 100) / 100 }</h1>
        <h1>net salary</h1>
        <h1>{Math.round((0.98 * (0.8 * (totalHours[0].amount * stage.salary + totalHours[1].amount * stage.salary/2 + totalHours[2].amount * stage.salary/2 + totalHours[0].amount * pa.salary + totalHours[0].amount * sgc.salary + totalHours[0].amount * reaction.salary + totalHours[0].amount * speed.salary + totalHours[0].amount * roulette.salary))) *100 ) / 100}</h1>
      </section>
    </>
  )
}

export default App
