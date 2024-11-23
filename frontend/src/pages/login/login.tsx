import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../../components'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const onClickEntrar = async () => {
    const response = await fetch('http://localhost:8080/usuarios/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        senha: password,
      }),
    })

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('usuarioId', data.id)
      navigate('/busca')
    } else {
      console.error('Erro no login:', response.statusText)
    }
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            id="senha"
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button text="Entrar" type="button" onClick={onClickEntrar} />
        </form>
      </div>
    </div>
  )
}

export default Login
