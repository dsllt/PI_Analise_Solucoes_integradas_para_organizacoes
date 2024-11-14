import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../../components'

const Login = () => {
  const navigate = useNavigate()
  const onClickEntrar = () => {
    // TO DO integração com api de login
    navigate('/busca')
  }
  return (
    <div className="w-screen h-screen flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Faça login em sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <Input
            id="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            type="email"
          />
          <Input
            id="senha"
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
          />

          <Button text="Entrar" type="submit" onClick={onClickEntrar} />
        </form>
      </div>
    </div>
  )
}

export default Login
