import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import List from '../pages/List'
import Detail from '../pages/Detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon-list',
    element: <List />,
  },
  {
    path: '/pokemon-detail/:id',
    element: <Detail />,
  },
])

export default router
