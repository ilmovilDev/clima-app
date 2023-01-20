import { Grid, Skeleton } from '@mui/material'
import React from 'react'

export const SkeletonComp = () => {
  return (
    <Grid
        item
        xs={12} md={6} lg={3}
        textAlign='center'
    >
        <Skeleton
            variant="circular"
            width={200}
            height={200}
            sx={{
                marginX: 'auto',
                marginBottom: 2
            }}
        />
        <Skeleton
            variant="rectangular"
            width={280}
            height={80}
            sx={{
                marginX: 'auto',
            }}
        />
        <Skeleton
            variant="text"
            width={280}
            height={40}
            sx={{
                marginX: 'auto'
            }}
        />
        <Skeleton
            variant="text"
            width={280}
            height={80}
            sx={{
                marginX: 'auto'
            }}
        />
    </Grid>
  )
}
