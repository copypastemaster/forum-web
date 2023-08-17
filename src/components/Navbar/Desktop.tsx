import React from 'react'
import { Home, BellDot } from 'lucide-react'
import { Button } from '../ui/button'


export default function Desktop() {
  return (
    <div className='hidden md:flex md:justify-between'>
        <h1>flex</h1>
        <div className='flex'>
            <Home color='darkblue'/>
            <input type='search' placeholder='hello' className='bg-slate-200 rounded-xl p-1'/>
            <BellDot />
        </div>
        
        <Button>Post a project</Button>
    </div>
  )
}
