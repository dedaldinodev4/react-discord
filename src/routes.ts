import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'

export const routes = createBrowserRouter([
  {
    path: "/",
    element: Home,
  },
  {
    path: "/auth",
    element: Auth,
  },
])