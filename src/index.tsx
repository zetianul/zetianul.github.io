import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { routeConfig } from '@/config/route';
import getRoutes from '@/uitls/getRoutes';


const elements = getRoutes(routeConfig, '/')

ReactDom.render(
  <HashRouter>
    {/* <Route path="/"><div>123</div></Route> */}
    {elements}
  </HashRouter>,
  document.getElementById('root')
)