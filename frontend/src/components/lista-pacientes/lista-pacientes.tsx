import { useNavigate } from 'react-router-dom'
import { formatDateToBrazilian } from '../../utils/functions'

type Paciente = {
  dataNascimento: string
  id: number
  medicoes: []
  nome: string
  usuario: {
    documento: string
    email: string
    id: number
    nome: string
    senha: string
  }
}

type ListaPacientesProps = {
  pacientes: Paciente[]
}

const ListaPacientes = ({ pacientes }: ListaPacientesProps) => {
  const navigate = useNavigate()

  const onClickVisualizar = (pacienteId: string) => {
    localStorage.setItem('pacienteId', pacienteId)
    navigate('/perfil')
  }
  return (
    <div className="relative flex flex-col overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border mt-4">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Nome
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Data de nascimento
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
            </th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {paciente.nome}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  {formatDateToBrazilian(paciente.dataNascimento)}
                </p>
              </td>
              <td className="p-4 border-b border-blue-gray-50">
                <button
                  className="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
                  onClick={() => onClickVisualizar(paciente.id.toString())}
                >
                  Visualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaPacientes
