import { Home, BellDot } from 'lucide-react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { ModeToggle } from '../ui/modetoggle'

export default function Desktop() {
  return (
    <div className='hidden md:flex md:justify-around md:gap-32 lg:gap-52 xl:gap-72 2xl:gap-96 lg:ml-20 md:py-1'>
        <h1 className='text-4xl'>flex</h1>
        <section className='flex gap-10 ml-24 place-items-center'>
            <Home />
            <input type='search' placeholder='hello' className='bg-slate-200 rounded-xl p-1'/>
            <BellDot />
        </section>
        
        <section className='flex gap-5 mt-1'>
          <Button>Post a project</Button>

          <ModeToggle />
          <Avatar>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </section>
    </div>
  )
}
