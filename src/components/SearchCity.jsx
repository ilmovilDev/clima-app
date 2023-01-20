import { useState } from "react";
import { InputAdornment, TextField } from "@mui/material"
import { useClimaStore } from "../hooks/useClimaStore";

import SearchIcon from '@mui/icons-material/Search';


export const SearchCity = () => {

  const { getWeatherApi, getForecastApi } = useClimaStore()
  const [city, setCity] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if( city.length < 2 ) return
    getWeatherApi( city )
    getForecastApi( city )
    setCity('')
  }


  return (
    <form
        noValidate
        autoComplete="off"
        onSubmit={ onSubmit }
    >
        <TextField
            label="Cidade"
            variant="outlined"
            value={ city }
            onChange={ (e) => setCity( e.target.value )}
            autoFocus
            focused 
            color="subtitulo"
            sx={{
              input: {
                color: 'subtitulo.main',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  aria-label="search"   
                  sx={{
                    color: 'subtitulo.main',
                    cursor:'pointer'
                  }}
                >
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
        />
    </form>
  )
}
