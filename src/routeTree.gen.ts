import { Route as rootRoute } from './Routes/___root'
import { Route as IndexRoute } from './Routes/Index'
import { Route as CartRoute } from './Routes/Cart'

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      parentRoute: typeof rootRoute
    },
    '/cart': {
        parentRoute: typeof rootRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: '/',
  getParentRoute: () => rootRoute,
})

Object.assign(CartRoute.options, {
    path: '/cart',
    getParentRoute: () => rootRoute
})

export const routeTree = rootRoute.addChildren([IndexRoute, CartRoute])