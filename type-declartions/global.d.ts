interface RouteItem{
  name: string,
  path: string,
  redirect?: string,
  exact?: boolean,
  strict?: boolean,
  component?: any,
  children?: RouteItem[]
}