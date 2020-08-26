import { AxiosWithAuth } from './llAxiosWithAuth'

export function fetchApi() {
    axiosWithAuth()
    .get('/api/friends')
    .then((res) => {
        return res
    })
    .catch((err) => console.log(err))
}