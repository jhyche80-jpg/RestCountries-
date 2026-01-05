import React from 'react'
import type { HomePageCountry } from '../types/types'
import "./Display.css"
export default function PageDisplay({ flag, population, region, capital, name }: HomePageCountry) {
    return (
        <div id="CountryPreview">
            <img className="FlagImgPreview" src={`https://flagsapi.com/${flag}/flat/64.png`} alt={`Photo of ${name}'s flag`} />

            <h3>{name}</h3>
            <p>Population: {population.toLocaleString()}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>

        </div>
    )
}
