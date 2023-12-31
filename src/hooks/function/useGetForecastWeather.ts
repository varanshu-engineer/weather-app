import React, { useState } from 'react'

interface state {
    response: null | any,
    loading: boolean,
    error: null | any
}

const convertTo5Day = (result: any) => {
    let weatherDays: any[] = []
    const shortenedArray = result.filter((item: any) => {
        const timestamp = new Date(item.dt_txt)
        const date = `${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear() + 1}`
        if (!weatherDays.includes(date) && timestamp.getHours() > 0) {
            weatherDays.push(date)
            return true
        }
    })
    return shortenedArray
}

export const useGetForecastWeather = () => {
    const getForecastWeather = async (lat: string, lon: string) => {
        try {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
            const output = await data.json()
            const listOfDays = convertTo5Day(output.list)
            return { response: listOfDays, error: null }
        } catch (error) {
            return { response: null, error: error }
        }
    }

    return getForecastWeather
}