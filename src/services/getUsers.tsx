import axios from 'axios'
import { useQuery, } from 'react-query'

export function useGetUser () {
    const { isLoading, data } = useQuery('users', () => {
        return axios.get('http://localhost:3000/users')
    })

    return {
        isLoading, 
        data
    }
}

// const updateVote = (vote: number) => {
//     return axios.put(`http://localhost:3000/users/`, vote)
// }



