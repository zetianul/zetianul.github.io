import React, { useState, useEffect } from 'react'
import classnames from 'classnames';
import './style.less';

interface Item{
  number: number;
  moved?: boolean,
}

interface IState{
  lines: Item[][],
}


class TowZeroFourEight extends React.Component<any, IState>{

  private calculating = false;

  constructor(props) {
    super(props);
    const temp = [];
    for(let i = 0; i < 4; i++){
      temp.push([])
      for(let j = 0; j < 4; j++){
        temp[i].push({number: 0})
      }
    }
    this.generateRandomNumbers(temp, 2, 2)
    this.state = {
      lines: temp
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownListener)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownListener)
  }

  keyDownListener = (e) => {
    const { keyCode } = e;
    if(this.calculating) return;
    console.log(keyCode)
    if(keyCode === 37){
      this.handleMove()
    }else if(keyCode === 38){
      this.handleMove(((x, y) => [y, x]))
    }else if(keyCode === 39){
      this.handleMove((x, y) => [x, 3-y])
    }else if(keyCode === 40){
      this.handleMove((x, y) => [3-y, x])
    }
  }

  handleMove = (transform: (x: number, y: number) => [a: number, b: number] = (x, y) => [x, y] ) => {

    this.calculating = true

    const { lines } = this.state;
    const newLines:Item[][] = [] // deepcopy

    const animation: [x1:number, y1: number, x2: number, y2:number][] = [];

    for(let i = 0; i< 4; i++){
      newLines[i] = []
      for(let j = 0; j< 4; j++){
        const [x1, y1] = transform(i, j)
        if(lines[x1][y1].number !== 0){
          const item = newLines[i][newLines[i].length - 1]
          // console.log(newLines.map(i => i.map(j => j.number)), newLines[i][newLines[i].length - 1]?.number, lines[x1][y1]?.number)
          if(newLines[i].length > 0 && item.number === lines[x1][y1].number && !item.moved ){
            item.number *= 2;
            item.moved = true
            animation.push([x1, y1, ...transform(i, newLines[i].length - 1)])
          }else{
            newLines[i].push(Object.assign({}, lines[x1][y1]))
            if(newLines[i].length - 1 !== j ){
              animation.push([x1, y1, ...transform(i, newLines[i].length - 1 )])
            }
          }
        }
      }
      newLines[i] = [...newLines[i], {number: 0},{number: 0},{number: 0},{number: 0},].slice(0, 4)
    }

    const transformLines: Item[][] = [[],[],[],[]]
    for(let i = 0; i< 4; i++){
      for(let j = 0; j < 4; j++){
        const [x1, y1] = transform(i, j)
        transformLines[x1][y1] = newLines[i][j]
        transformLines[x1][y1].moved = false
      }
    }
    this.printMatrix(transformLines)

    this.generateRandomNumbers(transformLines, 1, 2)

    this.printMatrix(transformLines)

    this.setState({
      lines: transformLines
    }, () => {
      this.calculating = false
    })
  }

  generateRandomNumbers = (lines: Item[][], nums: number, number: number) => {
    let able = [];
    for(let i = 0; i< 4; i++){
      for(let j = 0; j < 4; j++){
        if(lines[i][j].number === 0){
          able.push(i*4 + j)
        }
      }
    }

    for(let i = 0; i < nums; i++){
      if(able.length === 0) return
      const p = able[Math.floor(Math.random() * (able.length))]
      lines[Math.floor(p/4)][p%4].number = number
      able.splice(p, 1)
    }
  }

  printMatrix = (lines: Item[][]) => {
    const str = lines.map(i => i.map(item => item.number).join('-')).join('\n');
    console.log(str)
  }


  render() {
    const { lines } = this.state;
    return (
        <div className="t-2048-container">
          {
            lines.map(line => line.map(i =><div className={classnames("block", {empty: i.number === 0})}>{i.number === 0 ? null : i.number}</div>))
          }
        </div>
    )
  }
}

export default TowZeroFourEight