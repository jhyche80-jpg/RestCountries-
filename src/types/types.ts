

export interface HomePageCountry {
    flag: string
    population: number | string
    reigion: string
    capital: string
    name: string
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
    language: string
    border: string
}

export type ApiDataType<T> = {
    info: T | null
    loading: boolean
    error: string | null
}