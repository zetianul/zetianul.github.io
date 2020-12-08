export const routeConfig: RouteItem[] = [
  {
    name:'service worker',
    path: '/',
    exact: true,
    component: () => import('@/pages/serviceWorker')
  },
  {
    name: 'mobx demo',
    path: '/mobx',
    component: () => import('@/pages/mobxDemo'),
  }
]