import React, { useState, useEffect } from 'react'
import './style.less';

interface Item{
  number: number;
}

export default () => {

  const [lines, setLines] = useState<Item[][]>(() => {
    const temp = [];
    for(let i = 0; i < 4; i++){
      temp.push([])
      for(let j = 0; j < 4; j++){
        temp[i].push({number: 1})
      }
    }
    return temp;
  });

  const generateNewNumber = () => {

  } 

  const handleMove = (transform: (x: number, y: number) => [a: number, b: number] = (x, y) => [x, y] ) => {
    const newLines:Item[][] = [] // deepcopy

    const animation: [x1:number, y1: number, x2: number, y2:number][] = [];

    for(let i = 0; i< 4; i++){
      newLines.push([])
      for(let j = 0; j< 4; j++){
        const [x1, y1] = transform(i, j)
        if(lines[x1][y1].number !== 0){
          if(newLines[i].length > 0 && newLines[i][newLines[i].length - 1].number === lines[x1][y1].number){
            newLines[i][newLines[i].length - 1].number *= 2
            animation.push([x1, y1, ...transform(i, newLines[i].length - 1)])
          }else{
            newLines[i].push(Object.assign({}, lines[x1][y1]))
            if(newLines[i].length - 1 !== j ){
              animation.push([x1, y1, ...transform(i, newLines[i].length - 1 )])
            }
          }
        }
      }
    }
    console.log(newLines)
  }

  useEffect(() => {
    const listener = (e) => {
      const { keyCode } = e;
      if(keyCode === 40){
        handleMove()
      }
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