import React, {useEffect, useRef, useState} from "react";
import classnames from 'classnames';
import { fitBezier } from '@/uitls';
import './style.less'

export enum AnimationType{
    move,
    new,
    merge
}

interface IProps{
    top: number,
    left: number,
    baseTop: number,
    baseLeft: number,
    time: number,
    children?: any
    number: number,
    animationType?: AnimationType,
    // children: ({left, top}: {left: number, top: number}) => any
}

export default (props: IProps) => {
    const [mergeNumber, setMergeNumber] = useState(props.number / 2)
    const movingRef = useRef(null)
    const mixRef = useRef(null)

    useEffect(() => {
      setMergeNumber(props.number / 2)
      const startTime = Date.now();

        const recursion = () => {
            const res = Date.now() - startTime

            if(props.animationType === AnimationType.new){
                // if(res > props.time){
                //     movingRef.current.style.transform = `scale(${1})`
                //     return;
                // }else{
                //     requestAnimationFrame(() => {
                //         movingRef.current.style.transform = `scale(${fitBezier(res / props.time)})`
                //         recursion()
                //     })
                // }
            }else if(props.animationType === AnimationType.merge){
                if(res > props.time){
                    mixRef.current.style.top =`0px`
                    mixRef.current.style.left =`0px`
                    movingRef.current.style.top =`0px`
                    movingRef.current.style.left =`0px`
                    setMergeNumber(props.number)
                    return
                }else{
                    requestAnimationFrame(() => {
                        movingRef.current.style.top =`${ props.top - props.top * (res / props.time)}px`
                        movingRef.current.style.left =`${ props.left - props.left * (res / props.time)}px`
                        if(!(props.baseTop === 0 && props.baseLeft === 0)){
                            mixRef.current.style.top = `${ props.baseTop - props.baseTop * (res / props.time)}px`
                            mixRef.current.style.left = `${ props.baseLeft - props.baseLeft * (res / props.time)}px`
                        }
                        recursion()
                    })

                }
            } else{
                if((props.baseLeft === 0 && props.baseTop === 0) || res > props.time ){
                    movingRef.current.style.top =`0px`
                    movingRef.current.style.left =`0px`
                    return
                }else{
                    requestAnimationFrame(() => {
                        movingRef.current.style.top =`${ props.baseTop - props.baseTop * (res / props.time)}px`
                        movingRef.current.style.left =`${ props.baseLeft - props.baseLeft * (res / props.time)}px`
                        recursion()
                    })
                }
            }
        }
        recursion()

    },[props.left, props.top, props.animationType])

    return <div className="inner-container">
        <div
            className={classnames("moving-box", { empty: props.number === 0, new: props.animationType === AnimationType.new })}
            ref={movingRef}
            style={{
                left: (props.animationType === AnimationType.merge ? props.left : props.baseLeft) || 0,
                top: (props.animationType === AnimationType.merge ? props.top : props.baseTop ) || 0
            }}>
            {
                props.number === 0 ? null : (
                    props.animationType !== AnimationType.merge ? props.number : props.number / 2
                )
            }
        </div>
        <div 
            className={classnames("mix-box" ,{visible: props.animationType === AnimationType.merge})} 
            ref={mixRef} 
            style={{left: props.baseLeft || 0, top: props.baseTop || 0}}
        >
            {mergeNumber}
        </div>
    </div>

}