


// a function to fetch an Api 
export async function FetchAPi<T>(url: string): Promise<T> {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Request Failed: ${res.status}`)
    return res.json()
}