import { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingsContext } from '../context/SettingsContext'

const CountdownAnimation = ({key, timer, animate, children}) => {

  const { stopAnimate } = useContext(SettingsContext)

    return (
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ['#FFFFFF', 0.33],
          ['#FFFFFF', 0.33],
          ['#FFFFFF', 0.33],
        ]}
        strokeWidth={10}
        size={220}
        trailColor="#5fc67e"
        onComplete={ () => {
          stopAnimate()
        }}
      >
        {children}
      </CountdownCircleTimer>
    )
}

export default CountdownAnimation