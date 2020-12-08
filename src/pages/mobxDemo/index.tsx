import React, { useMemo } from 'react'
import { observable, autorun, action } from 'mobx';
import { Observer } from 'mobx-react'
import './style.less';

export default (props) => {
  console.log('welcome to the mobx demo');

  const main = useMemo(() => {
    return () => {
      alert(123)
    }
  })

  return <div>
    hi mobx
    <button onClick={main}>这是个按钮</button>
    <div className="tetris">
      <div className="container">

      </div>
    </div>
  </div>

}