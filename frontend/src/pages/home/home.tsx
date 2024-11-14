import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'

const Home = () => {
  const navigate = useNavigate()

  const onClickAdicionarMedicao = () => {
    navigate('/medicao')
  }
  const onClickCurvaCrescimento = () => {
    navigate('/curva-crescimento')
  }
  const onClickPerfil = () => {
    navigate('/perfil')
  }
  return (
    <div className="w-full h-screen flex flex-col content-center items-center justify-center">
      <h3 className="mb-4 font-bold">Home</h3>
      <div className="flex flex-col gap-4">
        <Button
          text="Adicionar medição"
          type="button"
          onClick={onClickAdicionarMedicao}
        />
        <Button
          text="Curva crescimento"
          type="button"
          onClick={onClickCurvaCrescimento}
        />
        <Button text="Perfil" type="button" onClick={onClickPerfil} />
      </div>
    </div>
  )
}

export default Home
