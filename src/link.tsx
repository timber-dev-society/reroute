import React from 'react'
import { connect } from 'react-redux'

import { openPage } from './actions'
import { getRoute } from './routes'

interface PropTypes {
  href: string,
  openPage: Function,
  params?: any,
  children: any,
  className?: string
}

export const LinkComponent = ({ href, params, openPage, children, ...props }: PropTypes) => {
  const route = getRoute(href)(params)

  return (
  <a
    data-testid = 'router-link'
    href={route.path} 
    onClick={(ev) => { ev.preventDefault(); openPage(route) }} 
    {...props}
  >{ children }</a>)
}

export const Link = connect(undefined, { openPage })(LinkComponent)
