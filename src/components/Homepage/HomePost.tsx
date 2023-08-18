import { Avatar, AvatarFallback } from "../ui/avatar"
import { Button } from "../ui/button"

export default function HomePost() {
  return (
    <div className='flex'>
        <Avatar>
            <AvatarFallback>U</AvatarFallback>
        </Avatar>
        
        <input type="text" 
               className='bg-slate-200 rounded-md'
        />

        <Button>Post</Button>
    </div>
  )
}
