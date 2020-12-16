import { MatchResult } from 'path-to-regexp'

import { RouteInterface } from '../interfaces'
import { registerRoute, getRoute } from './routes'
import { registerPage, getPages } from './pages' 

export * from './link'
export * from './actions'

export interface PageProps {
  match: MatchResult|any
}

export const register = (key: string, path: string , title?: string) => {
  const route: RouteInterface = {
    key,
    path,
    title: title || 'tealt'
  }

  registerRoute(route)

  return (component: any) => {
    registerPage(route, component)
  }
}

export const pages = getPages

export const routes = getRoute

