import { useEffect, useState, type ReactNode } from 'react'

import { FetchAPi } from '../utils/utils'
import { CountryContext } from './context'
import type { ApiDataType } from '../types/types'

export default function DataProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<ApiDataType<any>>({
        info: null,
        loading: true,
        error: null
    })

    //use use effect to fetch the Api 
    useEffect(() => {
        FetchAPi('https://restcountries.com/v3.1/all?fields=region,flag,population,name,capital,languages,subregion,currencies')
            .then((res) => setData({ info: res, loading: false, error: null }))
            .catch((err) => setData({ info: null, loading: false, error: err.message }));
    }, [])




    return (
        <div>
            <CountryContext.Provider value={data}>
                {children}
            </CountryContext.Provider>

        </div>
    )
}
