import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  Busca,
  CadastrarUsuario,
  CurvaCrescimento,
  Home,
  Login,
  Medicao,
  Menu,
  NovoRegistro,
  Perfil,
} from '../pages'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cadastrar-usuario',
    element: <CadastrarUsuario />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/menu',
    element: <Menu />,
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
