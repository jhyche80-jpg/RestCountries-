import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { type Country } from '../types/types'
import { FetchAPi } from '../utils/utils'

export default function CountryDisplay() {
    const { country } = useParams<{ country: string }>()
    const [data, setData] = useState<Country[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [borderNames, setBorderNames] = useState<Record<string, string>>({})

    const navigate = useNavigate()

    //  Fetch country
    useEffect(() => {
        setLoading(true)
        setError(null)

        FetchAPi(`https://restcountries.com/v3.1/name/${country}`)
            .then((res) => setData((res as Country[]) || []))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false))
    }, [country])

    // Fetch border names
    useEffect(() => {
        if (!data.length || !data[0].borders?.length) return

        const countryCodes = data[0].borders.join(',')

        FetchAPi(
            `https://restcountries.com/v3.1/alpha?codes=${countryCodes}&fields=cca3,name`
        )
            .then((res) => {
                const map: Record<string, string> = {}
                res.forEach((c: any) => {
                    map[c.cca3] = c.name.common
                })
                setBorderNames(map)
            })
            .catch(() => setBorderNames({}))
    }, [data])

    // Returns AFTER hooks
    if (loading) return <p>loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <button onClick={() => navigate('/')}>Back</button>

            {data.map((c) => {
                const nativeName = c.name.nativeName
                const firstNative = nativeName
                    ? Object.values(nativeName)[0]?.common
                    : 'N/A'

                const money = c.currencies
                    ? Object.values(c.currencies)[0]?.name
                    : 'N/A'

                const languages = c.languages
                    ? Object.values(c.languages).join(', ')
                    : 'N/A'
                const Borders =
                    Array.isArray(c.borders) && c.borders.length > 0
                        ? c.borders.map((b) => {
                            const name = borderNames[b] ?? b

                            return (
                                <button
                                    key={b}
                                    style={{ marginRight: '8px' }}
                                    onClick={() => navigate(`/country/${name}`)}
                                >
                                    {name}
                                </button>
                            )
                        })
                        : 'N/A'



                return (
                    <div key={c.name.common}>
                        <img
                            src={`https://flagsapi.com/${c.cca2}/flat/64.png`}
                            alt={`Flag of ${c.name.common}`}
                        />

                        <h2>{c.name.common}</h2>
                        <p><strong>Native Name:</strong> {firstNative}</p>
                        <p><strong>Population:</strong> {c.population.toLocaleString()}</p>
                        <p><strong>Region:</strong> {c.region}</p>
                        <p><strong>Sub Region:</strong> {c.subregion}</p>
                        <p><strong>Capital:</strong> {c.capital}</p>
                        <p><strong>Top Level Domain:</strong> .{c.cca2.toLowerCase()}</p>
                        <p><strong>Currencies:</strong> {money}</p>
                        <p><strong>Languages:</strong> {languages}</p>
                        <p><strong>Border Countries:</strong> {Borders}</p>
                    </div>
                )
            })}
        </div>
    )
}
