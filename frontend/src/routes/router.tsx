import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  Busca,
  CadastrarPaciente,
  CadastrarUsuario,
  CurvaCrescimento,
  Home,
  Login,
  NovaMedicao,
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
    path: '/cadastrar-paciente',
    element: <CadastrarPaciente />,
  },
  {
    path: '/perfil',
    element: <Perfil />,
  },
  {
    path: 'nova-medicao',
    element: <NovaMedicao />,
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
