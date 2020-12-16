# core/router component

## Register au page and a routing

> in pages/my-react-component.tsx

```tsx

import React from 'react'
import { register } from '../core/router'

const ReactComponent = () => <div />

register('my::react::component', '/route')(ReactComponent)

```

> Add in pages/index.ts

```ts
//...
import './my-react-component'

```

## Add link to a page

```tsx

import React from 'react'
import { Link } from './core/router'

const ReactComponent = () => <>
  <Link href="my::react::component">link to my component</Link>
</>

```

## Manually change page

```ts

import { goToPage } from './core/router'

goToPage('my::react::component')

```
