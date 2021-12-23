import './App.css';
import React, { useEffect, useContext } from 'react'
import Button from './components/Button'
import CountdownAnimation from './components/CountdownAnimation'
import SetPomodoro from './components/SetPomodoro'
import { SettingsContext } from './context/SettingsContext'

import { faCog, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {

  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext)
    // eslint-disable-next-line
    useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      <br></br>
      {pomodoro !== 0 ?
      <>
      <div className='labels'>
          <Button 
            title="Work" 
            activeClass={executing.active === 'work' ? 'active-label' : undefined} 
            _callback={() => setCurrentTimer('work')} 
          />

          <Button 
            title="Short Break" 
            activeClass={executing.active === 'short' ? 'active-label' : undefined} 
            _callback={() => setCurrentTimer('short')} 
          />

          <Button 
            title="Long Break" 
            activeClass={executing.active === 'long' ? 'active-label' : undefined} 
            _callback={() => setCurrentTimer('long')} 
          />  
        </div>
        <div className="timer-container">
          <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
          </div>
        </div>
        <div className="start-wrapper">
          <FontAwesomeIcon icon={faPlay} className='play' activeClass={!startAnimate ? 'active' : undefined} onClick={startTimer}/>
          <FontAwesomeIcon icon={faPause} className='pause' activeClass={startAnimate ? 'active' : undefined} onClick={pauseTimer} />
          <FontAwesomeIcon icon={faCog} className='settings' onClick={SettingsBtn} />
        </div>
      </> : <SetPomodoro />}
    </div>
  )
}

export default App
