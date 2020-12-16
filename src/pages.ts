import { pathToRegexp, match } from 'path-to-regexp'

import { RouteInterface, PageInterface } from '../interfaces'

const internals: { pages: PageInterface[] } = {
  pages: [],
}

export const registerPage = (route: RouteInterface, component: any) => { //.
  internals.pages.push({
    key: route.key,
    Page: component, 
    regexp: pathToRegexp(route.path), 
    match: match(route.path, { decode: decodeURIComponent }) 
  })
}

export const getPages = (): PageInterface[] => internals.pages
