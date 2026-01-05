import React from 'react'
import type { HomePageCountry } from '../types/types'
import "./Display.css"

export default function PageDisplay({ flag, population, region, capital, name }: HomePageCountry) {

    return (
        <div className="CountryPreview">
            <div id='PreviewImg'>
                <img
                    src={`https://flagcdn.com/${flag.toLowerCase()}.svg`}
                    alt={`${name} flag`}
                    className='PreviewImg' />
            </div>

            <div id={'PreviewDetails'}>
                <h3>{name}</h3>
                <p>Population: {population.toLocaleString()}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>


        </div>
    )
}
