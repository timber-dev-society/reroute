import { compile } from 'path-to-regexp'

import { RouteInterface} from '../interfaces'

type routeBuilder = (params?: {[key: string]: (string|number)}) => RouteInterface

const internals: { routes: {[key: string]: routeBuilder} } = {
  routes: {},
}

export const registerRoute = (route: RouteInterface) => {
  const compiledRoute = compile(route.path)
  internals.routes[route.key] = (params) => ({
    ...route,
    path: compiledRoute(params)
  })
}


export const getRoute = (key: string): routeBuilder => {
  if (internals.routes[key] === undefined) {
    throw new Error(`Route ${key} doesn't exist`)
  }

  return internals.routes[key]
}
