import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import Chart from 'react-apexcharts'
import { useEffect, useState } from 'react'
type PropsChart = object

const CurvaCrescimento = () => {
  const navigate = useNavigate()

  const [alturas, setAlturas] = useState([])
  const [idades, setIdades] = useState([])

  const onVoltar = () => {
    navigate('/perfil')
  }
  const options: PropsChart = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {},
    dataLabels: {
      enabled: true,
    },
    colors: ['#5A6ACF'],
    stroke: {
      lineCap: 'round',
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
      labels: {
        style: {
          colors: '#616161',
          fontSize: '10px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
      title: {
        text: 'Idade (meses)',
      },
      categories: idades,
    },
    yaxis: {
      tickAmount: 10,
      labels: {
        style: {
          colors: '#616161',
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
        },
      },
      title: {
        text: 'Altura (cm)',
      },
    },
    grid: {
      show: true,
      borderColor: '#dddddd',
      strokeDashArray: 7,
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: 'light',
    },
  }

  const series = [
    {
      name: 'Curva do crescimento',
      data: alturas,
    },
  ]

  useEffect(() => {
    const fetchMedicoes = async () => {
      const pacienteId = localStorage.getItem('pacienteId')
      const response = await fetch(
        `http://localhost:8080/medicoes?pacienteId=${pacienteId}`,
        {
          method: 'GET',
        }
      )

      if (response.ok) {
        const data = await response.json()
        const listaAlturas = data.map((item: { altura: number }) => item.altura)
        const listaIdades = data.map((item: { idade: number }) => item.idade)
        setAlturas(listaAlturas)
        setIdades(listaIdades)

        console.log('Alturas:', alturas)
        console.log('Idades:', idades)
        console.log('Idades:', data)
      } else {
        console.error('Erro ao buscar medições:', response.statusText)
      }
    }

    fetchMedicoes()
  }, [])

  return (
    <div className="w-full h-screen flex flex-col content-center items-center justify-center">
      <h3 className="mb-4 font-bold">Curva de Crescimento</h3>
      <div className="flex flex-col gap-4 w-64 content-center items-center justify-center">
        <Chart
          options={options}
          series={series}
          type="line"
          width={500}
          height={320}
        />
        <Button text="Voltar" type="button" onClick={onVoltar} />
      </div>
    </div>
  )
}

export default CurvaCrescimento
