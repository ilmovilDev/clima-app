import { createSlice } from '@reduxjs/toolkit';

export const climaSlice = createSlice({

    name: 'clima',
    initialState: {
        isLoading: false,
        isActive: false,
        cities: [],
        dailyForecast: [],
        hourlyForecast: [],
        errorMessage: ''
    },
    reducers: {
        setLoading: ( state ) => {
            state.isLoading = true
        },
        setCity: ( state, { payload }) => {
            state.cities = payload
            state.isActive = true
            state.isLoading = false
            state.errorMessage = null
        },
        setDailyForecast: ( state, { payload }) => {
            state.dailyForecast = payload
            state.isActive = true
            state.isLoading = false
            state.errorMessage = null
        },
        setError: ( state, { payload } ) => {
            state.isLoading = false
            state.isActive = false
            state.cities = []
            state.dailyForecast = []
            state.errorMessage = payload
        },
    },
});

export const { setLoading, setCity, setDailyForecast, setHourlyForecast, setError } = climaSlice.actions