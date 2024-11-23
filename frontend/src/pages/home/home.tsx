import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'

const Home = () => {
  const navigate = useNavigate()

  const onClickLogin = () => {
    navigate('/login')
  }
  const onClickCadastrar = () => {
    navigate('/cadastrar-usuario')
  }

  return (
    <div className="w-screen h-screen flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Seja bem-vindo ao aplicativo
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-4">
        <Button text="Login" type="button" onClick={onClickLogin} />
        <Button text="Cadastrar" type="button" onClick={onClickCadastrar} />
      </div>
    </div>
  )
}

export default Home
