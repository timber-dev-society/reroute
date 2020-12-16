import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register, pages, routes } from '..'

test('Should register correctly a new page', () => {
  const Page = () => (<div />)

  register('test::route::1', '/test','test')(Page)

  expect(routes('test::route::1')()).toHaveProperty('path', '/test')
  expect(routes('test::route::1')()).toHaveProperty('title', 'test')
  expect(pages()).toHaveLength(1)
  expect(pages()[0]).toHaveProperty('Page', Page)

  register('test::route::2', '/test/2', 'test')(Page)
  register('test::route::3', '/test/3', 'test')(Page)
  register('test::route::4', '/test/:id', 'test')(Page)
  expect(pages()).toHaveLength(4)
  expect(pages()[3].match('/test/1234')).toHaveProperty('params.id', '1234')

  expect(routes('test::route::4')({id: 1234})).toHaveProperty('path', '/test/1234')
})

test('Should register correctly a new page component', () => {
  class TestPage extends Component {}

  register('test::route2', '/test', 'test')(TestPage)

  expect(routes('test::route2')()).toHaveProperty('title', 'test')
})

test('Should register correctly a new connected page', () => {
  const PageComponent = () => (<div />)
  const Page = connect()(PageComponent)

  register( 'test::route3', '/test', 'test')(Page)

  expect(routes('test::route3')()).toHaveProperty('title', 'test')
})

test('Should generate error when you try get unknown route', () => {
  expect(() => { routes('non::existent::route') }).toThrow(`Route non::existent::route doesn't exist`)
})
