import { useGetUser, useGetComments, updateVotes } from "@/services/query"
import { UserTypes, Comments } from "@/types/types"
import { useState, useContext } from 'react'
import axios from "axios"
import HomeCollapsible from "./HomeCollapsible"
import HomeView from "./HomeView"
import { ViewContext } from "@/containers/Home"

export default function HomeCards() {

  const { isLoading: userLoad, data: userData, error: userError } = useGetUser();
  const { isLoading: commentsLoad, data: commentsData, error: commentsError, refetch } = useGetComments()

  const [vote, setVote] = useState(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [viewInput, setViewInput] = useState<string>('');
  
  const COMMENTS_ENDPOINT = 'http://localhost:3000/comments';

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const viewHandleChange = (e) => {
    setViewInput(e.target.value);
  }

  //post req
  const postViewComment = async (userId: number, id: number, comment: string,) => {
    try {
      const data = await axios.post(COMMENTS_ENDPOINT, 
        {
          userId: userId, 
          id: id, 
          comment: comment
        }).then(res => res.data);
      setViewInput('');
      refetch()
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  const postComment = async (userId: number, id: number, comment: string,) => {
    try {
      const data = await axios.post(COMMENTS_ENDPOINT, 
        {
          userId: userId, 
          id: id, 
          comment: comment
        }).then(res => res.data);
      setInput('');
      refetch()
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  //comments count
  const filterComments = (userid: number) => {
    return commentsData?.filter((comments: Comments<number, string>) => comments.userId == userid)
 }

  //delete req
  const deleteComment = async (id: number) => {
      try {
        const delComment = await axios.delete(COMMENTS_ENDPOINT + '/' + id)
        const delData = await delComment.data;
        refetch();
        return delData;
      } catch (err) {
        console.log(err)
      }
  }
  
  //loading states
  if (userLoad || commentsLoad) <h1>Loading ...</h1>

  //error states
  if (userError || commentsError) <h1>Error</h1>

  const context = useContext(ViewContext)
  const { view } = context;
 
  return (
    <div className='max-sm:mx-5 mt-14 flex flex-col space-y-10 scroll-smooth mx-auto overflow-auto'>
    
      {userData?.map((user: UserTypes<string, number, boolean>) => {
        return (
          <div key={user.id}>   
              <HomeCollapsible user={user} clicked={clicked} setclicked={setClicked}
                              setvotes={setVote} updateVotes={updateVotes} filtercomments={filterComments} comments={commentsData} deletecomment={deleteComment}
                              value={input} onchange={handleChange} postcomment={postComment}/>
          </div>
        )
      })}

      {view == undefined ? null : 
        <HomeView user={view?.user}  clicked={clicked} setclicked={setClicked} setvotes={setVote} updateVotes={updateVotes} filtercomments={filterComments} comments={commentsData} deletecomment={deleteComment} value={viewInput} onchange={viewHandleChange} postcomment={postViewComment}
      />
      }
       

        
    </div>

  )
}
