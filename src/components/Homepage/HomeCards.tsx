import { useGetUser } from "@/services/getUsers"
import { UserTypes } from "@/types/types"
import { ThumbsUp, MessageSquare } from "lucide-react"

export default function HomeCards() {
  
  const { isLoading, data } = useGetUser() 

  if (isLoading) {
    return <h1>Loading ... </h1>
  }
  
  return (
    <div className='flex flex-col space-y-10'>
        {data?.data.map((user: UserTypes<string, number>) => {
            return (
              <div key={user.id} className={`border rounded-md border-cyan-50 max-w-xl mx-auto p-5 hover:cursor-pointer shadow-md`}>
                <img src={user.post.screenshot} className='mx-auto'/>
                <h1 className='text-3xl font-semibold'>{user.post.title}</h1>
                <p className='text-sm font-light mt-2 underline'>{user.user_name}</p>
                <p className='mt-3'>{user.post.summary}</p>
              </div>
            )
        })}
    </div>
  )
}
