import React, {useEffect, useRef} from "react";
import classnames from 'classnames';

interface IProps{
    top: number,
    left: number,
    time: number,
    children?: any
    number: number
    // children: ({left, top}: {left: number, top: number}) => any
}

export default (props: IProps) => {
    const ref = useRef(null)

    useEffect(() => {
      const startTime = Date.now();
      const recursion = () => {
          const res = Date.now() - startTime
          if((props.left === 0 && props.top === 0) || res > props.time ){
              ref.current.style.top =`0px`
              ref.current.style.left =`0px`
              return
          }else{
              requestAnimationFrame(() => {
                  ref.current.style.top =`${ props.top - props.top * (res / props.time)}px`
                  ref.current.style.left =`${ props.left - props.left * (res / props.time)}px`
                  recursion()
              })
          }
      }
      recursion()
    },[props.left, props.top])

    return <div className={classnames("inner-block", {empty: props.number === 0})} ref={ref}>
        { props.children }
    </div>
}