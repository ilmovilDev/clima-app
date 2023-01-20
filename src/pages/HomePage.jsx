import { useEffect } from "react"
import { Grid } from "@mui/material"
import { CardContent, NavBar } from "../components"
import { useClimaStore } from "../hooks/useClimaStore"
import { LoadingCity } from "../ui/LoadingCity"

export const HomePage = () => {

  const { isActive, isLoading, getWeatherApi, getForecastApi } = useClimaStore()

  useEffect(() => {
    getWeatherApi()
    getForecastApi()
  },[])
  

  return (
        <Grid
          container
          className="bg-body"
          direction='column'
          justifyContent='center'
          alignItems='center'
          sx={{
            minHeight: '100vh',
            maxWidth: '100%',
            //backgroundColor:'primary.main',
            paddingTop: {
              xs: 10,
            }
          }}
        >

          <NavBar/>

          <CardContent/>

        </Grid>
  )
}


