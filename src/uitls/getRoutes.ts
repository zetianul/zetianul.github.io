import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';

const LoadableComponent = (route: RouteItem) => {
  return Loadable({
    loader: route.component,
    loading: () => import('@/components/LoadingPage')
  })
}

function formatRoutes(routes: RouteItem[], parentPath: string){
  const routeList = [];
}


export default function getRoutes(routes: RouteItem[], parentPath: string){

  return ( 
  )
  
}