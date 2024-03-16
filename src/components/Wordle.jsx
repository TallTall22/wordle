import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keyboard from './Keyboard'

export default function Wordle({solution}) {
  const {currentGuess,handleKeyup,guesses,isCorrect,usedKeys,turn}=useWordle(solution)

  useEffect(()=>{
    window.addEventListener('keyup',handleKeyup)
    return ()=>window.removeEventListener('keyup',handleKeyup)
  },[handleKeyup])
  return (
    <div className="">
      <div>current guess - {currentGuess}</div>
    <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    <Keyboard usedKeys={usedKeys}/>
    </div>
    
  )
}
