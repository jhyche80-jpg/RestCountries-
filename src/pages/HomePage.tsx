import { useContext, useState, type ChangeEvent, } from 'react'
import { CountryContext } from '../Provider/context'
import { useNavigate } from 'react-router-dom'
import PageDisplay from '../components/PageDisplay'
import type { ApiDataType, Country } from '../types/types'
import "./HomePage.css"

export default function HomePage() {
    const details = useContext(CountryContext) as ApiDataType<Country[]> | null
    const navigate = useNavigate()
    const [filterItem, setFilterItem] = useState<string>("")
    const [searchTerm, setSearchTerm] = useState("")
    if (!details) return null
    if (details?.loading) return <p>Loading...</p>
    if (details?.error) return <p>{details.error}</p>
    //filter search and search 


    const HandleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterItem(e.target.value)
    }

    const filteredCountries = details?.data?.filter((country) => {
        const matchesRegion = filterItem === "" || country.region === filterItem
        const MatchesSearch = searchTerm.toLowerCase() === "" || country.name.common.toLowerCase().includes(searchTerm.toLowerCase())

        return matchesRegion && MatchesSearch
    })


    return (
        <div id='CountryList'>
            <div id='InputArea'>

                <span id='Search'>🔍<input type="search" value={searchTerm}
                    placeholder='Search for a Country ...'
                    onChange={(e) => setSearchTerm(e.target.value)} />
                </span>

                <select name="name" id="Selection" onChange={HandleOnChange} >
                    <option value="" >Filter By Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Europe">Europe</option>
                </select>
            </div>


            <div id='RenderedCountryList'>
                {filteredCountries?.map((dets) => (

                    <div key={dets.name.common} >

                        <button className='CountryBtn' onClick={() => navigate(`country/${dets.name.common}`)}>
                            <PageDisplay
                                flag={dets.cca2}
                                population={dets.population}
                                region={dets.region}
                                capital={dets.capital}
                                name={dets.name.common}
                            />
                        </button>
                    </div>


                ))}


            </div>


        </div>
    )
}
