import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { type Country } from '../types/types'
import { FetchAPi, ModeCheck } from '../utils/utils'
import "./Display.css"
import { ModeContext } from '../Provider/context'

export default function CountryDisplay() {
    const { country } = useParams<{ country: string }>()
    const [data, setData] = useState<Country[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [borderNames, setBorderNames] = useState<Record<string, string>>({})

    const navigate = useNavigate()
    const { theme } = useContext(ModeContext)
    //  Fetch country
    useEffect(() => {
        setLoading(true)
        setError(null)
        // make sure it doesn't show partials
        FetchAPi(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
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
        <div id='CountryDisplayBox'>
            <button onClick={() => navigate(-1)} id='BackBtn' className={ModeCheck("BackBtnLight", " BackBtnDark", theme)}>← Back</button>

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
                                    id='BorderBtn'
                                    onClick={() => navigate(`/country/${name}`)}
                                    className={ModeCheck("borderBtnLight", "borderBtnDark", theme)

                                    }
                                >
                                    {name}
                                </button>
                            )
                        })
                        : 'N/A'



                return (
                    <div key={c.name.common} id='CountryDisplayArea' >
                        <div id='CountryImgContainer'>
                            <img
                                src={`https://flagcdn.com/${c.cca2.toLowerCase()}.svg`}
                                alt={`Flag of ${c.name.common}`}
                                id='CountryDisplayImg'
                            />
                        </div>

                        <div id='CountryBox'>
                            <h2>{c.name.common}</h2>
                            <div id='CountryBox2'>

                                <div id='CountryBox3' >
                                    <p className='DetailFont'><strong>Native Name:</strong> {firstNative}</p>
                                    <p className='DetailFont'><strong>Population:</strong> {c.population.toLocaleString()}</p>
                                    <p className='DetailFont'><strong>Region:</strong> {c.region}</p>
                                    <p className='DetailFont'><strong>Sub Region:</strong> {c.subregion}</p>
                                    <p className='DetailFont'><strong>Capital:</strong> {c.capital}</p>
                                </div>

                                <div>
                                    <p className='DetailFont'><strong>Top Level Domain:</strong> .{c.cca2.toLowerCase()}</p>
                                    <p className='DetailFont'><strong>Currencies:</strong> {money}</p>
                                    <p className='DetailFont'><strong>Languages:</strong> {languages}</p>

                                </div>


                            </div>
                            <p className='DetailFont'><strong>Border Countries:</strong>  {Borders}</p>

                        </div>

                    </div>
                )
            })}
        </div>
    )
}
