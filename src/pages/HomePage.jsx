import { useEffect } from "react"
import { Grid } from "@mui/material"
import { CardContent, NavBar } from "../components"
import { useClimaStore } from "../hooks/useClimaStore"

export const HomePage = () => {

  const { getWeatherApi, getForecastApi } = useClimaStore()

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


