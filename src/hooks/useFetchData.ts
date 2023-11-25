import { useEffect, useState } from "react"

export function useFetchData<T, A>({
    fetchingMethod,
    args,
}:{
    fetchingMethod(args: A): Promise<T>,
    args: A,    
}, watchProps: any[]) {

    const [ data, setData ] = useState<T>()
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try{
                setIsLoading(true)

                const data = await fetchingMethod(args)
                
                setData(data)
                setIsLoading(false)
            }
            catch(e) {
                setData(undefined)
                setIsLoading(false)
                setError('API_ERROR')
            }
        }

        fetchData()
    }, watchProps)

    return {
        data,
        isLoading,
        error,
        clearError: () => setError('')
    }
}