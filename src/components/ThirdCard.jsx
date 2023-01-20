import { Grid, Stack, Typography } from '@mui/material'
import { useClimaStore } from '../hooks/useClimaStore'

import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined'; //tormenta
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'; //soleado
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined'; //nublado
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'; //nevando
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined'; //chuva leve
import FloodOutlinedIcon from '@mui/icons-material/FloodOutlined'; //chuva moderada

export const ThirdCard = () => {

  let icon = '';

  const { dailyForecast } = useClimaStore()

  switch ( dailyForecast.desc_2 ){
    case 'chuva leve':
        icon = <BeachAccessOutlinedIcon color="light" sx={{width: '6rem', height: '6rem'}}/>
        break;
    case 'nublado':
        icon = <CloudOutlinedIcon color="light" sx={{width: '6rem', height: '6rem'}}/>
        break;
    case 'céu limpo':
        icon = <WbSunnyOutlinedIcon color="light" sx={{width: '6rem', height: '6rem'}}/>
        break;
    case 'pouca neve':
        icon = <AcUnitOutlinedIcon color="light" sx={{width: '6rem', height: '6rem'}}/>
        break;
    case 'nuvens dispersas':
        icon = <CloudOutlinedIcon color="light" sx={{width: '6rem', height: '6rem'}}/>
        break;
    case 'algumas nuvens':
        icon = <CloudOutlinedIcon color="light" sx={{width: '6rem', height: '6rem'}}/>
        break;
    case 'trovoadas':
        icon = <ThunderstormOutlinedIcon color="light" sx={{width: '6rem', height: '6rem'}}/>
        break;
    case 'névoa':
        icon = <AcUnitOutlinedIcon color="light" sx={{width: '6rem', height: '6rem'}}/>
        break;
    case 'chuva moderada':
        icon = <FloodOutlinedIcon color="light" sx={{width: '6rem', height: '6rem'}}/>
        break;
    default:
        icon = <WbSunnyOutlinedIcon color="light" sx={{width: '6rem', height: '6rem'}}/> 
  }

  return (
    <Grid
        item
        className="box-shadow card-transformer"
        position='relative'
        xs={12} md={6} lg={3}
        sx={{
          backgroundColor: 'secondary.main',
          padding: 2,
          height: {
            xs: '480px',
            md: '500px',
          }
        }}
    >
      {/** FECHA */}
      <Grid
        item
        textAlign='start'
        sx={{
          marginBottom: 10
        }}
      >
        <Typography
          variant="titulo1"
          sx={{
            fontSize: 30,
            color: 'light.main'
          }}
        >
          { dailyForecast.forecastDate_2 }
        </Typography>
      </Grid>

      {/** TEMP - ICON */}
      <Stack
          direction='row'
          justifyContent='center'
          alignItems='center'
          className="pos"
      >
          <Typography
              variant="h1"
              className="text-temp"
              sx={{
                  //flexGrow: 1,
                  marginRight: 2,
                  color: 'light.main',
              }}
          >
              { (dailyForecast.temp_2 - 273.15).toFixed(0) }°
          </Typography>
          <Typography
              variant="h1"
          >
          {
            icon
          }
          </Typography>
      </Stack>

      <Grid
          item
          textAlign='center'
          className="pos_2"
      >
          <Typography
              variant="titulo1"
              sx={{
                  color:'titulo.main',
                  textTransform: 'capitalize',
                  letterSpacing: 2
              }}
          >
              {`previsão para ${ dailyForecast.forecastDate_2 } é: `}
              <span className="text-white">{ dailyForecast.desc_2 }</span>
          </Typography>
      </Grid>


    </Grid>
  )
}
