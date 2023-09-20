import { useContext } from 'react'
import { ViewContext } from '@/containers/Home'
import HomeCollapsible from './HomeCollapsible'
import { Collapsibles, UserTypes } from '@/types/types'

export default function HomeView(props: Collapsibles) {
  const context = useContext(ViewContext)
  
  return (
    <div className='w-96 hidden 2xl:block 2xl:fixed 2xl:right-0 2xl:mt-14'>     
       <HomeCollapsible user={props?.user} clicked={props.clicked} setclicked={props.setclicked}
                          setvotes={props.setvotes} updateVotes={props.updateVotes} filtercomments={props.filtercomments} comments={props?.comments} deletecomment={props.deletecomment} value={props.value} onchange={props.onchange} postcomment={props.postcomment}/>
            </div>



  )
}


