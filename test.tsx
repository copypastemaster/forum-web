import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

interface Db<S, N> {
  id: N
  user: S
  post: Post<string, number, string[]>
}


type Post<S, N, O> = {
  repo: S,
  live_demo: S,
  comments: O,
  upvote: N,
  downvote: N,
}

type SubComment<S, T> = {
  id: S,
  message: T
}


function App() {
  const [data, setData] = useState<AxiosResponse | null | void>()
  const [comment, setComment] = useState('');
  const [readComments, setReadComments] = useState<AxiosResponse | null | void>();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res))
      .catch(err => console.log(err))    

      axios.get('http://localhost:3000/comments')
      .then(res => setReadComments(res))
      .catch(err => console.log(err))    
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/comments')
    .then(res => setReadComments(res))
    .catch(err => console.log(err))  
  }, [comment])
  
  const postComment = async () => {
   const send = await axios({
      method: 'post',
      url: 'http://localhost:3000/comments',
      data: {
        message: comment
      }
    })
   
   setComment('');
   return send;
  }

  return (
    <>
     {data == undefined ? null : 
      data.data.map((item: Db<string, number>) => {

        return (
          <div key={item.id}>
            <p className='my-5'>{item.user}</p>
            <section id="comments">           
              {item.post?.comments?.map((items, index) => {
                return (
                  <div key={index}>
                    
                    <p>{items}</p>
                  </div>
                )
              })} 
            </section>
          </div>
        )
      })
    }
    <input type="text" 
           placeholder="comment" 
           onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setComment(e.target.value);}}
           id="type"
        />
    <button onClick={postComment}>send</button>

    {readComments == undefined ? null :
      readComments.data.map((item: SubComment<string, number>) => {
        return (
          <div key={item.id}>
            <p>{item.message}</p>
          </div>
        )
      })
    }
    </>
  )
}

export default App
