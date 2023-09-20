import { Collapsibles } from '@types/types'
import { useContext } from 'react'
import { ViewContext } from '@/containers/Home'
import HomeCollapsible from './HomeCollapsible'

export default function HomeView() {
  const context = useContext(ViewContext)
  const { view } = context
  
  return (
    <div className='w-96 fixed left-[93rem] mt-14'>
      {view == undefined ? null : 
      <HomeCollapsible user={view?.user} clicked={view?.clicked} setclicked={view?.setclicked}
                        setvotes={view?.setvotes} updateVotes={view?.updateVotes} filtercomments={view?.filtercomments} comments={view?.comments} deletecomment={view?.deletecomment} value={view?.value} onchange={view?.onChange} postcomment={view?.postcomment}/>
      }
      
    </div>

  )
}


