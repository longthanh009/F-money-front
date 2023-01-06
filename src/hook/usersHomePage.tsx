import useSWR from 'swr'
import intance from './../api/intance';
const enpoint = "/users"
const fetcher = async (url: any) => await intance.get(url)
const useLender = () => {
    const { data, error, mutate } = useSWR(enpoint, fetcher, {
        refreshInterval: 10000
    })

    return {
        data, error
    }
}
export default useLender
