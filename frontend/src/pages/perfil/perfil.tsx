import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../../components'
import { useEffect, useState } from 'react'
import { calculateAge, formatDateToBrazilian } from '../../utils/functions'

const Perfil = () => {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [idade, setIdade] = useState(0)

  const [isEditarEnabled, setIsEditarEnabled] = useState(false)
  const onSalvar = async () => {
    const pacienteId = localStorage.getItem('pacienteId')
    const response = await fetch(
      `http://localhost:8080/pacientes/${pacienteId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          dataNascimento,
        }),
      }
    )
    if (response.ok) {
      setIdade(calculateAge(dataNascimento))
      setIsEditarEnabled(false)
    } else {
      console.error('Erro ao editar paciente:', response.statusText)
    }
  }

  const onClickCurvaCrescimento = () => {
    navigate('/curva-crescimento')
  }

  const onClickVoltar = () => {
    navigate('/busca')
  }

  const onClickNovaMedicao = () => {
    navigate('/nova-medicao')
  }

  useEffect(() => {
    const fetchPaciente = async () => {
      const pacienteId = localStorage.getItem('pacienteId')
      const response = await fetch(
        `http://localhost:8080/pacientes/${pacienteId}`,
        {
          method: 'GET',
        }
      )

      if (response.ok) {
        const data = await response.json()
        setNome(data.nome)
        setDataNascimento(data.dataNascimento)
        setIdade(calculateAge(data.dataNascimento))
      } else {
        console.error('Erro ao buscar paciente:', response.statusText)
      }
    }

    fetchPaciente()
  }, [])

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId')
    if (!usuarioId) {
      navigate('/')
    }
  }, [navigate])

  return (
    <div className="w-full h-screen flex flex-col content-center items-center justify-center">
      {!isEditarEnabled && (
        <div className="flex flex-col gap-4 w-72">
          <h1 className="mb-4 font-bold text-center">Perfil</h1>
          <div>
            <div className="flex gap-3">
              <span className="font-bold">Nome</span>
              <span>{nome}</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold">Data de nascimento</span>
              <span>{formatDateToBrazilian(dataNascimento)}</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold">Idade</span>
              <span>{idade}</span>
            </div>
          </div>
          <Button
            text="Editar"
            type="button"
            onClick={() => setIsEditarEnabled(true)}
          />
          <Button
            text="Nova medição"
            type="button"
            onClick={onClickNovaMedicao}
          />
          <Button
            text="Curva de crescimento"
            type="button"
            onClick={onClickCurvaCrescimento}
          />
          <Button text="Voltar" type="button" onClick={onClickVoltar} />
        </div>
      )}

      {isEditarEnabled && (
        <>
          <h3 className="mb-4 font-bold">Editar dados do paciente</h3>
          <div className="flex flex-col gap-4 w-60">
            <Input
              id="nome"
              label="Nome"
              placeholder="Digite o nome"
              type="text"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
            <Input
              id="data"
              label="Data de nascimento"
              placeholder="Digite a data de nascimento"
              type="date"
              onChange={(e) => setDataNascimento(e.target.value)}
              value={dataNascimento}
            />
            <Button text="Salvar" type="button" onClick={onSalvar} />
          </div>
        </>
      )}
    </div>
  )
}

export default Perfil
