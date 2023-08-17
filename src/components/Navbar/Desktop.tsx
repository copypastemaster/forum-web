import { Home, BellDot } from 'lucide-react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback } from '../ui/avatar'


export default function Desktop() {
  return (
    <div className='hidden md:flex md:justify-center md:gap-32 lg:gap-52 xl:gap-72 2xl:gap-96'>
        <h1 className='text-4xl'>flex</h1>
        <section className='flex gap-10 place-items-center'>
            <Home />
            <input type='search' placeholder='hello' className='bg-slate-200 rounded-xl p-1'/>
            <BellDot />
        </section>
        
        <section className='flex gap-5 mt-1'>
          <Button>Post a project</Button>

          <Avatar>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </section>
    </div>
  )
}
