import { useGetUser } from "@/services/getUsers"
import { UserTypes, Comments } from "@/types/types"
import { ArrowUp, MessageSquare, SendHorizontal, X } from "lucide-react"
import { useState } from 'react'
import axios from "axios"
import { plusVotes, downVotes } from "@/services/resources"
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'

export default function HomeCards() {

  const { isLoading, data } = useGetUser();
  const [vote, setVote] = useState(null);
  const [clicked, setClicked] = useState(false);
  

  const updateVotes = async (user: UserTypes<string, number, boolean>) => {
    setClicked(!clicked);
    
    if (clicked) {
      user.state = !user.state;
      return axios.patch(`http://localhost:3000/users/${user.id}/?posts=upvote`, downVotes(user))
      .then(res => setVote( res.data.posts.downvote))
      .catch(err => console.log(err));

    } else {
      user.state = !user.state;
        return axios.patch(`http://localhost:3000/users/${user.id}/?posts=upvote`, plusVotes(user))
       .then(res => setVote(res.data.posts.upvote))
       .catch(err => console.log(err));
    }
  }

  if (isLoading) {
    return <h1>Loading ... </h1>
  }

  
  return (
    
    <div className='flex flex-col space-y-10 mt-10'>      
        {data?.data.map((user: UserTypes<string, number, boolean>) => {

            return (
              <Collapsible key={user.id} className={`border rounded-md border-cyan-300 max-w-xl mx-auto p-5 shadow-md`}>
                
                <img src={user.posts.screenshot} className='mx-auto hover:cursor-pointer'/>
                <h1 className='text-3xl font-semibold mt-5'>{user.posts.title}</h1>
                <p className='text-md font-light mt-2'>{user.user_name}</p>

                <div className='flex flex-col mt-2'>
                  <p className='flex gap-2 text-gray-400'>repo:
                    <a className='text-sm italic leading-4 mt-1 underline' href="#"> {user.posts.repo} </a> 
                  </p>
                  
                  <p className='flex gap-2 text-gray-400'>live:
                    <a className='text-sm italic leading-4 mt-1 underline' href="#"> {user.posts.live_demo} </a> 
                  </p>
                 
                </div>
                
                <p className='mt-5'>{user.posts.summary}</p>

                <div className='flex gap-5 mt-2'>
                  <section className='flex gap-1 hover: cursor-pointer' onClick={() => updateVotes(user)}>        

                    <ArrowUp size={18} className="mt-1" color={user.state ? user.color : user.unclicked}/>
                    
                    <p>{user.posts.upvote}</p>
                  </section> 
                  <CollapsibleTrigger className='flex gap-1 hover: cursor-pointer'>
                    <MessageSquare size={18} className='mt-1'/>
                    <p>{user.posts.comments.length}</p>
                  </CollapsibleTrigger>
                </div>
                
                
                <CollapsibleContent className="flex flex-col gap-2 xl:hidden">
                <h1 className='mt-10 text-lg font-semibold text-cyan-300 w-full border p-2 rounded-md bg-slate-800'>Comments</h1>
                  {user.posts.comments.map((commentKey: Comments<string, boolean>, index) => {
                    return (
                      <div key={index}>
                        {commentKey.deleted ? null : 
                      <div className='flex justify-between'>
                          <p className='mt-2 text-sm'>{commentKey.comment}</p>
                          <X size={25} color="gray"/>
                      </div>                        
                        } 
                      </div>
                    )
                  })}
                </CollapsibleContent>

                <div className="flex justify-between mt-2">
                <input type='text'
                       className='bg-transparent w-full mt-2 outline-none p-2 rounded-md' 
                       placeholder="write a comment..."/>
                <SendHorizontal size={20}
                                className='mt-4 mr-1'
                                color='cyan'/>
                </div>
                
              </Collapsible>
            )
        })}
    </div>
  )
}
