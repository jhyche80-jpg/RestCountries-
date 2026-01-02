import React from 'react'
import type { HomePageCountry } from '../types/types'

export default function PageDisplay({ flag, population, reigion, capital, name }: HomePageCountry) {
    return (
        <div>
            <img src={`https://flagsapi.com/${flag}/flat/64.png`} alt={`Photo of ${name}'s flag`} />
            <h3>{name}</h3>
            <p>Population: {population}</p>
            <p>Region: {reigion}</p>
            <p>Capital: {capital}</p>

        </div>
    )
}
