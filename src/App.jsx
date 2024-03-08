import { useEffect, useState } from 'react'
import './App.css'
import StageInput from './components/StageInput'
import STAGES from './data/stages';
import PA from './data/pa';
import SGC from './data/sgc';
import REACTION from './data/reactionTime';
import SPEED from './data/gameSpeed';
import ROULETTE from './data/roulette';
import Hours from './components/Hours';


function App() {
  const [stage, setStage] = useState(JSON.parse(localStorage.getItem('stage')) || STAGES[0])
  const [hours, setHours] = useState(Number(localStorage.getItem('hours')))
  const [totalHours, setTotalHours] = useState([
    {amount: 100, type: 'hours'},
    {amount: 100, type: 'nightHours'},
    {amount: 100, type: 'totalHours'},
  ])
  const [nightHours, setNightHours] = useState(Number(localStorage.getItem('nightHours')) || 0)
  const [doubleHours, setDoubleHours] = useState(Number(localStorage.getItem('doubleHours')) || 0)
  const [pa, setPa] = useState(JSON.parse(localStorage.getItem('pa')) || PA[0])
  const [sgc, setSgc] = useState(JSON.parse(localStorage.getItem('sgc')) || SGC[0])
  const [reaction, setReaction] = useState(JSON.parse(localStorage.getItem('reaction')) || REACTION[0])
  const [speed, setSpeed] = useState(JSON.parse(localStorage.getItem('speed')) || REACTION[0])
  const [roulette, setRoulette] = useState(JSON.parse(localStorage.getItem('roulette')) || REACTION[0])

  const changeStage = (x) => {
    setStage(x)
    localStorage.setItem('stage', JSON.stringify(x))
  }

  const workedHours = (type, hrs) => {
    setHours(hrs);
    setTotalHours({...totalHours, type: type})
    // console.log(totalHours)
  }

  const workedNightHours = (type, hrs) => {
    setNightHours(hrs);
  }

  const workedDoubleHours = (type, hrs) => {
    setDoubleHours(hrs);
  }

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
      <section>
        <Hours 
          header={'Total Hours'} 
          description={'Overall hours you have actually worked during the month'} 
          shiftType={'hours'}
          totalHours={workedHours}
        />
        <Hours 
          header={'Only Night Hours'} 
          description={'Specifically and ONLY night hours you have or will work during the month. For example a typical night shift (00:00 - 08:00) has only 6 hours of night shift, giving you 6 hours of extra salary.'} 
          shiftType={'nightHours'}
          totalHours={workedNightHours}
        />
        <Hours 
          header={'Bonus Shift Hours'} 
          description={'Similar to night hours. This field is for ONLY bonus hours. Usually 8 hours per shift, unless you are working from 20:00 to 04:00 for example.'} 
          shiftType={'doubleHours'}
          totalHours={workedDoubleHours}
        />
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
            />)
          })}
        </div>
      </section>

      <section>
        <h1>gross salary</h1>
        <h1>{Math.round((hours * stage.salary + nightHours * stage.salary/2 + doubleHours * stage.salary/2 + hours * pa.salary + hours * sgc.salary + hours * reaction.salary + hours * speed.salary + hours * roulette.salary) * 100) / 100 }</h1>
        <h1>net salary</h1>
        <h1>{Math.round((0.98 * (0.8 * (hours * stage.salary + nightHours * stage.salary/2 + doubleHours * stage.salary/2 + hours * pa.salary + hours * sgc.salary + hours * reaction.salary + hours * speed.salary + hours * roulette.salary))) *100 ) / 100}</h1>
      </section>
    </>
  )
}

export default App
