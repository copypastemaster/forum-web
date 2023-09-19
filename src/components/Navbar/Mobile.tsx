import { Home } from "lucide-react"
import { Avatar, AvatarFallback } from "../ui/avatar"

export default function Nav() {
  return (
    <div className='flex justify-between place-items-center xl:hidden'>
      <Home />
      <input type="search"
             placeholder="search" 
             className='bg-slate-200 rounded-xl p-1'/>
      <Avatar>
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </div>
  )
}
