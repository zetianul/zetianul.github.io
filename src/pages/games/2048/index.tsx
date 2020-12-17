import React from 'react'
import AnimationBox from '@/components/AnimationBox';
import classnames from 'classnames';
import './style.less';

interface Item{
  number: number;
  moved?: boolean,
  startLeft?: number,
  startTop?: number,
}

interface IState{
  lines: Item[][],
}



class TowZeroFourEight extends React.Component<any, IState>{

  private isMobile = false;

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
    if(document.body.clientWidth < 420 ){
      this.isMobile = true
    }
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
            const [x2, y2] = transform(i, newLines[i].length - 1)
            item.startLeft = (y1 - y2) * 130
            item.startTop = (x1 - x2) * 130
          }else{
            let newItem = Object.assign({}, lines[x1][y1])
            newLines[i].push(newItem)
            if(newLines[i].length - 1 !== j ){
              const [x2, y2] = transform(i, newLines[i].length - 1)
              newItem.startLeft = (y1 - y2) * 130
              newItem.startTop = (x1 - x2) * 130
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

    if(this.getMatrix(lines) !== this.getMatrix(transformLines)){
      this.generateRandomNumbers(transformLines, 1, 2)
    }


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
      let chosenOne = lines[Math.floor(p/4)][p%4]
      chosenOne.number = number
      able.splice(p, 1)
    }
  }

  getMatrix = (lines: Item[][]):string => lines.map(i => i.map(item => item.number).join('-')).join('\n');


  render() {
    const { lines } = this.state;

    return (
        <div className="t-2048-container">
          {
            lines.map((line, x) => line.map((item, y) =>
                <div className={classnames("block", { empty: item.number === 0 }) }>
                  <AnimationBox
                      number={item.number}
                      top={item.startTop || 0}
                      left={item.startLeft || 0}
                      time={400}
                  >
                    {item.number === 0 ? null : item.number}
                  </AnimationBox>
                </div>
            ))
          }
        </div>
    )
  }
}

export default TowZeroFourEight