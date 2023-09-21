import { Collapsibles } from "@/types/types"
import { Button } from "../ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { ArrowUp, MessageSquare, SendHorizontal, View, X, } from "lucide-react"
import { Comments } from "@/types/types"
import { useContext } from 'react'
import { ViewContext } from "@/containers/Home"

export default function HomeCollapsible({user, clicked, setclicked, setvotes, updateVotes, filtercomments, comments, deletecomment, value, onchange, postcomment} : Collapsibles){
  const context = useContext(ViewContext);
  const { view, setView } = context
  return (
    <div>      
              <Collapsible key={user.id} className={`border rounded-md border-cyan-300 max-w-xl mx-auto p-5 shadow-md`}>

                <img src={user.posts.screenshot} className='mx-auto hover:cursor-pointer md:hover:scale-105 md:transform md:transition md:duration-200'
                     onClick={() => {
                      setView({user, clicked, setclicked, setvotes, updateVotes, filtercomments, comments, deletecomment, value, onchange, postcomment});
                      console.log(view)
                     }}/> 
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
                  <section className='flex gap-1 hover: cursor-pointer' onClick={() => {
                    setclicked(!clicked)
                    updateVotes(user, clicked, setvotes)
                  }}>        

                    <ArrowUp size={18} className="mt-1" color={user.state ? user.color : user.unclicked}/>
                    
                    <p>{user.posts.upvote}</p>
                  </section> 
                  <CollapsibleTrigger className='flex gap-1 hover:cursor-pointer hover:outline hover:outline-1 hover:outline-secondary'>
                    <MessageSquare size={18} className='mt-1'/>
                    <p> {filtercomments(user.id).length} </p>
                  </CollapsibleTrigger>
                </div>               
                
                <CollapsibleContent className="flex flex-col gap-2">
                <h1 className='mt-10 text-lg font-semibold text-cyan-300 w-full border p-2 rounded-md bg-slate-800'>Comments</h1>
                  {comments?.map((comments: Comments<number, string>) => {
                      if(user.id == comments.userId) return (
                        <div key={comments.id} className='flex justify-between'>
                              <p className='mt-2 text-sm'>{comments.comment}</p>
                              <Popover>
                                <PopoverTrigger>
                                 <X size={25} color="gray"/>
                                </PopoverTrigger>
                                <PopoverContent className='flex flex-col text-center gap-4 w-40 sm:w-64 max-xl:w-100'>
                                  <p>Delete this comment?</p>
                                  <Button onClick={() => {
                                    deletecomment(comments.id)
                                  }}
                                  >Delete</Button>                                
                                </PopoverContent>
                              </Popover>
                        </div>
                      )
                    })}
                </CollapsibleContent>

                <div className="flex justify-between mt-2">
                  <input type='text'
                        className='bg-transparent w-full mt-2 outline-none p-2 rou nded-md' 
                        placeholder="write a comment..."
                        value={value}
                        onChange={onchange}/>
                  <SendHorizontal size={20}
                                  className='mt-4 mr-1 hover:cursor-pointer'
                                  color='cyan'
                                  onClick={() => {
                                    for (let i = 0; i<=comments?.length; i++) {
                                      if (user.id == comments[i]?.userId) {
                                        const popped = comments?.pop()?.id!;
                                        // const ids = comments.length+1;
                                        return postcomment(comments[i].userId, popped+1, value)
                                      }
                                    }
                                  }}/>
                </div>
                
              </Collapsible>        
    </div>
  )
}
