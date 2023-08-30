import { useGetUser } from "@/services/getUsers"
import { UserTypes } from "@/types/types"
import { ArrowUp, MessageSquare } from "lucide-react"
import { useState } from 'react'
import axios from "axios"
import { plusVotes, downVotes } from "@/services/resources"

export default function HomeCards() {

  const { isLoading, data } = useGetUser();
  const [vote, setVote] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('black');

  const updateVotes = async (user: UserTypes<string, number>) => {
    setClicked(!clicked);
    
    if (clicked) {
      axios.patch(`http://localhost:3000/users/${user.id}`, {"color": "black"})
      .then(res => setColor(res.data.color))
      
      return axios.patch(`http://localhost:3000/users/${user.id}/?posts=upvote`, downVotes(user))
      .then(res => setVote(res.data.posts.upvote))
      .catch(err => console.log(err));
    } else {

        axios.patch(`http://localhost:3000/users/${user.id}`, {"color": "orange"})
        .then(res => setColor(res.data.color))

        return axios.patch(`http://localhost:3000/users/${user.id}/?posts=upvote`, plusVotes(user))
      .then(res => setVote(res.data.posts.upvote))
      .catch(err => console.log(err));
    }
     
  }

  if (isLoading) {
    return <h1>Loading ... </h1>
  }
  
  return (
    <div className='flex flex-col space-y-10'>
        {data?.data.map((user: UserTypes<string, number>) => {

            return (
              <div key={user.id} className={`border rounded-md border-cyan-50 max-w-xl mx-auto p-5 shadow-md`}>
                <img src={user.posts.screenshot} className='mx-auto hover:cursor-pointer'/>
                <h1 className='text-3xl font-semibold mt-5'>{user.posts.title}</h1>
                <p className='text-md font-light mt-2'>{user.user_name}</p>

                <div className='flex flex-col mt-2'>
                  <a className='text-sm font-normal mt-1 underline' href="#">Repo: {user.posts.repo} </a>
                  <a className='text-sm font-normal mt-1 underline' href="#">Live: {user.posts.live_demo} </a>
                </div>
                
                <p className='mt-5'>{user.posts.summary}</p>

                <div className='flex gap-5 mt-2'>
                  <section className='flex gap-1 hover: cursor-pointer' onClick={() => updateVotes(user)}>                   
                    <ArrowUp size={18} className="mt-1" color={user.color}/>
                    <p>{user.posts.upvote}</p>
                  </section> 
                  <section className='flex gap-1 hover: cursor-pointer'>
                    <MessageSquare size={18} className='mt-1'/>
                    <p>{user.posts.comments.length}</p>
                  </section>
                </div>

              </div>
            )
        })}
    </div>
  )
}
