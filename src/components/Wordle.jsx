import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keyboard from './Keyboard'
import Modal from './Modal'

export default function Wordle({solution}) {
  const {currentGuess,handleKeyup,guesses,isCorrect,usedKeys,turn}=useWordle(solution)
  const [showModal,setShowModal]=useState(false)
  useEffect(()=>{
    window.addEventListener('keyup',handleKeyup)

    if(isCorrect){
      setTimeout(()=>setShowModal(true),2000)
      window.removeEventListener('keyup',handleKeyup)
    }

    if(turn>5){
      setTimeout(()=>setShowModal(true),2000)
      window.removeEventListener('keyup',handleKeyup)
    }

    return ()=>window.removeEventListener('keyup',handleKeyup)
  },[handleKeyup,isCorrect,turn])
  return (
    <div className="">
    <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    <Keyboard usedKeys={usedKeys}/>
    {showModal&&<Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
    
  )
}
