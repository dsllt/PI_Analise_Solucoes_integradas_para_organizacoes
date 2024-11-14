import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  Busca,
  CurvaCrescimento,
  Home,
  Login,
  Medicao,
  NovoRegistro,
  Perfil,
} from '../pages'

const routers = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/novo-registro',
    element: <NovoRegistro />,
  },
  {
    path: '/perfil',
    element: <Perfil />,
  },
  {
    path: '/medicao',
    element: <Medicao />,
  },
  {
    path: '/curva-crescimento',
    element: <CurvaCrescimento />,
  },
  {
    path: '/busca',
    element: <Busca />,
  },
])

const Router = () => {
  return <RouterProvider router={routers} />
}

export default Router
