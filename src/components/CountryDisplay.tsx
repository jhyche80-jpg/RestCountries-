import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { type ApiDataType, type Country } from '../types/types'
import { FetchAPi } from '../utils/utils'

export default function CountryDisplay() {


    const { country } = useParams<{ country: string }>()
    const [data, setData] = useState<Country[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>()


    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        setError(null)
        FetchAPi(`https://restcountries.com/v3.1/name/${country}`)
            .then((res) => setData((res as Country[]) || []))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [country])
    if (loading) return < p > loading...</p >
    if (error) return <p>{error}</p>


    return (
        <div>

            <button onClick={() => navigate(-1)}>Back</button>
            {data.map((c) => {

                const nativeName = c.name.nativeName
                const firstNative = nativeName ? Object.values(nativeName)[0]?.common : "N/A"

                const currency = c.currencies
                const money = currency ? Object.values(currency)[0]?.name : "N/A"


                const languages = c.languages ? Object.values(c.languages).join(", ") : 'N/A'

                //borders 
                const LangNames = new Intl.DisplayNames('en', { type: "language" })
                const Borders = c.borders ? Object.values(c.borders).map((b) => (<p>{LangNames.of(b)}</p>


                )) : "N/A"

                return (<div key={c.name.common}>
                    <img src={`https://flagsapi.com/${c.cca2}/flat/64.png`} alt={`Photo of ${c.name.common}'s flag`} />


                    <div>
                        <div>
                            <h2>{c.name.common}</h2>
                            <p><strong>Native Name: </strong>{firstNative}</p>
                            <p><strong> Population: </strong>{c.population.toLocaleString('en')}</p>
                            <p><strong> Region: </strong> {c.region}</p>
                            <p><strong>   Sub Region: </strong>{c.subregion}</p>
                            <p><strong>  Capital: </strong>{c.capital}</p>

                        </div>
                        <div>
                            <p><strong> Top  Level Domain: </strong>.{(c.cca2).toLowerCase()}</p>
                            <p><strong>  Currencies: </strong> {money}</p>
                            <p><strong> Languages: </strong> {languages}</p>

                        </div>
                        <div >
                            <p>Border Countries: {Borders} </p>

                        </div>
                    </div>



                </div>)


            }
            )
            }





        </div>
    )
}
