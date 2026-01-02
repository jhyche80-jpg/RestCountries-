import { useEffect, useState } from 'react'

import { FetchAPi } from '../utils/utils'
import { CountryContext } from './context'
import type { ApiDataType } from '../types/types'

export default function DataProvider({ children }: { children: React.ReactNode }) {
    const [countryInfo, setCountryInfo] = useState<ApiDataType<any>>({
        data: null,
        loading: true,
        error: null
    })

    //use use effect to fetch the Api 
    useEffect(() => {
        FetchAPi('https://restcountries.com/v3.1/all?fields=region,flag,population,name,capital,languages,subregion,currencies,borders,cca2')
            .then((res) => setCountryInfo({ data: res, loading: false, error: null }))
            .catch((err) => setCountryInfo({ data: null, loading: false, error: err.message }));
    }, [])




    return (
        <div>
            <CountryContext.Provider value={countryInfo}>
                {children}
            </CountryContext.Provider>

        </div>
    )
}
