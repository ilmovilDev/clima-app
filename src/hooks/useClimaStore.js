import { useDispatch, useSelector } from "react-redux"
import { getApi } from "../api/getApi"
import { setCity, setError, setDailyForecast } from "../store/slice/climaSlice"

const lang_Br = '&lang=pt_br'
const API_KEY = 'fc4a513debeb8fcc3811b39907ffca4c';

const urlWeather = `weather?&appid=${ API_KEY }${ lang_Br }&q=`
const urlForecast = `/forecast?appid=${ API_KEY }${ lang_Br }&q=`


export const useClimaStore = () => {

    const dispath = useDispatch()
    const { isLoading, isActive, cities, dailyForecast, hourlyForecast, errorMessage } = useSelector( state => state.clima)

    const getWeatherApi = async ( cit = 'curitiba' ) => {

        const currentDate = new Date().toLocaleDateString('pr-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

        const currentTime = new Date().toLocaleTimeString()

        try{

            const { data } = await getApi.get(`${ urlWeather }${ cit }`)

            dispath(setCity({
                city: data.name,
                country: data.sys.country,
                cityDate: currentDate,
                localTime: currentTime,
                temp: data.main.temp,
                temp_min: data.main.temp_min,
                temp_max: data.main.temp_max,
                feels_like: data.main.feels_like,
                humidity: data.main.humidity,
                speed: data.wind.speed,
                icon: data.weather[0].icon,
                description: data.weather[0].description
            })) 

        } catch ( error ) {
            dispath( setError( error.message ))
        }  
    
    }

    const getForecastApi = async ( cit = 'curitiba' ) => {

        const dataDay = ( d ) => {

            const semana = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']
        
            const newDate = new Date()
            newDate.setDate( newDate.getDate() + d )
        
            const dayParams = ( newDate.getDay() )
            const day = semana[dayParams]

            return day

        }

        try{

            const { data } = await getApi.get(`${ urlForecast }${ cit }`)

            dispath(setDailyForecast({
                icon_1: data.list[7].weather[0].icon,
                icon_2: data.list[15].weather[0].icon,
                icon_3: data.list[23].weather[0].icon,
                forecastDate_1: dataDay(1),
                forecastDate_2: dataDay(2),
                forecastDate_3: dataDay(3),
                temp_1: data.list[7].main.temp,
                temp_2: data.list[15].main.temp,
                temp_3: data.list[23].main.temp,
                desc_1: data.list[7].weather[0].description,
                desc_2: data.list[15].weather[0].description,
                desc_3: data.list[23].weather[0].description,
            }))

        } catch ( error ){
            dispath( setError( error.message ))
        }
        
    }

    return{
        //Props
        isLoading,
        isActive,
        cities,
        dailyForecast,
        hourlyForecast,
        errorMessage,


        //Metodos
        getWeatherApi,
        getForecastApi
    }

}