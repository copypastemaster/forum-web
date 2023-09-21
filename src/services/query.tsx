import axios from 'axios'
import { useQuery, } from 'react-query'
import { plusVotes, downVotes } from "@/services/upvoteUpdate"
import { UserTypes } from '@/types/types'

const users = 'http://localhost:3000/users'
const userComments = 'http://localhost:3000/comments'

export function useGetUser () {
    const { isLoading, data, error } = useQuery('users', () => {
        return axios.get(users).then(res => res.data);             
    })

    return {
        isLoading, 
        data,
        error
    }
}

export function useGetComments () {
    const { isLoading, data, error, refetch } = useQuery('comments', () => {
        return axios.get(userComments).then(res => res.data);
    })

    return {
        isLoading, 
        data, 
        error,
        refetch
    }
}

export const updateVotes = async (user: UserTypes<string, number, boolean>, clicked: boolean, setter: React.Dispatch<React.SetStateAction<null>>) => {
    
    if (clicked) {
      user.state = !user.state;
      return axios.patch(`http://localhost:3000/users/${user.id}/?posts=upvote`, downVotes(user))
      .then(res => setter( res.data.posts.downvote))
      .catch(err => console.log(err));

    } else {
      user.state = !user.state; 
        return axios.patch(`http://localhost:3000/users/${user.id}/?posts=upvote`, plusVotes(user))
       .then(res => setter(res.data.posts.upvote))
       .catch(err => console.log(err));
    }
  }

//   const getComments = async (id: number) => {
//     const comments = await axios.get(userComments + `?userId=${id}`);
//     const res = await comments.data;
//     console.log(res);
//     return res;
//   }


