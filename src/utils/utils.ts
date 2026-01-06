
import "flag-icons/css/flag-icons.min.css"
import type { ThemeMode } from "../types/types"

// a function to fetch an Api 
export async function FetchAPi<T>(url: string): Promise<T> {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Request Failed: ${res.status}`)
    return res.json()
}

export function ModeCheck(light: string, dark: string, mode: ThemeMode) {
    return mode === "light" ? light : dark

}
