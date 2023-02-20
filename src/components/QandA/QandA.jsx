import React from 'react'
import Style from "./QandA.module.css"
import NavBar from '../NavBar/NavBar'
const QandA = () => {
  return (
    <div className={Style.background}>
      <NavBar />
      <div className={Style.contenedor}>
      <h1>QandA Cuak 🦆</h1>
      <br/>
      <div className={Style.proximamente}>
      <h2>PROXIMAMENTE...</h2>
      </div>
      </div>
    </div>
  )
}

export default QandA