import React, { useState, useEffect } from 'react'
import './style.less';

export default () => {

  const [lines, setLines] = useState([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ])

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
        lines.map(line => line.map(i =><div className="block">{i}</div>))
      }
    </div>
  )
}