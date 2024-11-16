import { useState } from 'react'
import { Button, Input } from '../../components'
import { useNavigate } from 'react-router-dom'

const Busca = () => {
  const navigate = useNavigate()
  const [showBusca, setShowBusca] = useState(false)

  const onBuscarPaciente = () => {
    // TO DO busca de paciente registrado na API
    // se registrado navega para home
    // se não registrado mostra mensagem de erro
    navigate('/home')
  }
  const onAdicionarPaciente = () => {
    navigate('/novo-registro')
  }
  return (
    <div className="w-full h-screen flex flex-col content-center items-center justify-center">
      <h3 className="mb-4 font-bold">Busca</h3>
      <div className="flex flex-col gap-4">
        <Button
          text="Busque um paciente"
          type="button"
          onClick={() => setShowBusca(true)}
        />
        {showBusca && <BuscaInput onClickBuscar={onBuscarPaciente} />}
        <Button
          text="Adicione novo paciente"
          type="button"
          onClick={onAdicionarPaciente}
        />
      </div>
    </div>
  )
}

export default Busca

type BuscaInputProps = {
  onClickBuscar: () => void
}

const BuscaInput = ({ onClickBuscar }: BuscaInputProps) => {
  return (
    <div className="flex flex-col gap-2 w-64">
      <Input
        id="nome"
        label="Nome"
        placeholder="Digite um nome para buscar"
        type="text"
      />
      <Button text="Buscar" type="button" onClick={onClickBuscar} />
    </div>
  )
}
