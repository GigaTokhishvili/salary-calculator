import { useState } from 'react'
import './App.css'
import StageInput from './components/StageInput'
import HoursInput from './components/HoursInput';
import { nanoid } from 'nanoid';

const STAGES = [
  {name: 'STAGE1', stage: 1, salary: 7.1},
  {name: 'STAGE2', stage: 2, salary: 7.6},
  {name: 'STAGE3', stage: 3, salary: 8.1},
];


function App() {
  const [stage, setStage] = useState(JSON.parse(localStorage.getItem('stage')) || STAGES[0])
  const [hours, setHours] = useState(Number(localStorage.getItem('hours')) || 120)
  const [nightHours, setNightHours] = useState(Number(localStorage.getItem('nightHours')) || 0)
  const [doubleHours, setDoubleHours] = useState(Number(localStorage.getItem('doubleHours')) || 0)


  const changeStage = (x) => {
    setStage(x)
    localStorage.setItem('stage', JSON.stringify(x))
  }

  const changeHours = (x) => {
    if (0 <= x && x <= 240) {
      setHours(x)
      localStorage.setItem('hours', x)
    }
  }

  const handleHourButtons = (x) => {
    if (0 <= hours + Number(x) && hours + Number(x) <= 240) {
      setHours(prev => Number(prev) + Number(x))
      localStorage.setItem('hours', hours + Number(x))
    }
  }

  const changeNightHours = (x) => {
    if (0 <= x && x <= 240) {
      setNightHours(x)
      localStorage.setItem('nightHours', x)
    }
  }

  const handleNightHourButtons = (x) => {
    if (0 <= nightHours + Number(x) && nightHours + Number(x) <= 240) {
      setNightHours(prev => Number(prev) + Number(x))
      localStorage.setItem('nightHours', nightHours + Number(x))
    }
  }

  const changeDoubleHours = (x) => {
    if (0 <= x && x <= 240) {
      setDoubleHours(x)
      localStorage.setItem('doubleHours', x)
    }
  }

  const handleDoubleHourButtons = (x) => {
    if (0 <= doubleHours + Number(x) && doubleHours + Number(x) <= 240) {
      setDoubleHours(prev => Number(prev) + Number(x))
      localStorage.setItem('doubleHours', doubleHours + Number(x))
    }
  }

  return (
    <>
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

      <section>
        <HoursInput 
          header='Total Work Hours'
          description={'Overall hours you have actually worked during the month'}
          changeHours={changeHours} 
          value={hours}
          hourButtons={handleHourButtons}
          key={nanoid()}
        />

        <HoursInput 
          header='Only Night Hours'
          description={'Specifically and ONLY night hours you have or will work during the month. For example a typical night shift (00:00 - 08:00) has only 6 hours of night shift, giving you 6 hours of extra salary.'}
          changeHours={changeNightHours} 
          value={nightHours}
          hourButtons={handleNightHourButtons}
          key={nanoid()}
        />

        <HoursInput 
          header='Only Double Hours'
          description={'Similar to night hours. This field is for ONLY bonus hours. Usually 8 hours per shift, unless you are working from 20:00 to 04:00 for example.'}
          changeHours={changeDoubleHours} 
          value={doubleHours}
          hourButtons={handleDoubleHourButtons}
          key={nanoid()}
        />
      </section>


      <section>
        <h1>{Math.floor(0.78 * (hours * stage.salary + nightHours * stage.salary/2 + doubleHours * stage.salary/2))}</h1>
      </section>
    </>
  )
}

export default App
