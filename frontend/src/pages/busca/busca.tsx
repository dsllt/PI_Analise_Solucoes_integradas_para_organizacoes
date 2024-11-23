import { useState } from 'react'
import { Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import ListaPacientes from '../../components/lista-pacientes/lista-pacientes'

const Busca = () => {
  const navigate = useNavigate()
  const [pacientes, setPacientes] = useState([])

  const onBuscarPaciente = async () => {
    const usuarioId = localStorage.getItem('usuarioId')

    const response = await fetch(
      `http://localhost:8080/pacientes?usuarioId=${usuarioId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (response.ok) {
      const data = await response.json()
      setPacientes(data)
    } else {
      console.error('Erro ao buscar pacientes:', response.statusText)
    }
  }

  const onAdicionarPaciente = () => {
    navigate('/cadastrar-paciente')
  }
  return (
    <div className="w-full h-screen flex flex-col content-center items-center justify-center">
      <h3 className="mb-4 font-bold">Busca</h3>
      <div className="flex justify-between w-3/6 gap-5">
        <Button
          text="Busque seus pacientes"
          type="button"
          onClick={onBuscarPaciente}
        />
        <Button
          text="Adicione novo paciente"
          type="button"
          onClick={onAdicionarPaciente}
        />
      </div>
      {pacientes.length > 0 && <ListaPacientes pacientes={pacientes} />}
    </div>
  )
}

export default Busca
