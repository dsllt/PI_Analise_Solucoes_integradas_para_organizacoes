import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../../components'
import { useState } from 'react'

const CadastrarPaciente = () => {
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')

  const onSalvar = async () => {
    const usuarioId = localStorage.getItem('usuarioId')

    const response = await fetch(
      `http://localhost:8080/pacientes/cadastrar?usuarioId=${usuarioId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          idade,
          dataNascimento,
        }),
      }
    )

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('pacienteId', data.id)
      navigate('/perfil')
    } else {
      console.error('Erro ao cadastrar paciente:', response.statusText)
    }
  }

  return (
    <div className="w-full h-screen flex flex-col content-center items-center justify-center">
      <h3 className="mb-4 font-bold">Registre um novo paciente</h3>
      <div className="flex flex-col gap-4 w-60">
        <Input
          id="nome"
          label="Nome"
          placeholder="Digite o nome"
          type="text"
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          id="idade"
          label="Idade"
          placeholder="Digite a idade"
          type="text"
          onChange={(e) => setIdade(e.target.value)}
        />
        <Input
          id="data"
          label="Data de nascimento"
          placeholder="Digite a data de nascimento"
          type="text"
          onChange={(e) => setDataNascimento(e.target.value)}
        />
        <Button text="Salvar" type="button" onClick={onSalvar} />
      </div>
    </div>
  )
}

export default CadastrarPaciente
