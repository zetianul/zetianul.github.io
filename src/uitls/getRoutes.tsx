import React from 'react';
import Loadable from 'react-loadable';
import LoadingPage from '@/components/LoadingPage';
import { Route, Redirect, Switch } from 'react-router-dom';

const getLoadableComponent = (route: RouteItem) => {
  return Loadable({
    loader: route.component,
    loading: LoadingPage,
    render:(loaded: any, props: any) => {
      if(route.name){
        document.title = route.name
      }
      const Component = loaded.default;
      return <Component {...props} />;
    }
  })
}

export default function getRoutes(routes, parentPath){
  return <Switch>
    {
      routes.map(i => {
        const path = `${parentPath + i.path}`.replace(/\/+/g, '/')
        if(i.children){
          return getRoutes(i.children, path)
        }else{
          if(i.redirect){
            return <Redirect to={i.redirect} />
          }else{
            return <Route path={path} exact={i.exact} strict={i.strict} component={getLoadableComponent(i)} />
          }
        }
      })
    }
  </Switch>

}