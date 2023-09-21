import HomeCollapsible from './HomeCollapsible'
import { Collapsibles } from '@/types/types'

export default function HomeView(props: Collapsibles) {
  
  return (
    <div className='w-96 hidden 2xl:block 2xl:fixed 2xl:right-0 2xl:top-24 2xl:mr-10 max-w-[320px] max-h-screen overflow-auto scroll-smooth'>     
       <HomeCollapsible user={props?.user} clicked={props.clicked} setclicked={props.setclicked}
                          setvotes={props.setvotes} updateVotes={props.updateVotes} filtercomments={props.filtercomments} comments={props?.comments} deletecomment={props.deletecomment} value={props.value} onchange={props.onchange} postcomment={props.postcomment}/>
            </div>



  )
}


