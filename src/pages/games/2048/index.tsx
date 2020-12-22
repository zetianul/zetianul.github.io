import React from 'react'
import AnimationBox, {AnimationType} from '@/components/AnimationBox';
import classnames from 'classnames';
import { throttle } from "@/uitls";
import './style.less';

interface Item{
  number: number;
  merged?: boolean,
  animationType?: AnimationType,
  startLeft?: number,
  startTop?: number,
  baseTop?:number,
  baseLeft?:number,
}

interface IState{
  lines: Item[][],
}



class TowZeroFourEight extends React.Component<any, IState>{

  private readonly isMobile:boolean = false;
  private blockWidth: number = 120;

  private touchStartX:number;
  private touchStartY:number;
  private touchX:number;
  private touchY:number;

  private calculating = false;

  private ref:React.RefObject<HTMLDivElement> = React.createRef();

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
    if(this.isMobile){
      this.ref.current.addEventListener('touchstart', this.touchStart)
      this.ref.current.addEventListener('touchmove', this.touchMove)
      this.ref.current.addEventListener('touchend', this.touchEnd)
      this.blockWidth = this.ref.current.querySelector('.block').clientWidth;
    }else{
      document.addEventListener("keydown", this.keyDownListener)
    }
  }

  componentWillUnmount() {
    if(this.isMobile){
      this.ref.current.removeEventListener('touchstart', this.touchStart)
      this.ref.current.removeEventListener('touchmove', this.touchMove)
      this.ref.current.removeEventListener('touchend', this.touchEnd)
    }else{
      document.removeEventListener("keydown", this.keyDownListener)
    }
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

  touchStart = (e) => {
    this.touchStartX = e.touches[0]?.pageX;
    this.touchStartY = e.touches[0]?.pageY;
  }

  touchMove = throttle((e) => {
    this.touchX = e.touches[0]?.pageX - this.touchStartX;
    this.touchY = e.touches[0]?.pageY - this.touchStartY;
  }, 20)

  touchEnd = (e) => {
    const X = Math.abs(this.touchX || 0);
    const Y = Math.abs(this.touchY || 0)
    if(X <= 5 && Y <= 5) return;
    if(Math.abs(this.touchX) > Math.abs(this.touchY)){
      if(this.touchX > 0){
        this.handleMove((x, y) => [x, 3-y])
      }else{
        this.handleMove()
      }
    }else{
      if(this.touchY > 0){
        this.handleMove((x, y) => [3-y, x])
      }else{
        this.handleMove(((x, y) => [y, x]))
      }
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
          if(newLines[i].length > 0 && item.number === lines[x1][y1].number && !item.merged ){
            item.number *= 2;
            item.merged = true
            item.animationType = AnimationType.merge
            const [x2, y2] = transform(i, newLines[i].length - 1)
            item.startLeft = (y1 - y2) * this.blockWidth
            item.startTop = (x1 - x2) * this.blockWidth
          }else{
            let newItem = Object.assign({}, lines[x1][y1], {animationType: AnimationType.move})
            newLines[i].push(newItem)
            if(newLines[i].length - 1 !== j ){
              const [x2, y2] = transform(i, newLines[i].length - 1)
              newItem.baseLeft = (y1 - y2) * this.blockWidth
              newItem.baseTop = (x1 - x2) * this.blockWidth
            }else{
              newItem.baseLeft = 0
              newItem.baseTop = 0
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
        transformLines[x1][y1].merged = false
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

    console.log(able)

    for(let i = 0; i < nums; i++){
      if(able.length === 0) return

      const p = Math.floor(Math.random() * (able.length))
      const index = able[p]
      let chosenOne = lines[Math.floor(index/4)][index%4]
      chosenOne.number = number
      chosenOne.animationType = AnimationType.new
      able.splice(p, 1)
    }
  }

  getMatrix = (lines: Item[][]):string => lines.map(i => i.map(item => item.number).join('-')).join('\n');


  render() {
    const { lines } = this.state;

    return (
        <div className="t-2048-container" ref={this.ref as React.RefObject<HTMLDivElement>}>
          {
            lines.map((line, x) => line.map((item, y) =>
                <div className={classnames("block", { empty: item.number === 0 }) }>
                  <AnimationBox
                    number={item.number}
                    top={item.startTop || 0}
                    left={item.startLeft || 0}
                    baseTop={item.baseTop || 0}
                    baseLeft={item.baseLeft || 0}
                    time={120}
                    animationType={item.animationType}
                 />
                </div>
            ))
          }
        </div>
    )
  }
}

export default TowZeroFourEight