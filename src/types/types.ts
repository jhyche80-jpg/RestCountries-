

export interface HomePageCountry {
    flag: string
    population: number | string
    region: string
    capital: string
    name: string
}

export interface Country {
    flag: string
    population: number
    region: string
    subregion: string
    capital: string
    cca2: string
    name: {
        common: string
        nativeName?: Record<string, { common: string }>
    }
    languages?: Record<string, string[]>
    currencies?: Record<string, { name: string }>
    borders?: string
    tld?: string
}

export interface CountryPage {
    nativeName: string
    population: string | number
    reigion: string
    subRegion: string
    capital: string
    domain: string
    flag: string
    currencies: string
    language: string[]
    border: string[]
}

export type ApiDataType<T> = {
    data: T | null
    loading: boolean
    error: string | null
}