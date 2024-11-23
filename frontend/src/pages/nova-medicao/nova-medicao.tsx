import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../../components'
import { useEffect, useState } from 'react'

const NovaMedicao = () => {
  const navigate = useNavigate()
  const [altura, setAltura] = useState(0)
  const [idade, setIdade] = useState(0)
  const [peso, setPeso] = useState(0)

  const onClickVoltar = () => {
    navigate('/perfil')
  }

  const onSalvar = async () => {
    const pacienteId = localStorage.getItem('pacienteId')
    if (pacienteId === undefined) return

    const response = await fetch('http://localhost:8080/medicoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        altura,
        idade,
        peso,
        paciente: { id: pacienteId },
      }),
    })

    if (response.ok) {
      navigate('/perfil')
    } else {
      console.error('Erro ao cadastrar usuário:', response.statusText)
    }
  }

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId')
    if (!usuarioId) {
      navigate('/')
    }
  }, [navigate])

  return (
    <div className="w-full h-screen flex flex-col content-center items-center justify-center">
      <h3 className="mb-4 font-bold">Medição</h3>
      <div className="flex flex-col gap-4 w-64">
        <Input
          id="altura"
          label="Altura"
          placeholder="Digite a altura (em cm)"
          type="text"
          onChange={(e) => setAltura(Number(e.target.value))}
        />
        <Input
          id="peso"
          label="Peso"
          placeholder="Digite o peso (em kg)"
          type="text"
          onChange={(e) => setPeso(Number(e.target.value))}
        />
        <Input
          id="idade"
          label="Idade"
          placeholder="Digite a idade (em meses)"
          type="text"
          onChange={(e) => setIdade(Number(e.target.value))}
        />
        <Button text="Salvar" type="button" onClick={onSalvar} />
        <Button text="Voltar" type="button" onClick={onClickVoltar} />
      </div>
    </div>
  )
}

export default NovaMedicao
