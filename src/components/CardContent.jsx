import { Grid } from '@mui/material'
import { FirstCard, QuarterCard, SeconCard, SkeletonComp, ThirdCard } from "../components"
import { useClimaStore } from '../hooks/useClimaStore'

export const CardContent = () => {

  const { cities } = useClimaStore()
    
  return (
    <Grid
        container
        className='animate__animated animate__fadeIn animate__delay-1s animate__slow'
        sx={{
            padding: {
            xs: 2,
            sm: 4,
            md: 6,
            lg: 8
            },
            minHeight: '70vh'
        }}
        >
        {
          cities.temp ? <FirstCard/> : <SkeletonComp/>
        }
        {
          cities.temp ? <SeconCard/> : <SkeletonComp/>
        }
        {
          cities.temp ? <ThirdCard/> : <SkeletonComp/>
        }
        {
          cities.temp ? <QuarterCard/> : <SkeletonComp/>
        }
    </Grid>
  )
}
