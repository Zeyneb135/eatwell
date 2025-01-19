import React from 'react'
import style from './Welcome.module.scss'
const Welcome = () => {
  return (
    <div className={style.container}>
        <div className={style.image}></div>
        <div className={style.text}>
            <h1>Welcome To EatWell</h1>
            <p>Come and eat well with our delicious & healthy foods.</p>
            <button>Reservation</button>
        </div>
    </div>
  )
}

export default Welcome