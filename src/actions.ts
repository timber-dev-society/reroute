import { ActionInterface, RouteInterface } from '../interfaces'
import { getRoute } from './routes'

export interface RouteAction extends ActionInterface {
  payload: {
    key: string,
    title: string,
    path: string,
  }
}

export const GO_TO = Symbol('@route/HREF_ACTION')
export const openPage = (route: RouteInterface): RouteAction =>  ({
  type: GO_TO,
  payload: route,
})

export const goToPage = (route: string, params?: any): RouteAction => openPage(getRoute(route)(params))
