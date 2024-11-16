import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import Chart from 'react-apexcharts'
type PropsChart = object

const CurvaCrescimento = () => {
  const navigate = useNavigate()
  const onVoltar = () => {
    navigate('/home')
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
      categories: [0, 10, 20, 30, 40, 50, 60],
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
      data: [50, 65, 72, 80, 85, 90, 95],
    },
  ]

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
