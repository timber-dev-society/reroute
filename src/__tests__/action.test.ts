import { openPage, GO_TO, goToPage } from '../actions'
import { registerRoute } from '../routes' 

test('Test openRoute action', () => {
  const routeAction = openPage({ key: 'test', title: 'test-title', path: '/test' })

  expect(routeAction.type).toBe(GO_TO)
  expect(routeAction.payload.key).toBe('test')
  expect(routeAction.payload.title).toBe('test-title')
  expect(routeAction.payload.path).toBe('/test')
})

test('Test goToPage action', () => {
  registerRoute({ key: 'test', title: 'title', path: '/test/:param'})
  const routeAction = goToPage('test', { param: 'test' })

  expect(routeAction.type).toBe(GO_TO)
  expect(routeAction.payload.key).toBe('test')
  expect(routeAction.payload.title).toBe('title')
  expect(routeAction.payload.path).toBe('/test/test')
})
