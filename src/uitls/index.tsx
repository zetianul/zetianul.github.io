export const fitBezier = function fitBezier (c: number): number{
    return -(c * c) + 1.7 * c
}

export const throttle = function throttle(func: any, time: number): any{
    let timer = null
    return (...arg) => {
        if(timer) return
        timer = setTimeout(() => {
            func(...arg)
            timer = null
        }, time)
    }
}