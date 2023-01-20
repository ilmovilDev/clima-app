import { Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Skeleton, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useClimaStore } from "../hooks/useClimaStore";

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';
import ThermostatIcon from '@mui/icons-material/Thermostat';

import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined'; //tormenta
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'; //soleado
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined'; //nublado
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'; //nevando
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined'; //chuva leve
import FloodOutlinedIcon from '@mui/icons-material/FloodOutlined'; //chuva moderada

export const FirstCard = () => {

    let icon = '';
    const { cities } = useClimaStore()

    const dataTemp = [
        {
            icon: <ArrowDownwardIcon fontSize="large"/>,
            name: 'temperatura mínima',
            data: `${(cities.temp_min -273.15).toFixed(0)} °`
        },
        {
            icon: <ArrowUpwardIcon fontSize="large"/>,
            name: 'temperatura máxima',
            data: `${(cities.temp_max -273.15).toFixed(0)} °`
        },
        {
            icon: <ThermostatIcon fontSize="large"/>,
            name: 'sensação térmica',
            data: `${(cities.feels_like -273.15).toFixed(0)} °`
        },
        {
            icon: <WaterIcon fontSize="large"/>,
            name: 'Umidade',
            data: `${cities.humidity} %`
        },
        {
            icon: <AirIcon fontSize="large"/>,
            name: 'Velocidade do vento',
            data: `${cities.speed} m/s`
        },
    ]

    switch ( cities.description ){
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
        case 'neve':
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
        className="card-transformer"
        xs={12} md={6} lg={3}
        sx={{
            padding: 2,
            height: {
                xs: '480px',
                md: '500px',
            }
        }}
    >
        
        {/** TEMP - ICON */}
        <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
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
                { (cities.temp - 273.15).toFixed(0) }°
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
            textAlign= 'center'
            sx={{
                marginBottom: 2
            }}
        >
            <Typography
                variant="titulo1"
                sx={{
                    color:'titulo.main',
                    textTransform: 'capitalize',
                    letterSpacing: 1.5,
                    fontSize: {
                        xs: 15,
                        md: 20
                    }
                }}
            >
                { cities.description }
            </Typography>
        </Grid>

        <List
            sx={{
                color: 'titulo.main'
            }}
        >
            {
                dataTemp.map(( item, index ) => (
                    <ListItem
                        key={ index }
                    >
                        <ListItemIcon
                            sx={{
                                color: 'titulo.main'
                            }}
                        >
                            {
                                item.icon
                            }
                        </ListItemIcon>
                        <ListItemText>
                            <Typography
                                variant="titulo1"
                            >
                                {`${ item.name }: `}
                                <span className="text-white">{ item.data }</span>
                            </Typography>
                        </ListItemText>      
                    </ListItem>
                ))
            }
        </List>

        

    </Grid>
  )
}
