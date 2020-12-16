import React from 'react'
import { render, fireEvent, createEvent } from '@testing-library/react'

import { LinkComponent } from '../link'
import { registerRoute } from '../routes'

test('render link', () => {
  registerRoute({ key: 'test::route', path: '/test/route', title: 'test' })
  const openPage = jest.fn()
  const { getByTestId } = render(<LinkComponent openPage={openPage} href="test::route">Link content</LinkComponent>)

  const link = getByTestId('router-link')
  expect(link).toHaveTextContent('Link content')
  fireEvent(
    link, 
    createEvent.click(link)
  )
  expect(openPage).toHaveBeenCalled()
})
