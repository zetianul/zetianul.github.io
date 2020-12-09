import React, { useState, useEffect } from 'react'
import './style.less';

export default () => {

  const [lines, setLines] = useState<{number: Number}[][]>(() => {
    const temp = [];
    for(let i = 0; i < 4; i++){
      temp.push([])
      for(let j = 0; j < 4; j++){
        temp[i].push({number: 0})
      }
    }
    return temp;
  });

  const generateNewNumber = () => {

  } 

  const handleMove = () => {
    const newLines = JSON.parse(JSON.stringify(lines)); // deepcopy

    for(let i = 0; i< 4; i++){
      for(let j = 0; j< 4; j++){
        
      }
    }
  }

  useEffect(() => {
    const listener = (e) => {
      console.log(e.keyCode)
    }

    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    };
  }, []);



  return (
    <div className="t-2048-container">
      {
        lines.map(line => line.map(i =><div className="block">{i.number === 0 ? null : i.number}</div>))
      }
    </div>
  )
}