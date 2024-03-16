import React, { useEffect, useState } from 'react'
import database from '../data/database.json'

export default function Keyboard({usedKeys}) {

  const [letters,setLetters]=useState(null)

  useEffect(()=>{
    const data=database.letters
    setLetters(data)
  },[])
  return (
    <div className="keyboard">
      { letters &&letters.map((l)=>{
      const color=usedKeys[l.key]
      return (
        <div key={l.key} className={color}>{l.key}</div>
      )
    })}
    </div>
  )
}
