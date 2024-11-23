import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  Busca,
  CadastrarPaciente,
  CadastrarUsuario,
  CurvaCrescimento,
  Home,
  Login,
  Medicao,
  Menu,
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
    path: '/cadastrar-paciente',
    element: <CadastrarPaciente />,
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
