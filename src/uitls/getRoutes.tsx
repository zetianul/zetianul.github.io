import React from 'react';
import Loadable from 'react-loadable';
import { Route, Redirect } from 'react-router-dom';

const LoadableComponent = (route: any) => {
  return Loadable({
    loader: route.component,
    loading: () => import('@/components/LoadingPage')
  })
}

export default function getRoutes(routes, parentPath){
  return (
    <React.Fragment>
      {
        routes.map(i => {
          const path = `${parentPath + i.path}`.replace(/\/+/g, '/')
          if(i.children){
            return getRoutes(i.children, path)
          }else{
            if(i.redirect){
              return <Redirect to={i.redirect} />
            }else{
              return <Route path={path} exact={i.exact} strict={i.strict}><LoadableComponent {...i}/></Route>
            }
          }
        })
      }
    </React.Fragment>
  )
}