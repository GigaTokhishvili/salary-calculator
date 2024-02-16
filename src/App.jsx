import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'

const STAGES = [
  {name: 'STAGE1', stage: 1, salary: 7.1},
  {name: 'STAGE2', stage: 2, salary: 7.6},
  {name: 'STAGE3', stage: 3, salary: 8.1},
];


function App() {
  const [stage, setStage] = useState(JSON.parse(localStorage.getItem('stage')) || STAGES[0])
  const [hours, setHours] = useState(Number(localStorage.getItem('hours')) || 120)

  const changeStage = (x) => {
    setStage(x)
    localStorage.setItem('stage', JSON.stringify(x))
  }

  const changeHours = (e) => {
    setHours(e.target.value)
    localStorage.setItem('hours', e.target.value)
  }

  const handleHourButtons = (x) => {
    setHours(prev => Number(prev) + Number(x))
    localStorage.setItem('hours', hours + Number(x))
  }

  return (
    <>
      <section>
        <h1>CHOOSE STAGE</h1>

        <div className='stageDiv'>
          {STAGES.map((item) => {
            return (
            <Input
              key={item.name}
              name={item.name}
              changeStage={changeStage}
              initialStage={stage.name}
              obj={item}
            />
            )
          })}
        </div>
      </section>
      
      <section>
        <h1>CHOOSE HOURS</h1>

        <Button amount='-24' targeted={handleHourButtons} />
        <Button amount='-8' targeted={handleHourButtons} />
        <input 
          value={hours} 
          onChange={changeHours}
          type="number" 
          placeholder='Hours worked' 
        />
        <Button amount='+8' targeted={handleHourButtons} />
        <Button amount='+24' targeted={handleHourButtons} />
      </section>

      <section>
        <h1>{Math.floor((hours * stage.salary))}</h1>
      </section>
    </>
  )
}

export default App
