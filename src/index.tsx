import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { routeConfig } from '@/config/route';
import getRoutes from '@/uitls/getRoutes';



ReactDom.render(
  <HashRouter>
    {getRoutes(routeConfig, '/')}
  </HashRouter>,
  document.getElementById('root')
)