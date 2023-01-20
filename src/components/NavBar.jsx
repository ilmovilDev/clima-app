import { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material"

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
        <Toolbar>
            <Typography
                variant='titulo1' 
                component="div" 
                sx={{ 
                    flexGrow: 1,
                    color: 'light.main',
                    letterSpacing: 2,
                    marginX: 1,
                    fontSize: {
                        xs: 17.50,
                        md: 25
                    }
                }}
            >
                {`${ cities.city }, ${ cities.country }`} 
            </Typography>

            <SearchCity/>

        </Toolbar>
    </AppBar>
  )
}
