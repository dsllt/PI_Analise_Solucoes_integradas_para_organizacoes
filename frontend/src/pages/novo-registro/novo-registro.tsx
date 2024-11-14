import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../../components'

const NovoRegistro = () => {
  const navigate = useNavigate()

  const onSalvar = () => {
    navigate('/home')
  }

  return (
    <div className="w-full h-screen flex flex-col content-center items-center justify-center">
      <h3 className="mb-4 font-bold">Novo Registro</h3>
      <div className="flex flex-col gap-4 w-60">
        <Input id="nome" label="Nome" placeholder="Digite o nome" type="text" />
        <Input
          id="idade"
          label="Idade"
          placeholder="Digite a idade"
          type="text"
        />
        <Input
          id="data"
          label="Data de nascimento"
          placeholder="Digite a data de nascimento"
          type="text"
        />
        <Button text="Salvar" type="button" onClick={onSalvar} />
      </div>
    </div>
  )
}

export default NovoRegistro
