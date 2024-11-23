import { useState } from 'react'
import { Button, Input } from '../../components'
import { useNavigate } from 'react-router-dom'

const CadastrarUsuario = () => {
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [documento, setDocumento] = useState('')
  const [senha, setSenha] = useState('')

  const onSalvar = async () => {
    const response = await fetch('http://localhost:8080/usuarios/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        email,
        documento,
        senha,
      }),
    })

    if (response.ok) {
      navigate('/login')
    } else {
      console.error('Erro no login:', response.statusText)
    }
  }

  return (
    <div className="w-full h-screen flex flex-col content-center items-center justify-center">
      <h3 className="mb-4 font-bold">Cadastrar novo usuário</h3>
      <div className="flex flex-col gap-4 w-72">
        <Input
          id="nome"
          label="Nome"
          placeholder="Digite o nome"
          type="text"
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          id="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="documento"
          label="Documento"
          placeholder="Digite o número do seu documento"
          type="text"
          onChange={(e) => setDocumento(e.target.value)}
        />
        <Input
          id="senha"
          label="Senha"
          placeholder="Digite a sua senha"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button text="Salvar" type="button" onClick={onSalvar} />
      </div>
    </div>
  )
}

export default CadastrarUsuario
