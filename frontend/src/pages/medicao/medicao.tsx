import { Button, Input } from '../../components'

const Medicao = () => {
  return (
    <div className="w-full h-screen flex flex-col content-center items-center justify-center">
      <h3 className="mb-4 font-bold">Medição</h3>
      <div className="flex flex-col gap-4">
        <Input
          id="altura"
          label="Altura"
          placeholder="Digite a altura"
          type="text"
        />
        <Input id="peso" label="Peso" placeholder="Digite o peso" type="text" />
        <Input
          id="idade"
          label="Idade"
          placeholder="Digite a idade"
          type="text"
        />
        <Button text="Salvar" type="button" />
      </div>
    </div>
  )
}

export default Medicao
