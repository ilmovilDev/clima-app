import { useEffect, useState } from "react";
import { AppBar, Skeleton, Toolbar, Typography } from "@mui/material"

import { useClimaStore } from "../hooks/useClimaStore";
import { SearchCity } from "./SearchCity";


export const NavBar = () => {

    const { cities } = useClimaStore()

    const [sticky, setSticky] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setSticky( window.scrollY > 40 );
        //console.log( window.scrollY )
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll );
    
    }, [])

  return (
    <AppBar
        elevation={`${ sticky ? '5' : '0' }`}
        color={`${ sticky ? 'primary' : 'transparent' }`}
        sx={{
            paddingY: 2,
            paddingX: 1
        }}
    >
        <Toolbar
            className="space-between"
        >

            {
                cities.temp
                ?   
                    <Typography
                        variant='titulo1'
                        className="" 
                        component="div" 
                        sx={{ 
                            color: 'light.main',
                            letterSpacing: 2,
                            marginX: 1,
                            fontSize: {
                                xs: 17.50,
                                md: 25
                            }
                        }}
                    >
                        {`${ cities.city }, ${ cities.country } `}
                    </Typography>
                :   
                    <Skeleton
                        variant="rectangular"
                        width={180}
                        height={40}
                    />
            }

            <SearchCity/>

        </Toolbar>
    </AppBar>
  )
}
