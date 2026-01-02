import { useContext } from 'react'
import { CountryContext } from '../Provider/context'
import { useNavigate } from 'react-router-dom'
import PageDisplay from '../components/PageDisplay'
import type { ApiDataType, CountryPage, Country } from '../types/types'

export default function HomePage() {
    const details = useContext(CountryContext) as ApiDataType<Country[]> | null
    const navigate = useNavigate()

    if (!details) return null
    if (details?.loading) return <p>Loading...</p>
    if (details?.error) return <p>{details.error}</p>

    return (
        <div id='CountryList'>

            {details?.data?.map((dets) => (

                <div key={dets.name.common}>

                    <button className='CountryBtn' onClick={() => navigate(`country/${dets.name}`)}>
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
    )
}
