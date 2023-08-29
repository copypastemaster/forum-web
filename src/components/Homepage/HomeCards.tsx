import { useGetUser } from "@/services/getUsers"
import { UserTypes } from "@/types/types"
import { ArrowUp, MessageSquare } from "lucide-react"
import { useState } from 'react'
import axios from "axios"

export default function HomeCards() {

  const { isLoading, data } = useGetUser();
  const [vote, setVote] = useState(); 
  
  if (isLoading) {
    return <h1>Loading ... </h1>
  }
  
  return (
    <div className='flex flex-col space-y-10'>
        {data?.data.map((user: UserTypes<string, number>) => {
          const votes = {
            "id": user.id,
            "user_name": user.user_name,
            "avatar": user.avatar,
            "posts": {
              "screenshot": user.posts.screenshot,
              "title": user.posts.title,
              "summary": user.posts.summary,
              "repo": user.posts.repo,
              "live_demo": user.posts.live_demo,
              "comments": [
                user.posts.comments
              ],
              "upvote": user.posts.upvote++
      }

          }
            return (
              <div key={user.id} className={`border rounded-md border-cyan-50 max-w-xl mx-auto p-5 shadow-md`}>
                <img src={user.posts.screenshot} className='mx-auto hover:cursor-pointer'/>
                <h1 className='text-3xl font-semibold mt-5'>{user.posts.title}</h1>
                <p className='text-sm font-light mt-2 underline'>{user.user_name}</p>
                <p className='mt-3'>{user.posts.summary}</p>
                <div className='flex gap-5 mt-2'>
                  <section className='flex gap-1 hover: cursor-pointer' onClick={() => {
                    axios.patch(`http://localhost:3000/users/${user.id}/?posts=upvote`, votes)
                      .then(res => console.log(res.data.posts.upvote++))
                      .catch(err => console.log(err));
                  }}>
                    <ArrowUp size={18} className="mt-1"/>
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
