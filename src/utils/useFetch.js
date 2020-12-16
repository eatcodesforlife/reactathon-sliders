import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
    
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    
    const getData = useCallback(async () => {
        const res = await fetch(url)
        const users =  await res.json()
        
        setIsLoading(false)
        setData(users)
    }, [url])
    
    useEffect(() => {
        getData()
    }, [url, getData])

    return { data, isLoading }
}
