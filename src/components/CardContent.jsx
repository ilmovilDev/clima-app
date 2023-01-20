import { Grid } from '@mui/material'
import { FirstCard, QuarterCard, SeconCard, ThirdCard } from "../components"

export const CardContent = () => {
    
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
        <FirstCard/>
        <SeconCard/>
        <ThirdCard/>
        <QuarterCard/>
    </Grid>
  )
}
