import React, { useContext } from 'react'
import type { HomePageCountry } from '../types/types'
import "./Display.css"
import { ModeCheck } from '../utils/utils'
import { ModeContext } from '../Provider/context'

export default function PageDisplay({ flag, population, region, capital, name }: HomePageCountry) {

    const { theme } = useContext(ModeContext)
    return (
        <div className="CountryPreview">
            <div id='PreviewImg'>
                <img
                    src={`https://flagcdn.com/${flag.toLowerCase()}.svg`}
                    alt={`${name} flag`}
                    className='PreviewImg' />
            </div>

            <div id={'PreviewDetails'} className={ModeCheck("CDALight", "CDADark", theme)}>
                <h3>{name}</h3>
                <p>Population: {population.toLocaleString()}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>


        </div>
    )
}
