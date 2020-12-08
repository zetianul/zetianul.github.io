import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './style.less';
import { games } from './config';

export default () => {
  const [current, setCurrent] = useState(0) 

  return (
    <div className="games">
      <div className="title">
        skljfslkdjflkdsjflksdjfslkdjfs;ldjflksdjflkdsjfslijewoipjrw;poekrpoq[uj[pj]]
      </div>
      <div className="tabs">
        {
          games.map((i, index) => (
          <a 
            onClick={() => {setCurrent(index)}} 
            className={classnames("tab", {selected: index === current})}
          >
            {i.name}
          </a>))
        }
      </div>
      <div class>
        {games[current].component()}
      </div>
    </div>
  )
}