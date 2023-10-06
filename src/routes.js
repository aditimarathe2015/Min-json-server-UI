import React from 'react'

const Collection = React.lazy(() => import('./views/Collection/collection'))

const CollectionType = React.lazy(() => import('./views/Collection/CollectionType'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/view/collection', name: 'Collection', element: Collection },
  { path: '/view/CollectionType', name: 'CollectionType', element: CollectionType },
 ]

export default routes
