import HomeCards from "@/components/Homepage/HomeCards"
import HomeTweets from "@/components/Homepage/HomeTweets"
import { createContext, useState } from 'react'

export const ViewContext = createContext({});

export default function Home() {
  const [view, setView] = useState()

  return (
    <ViewContext.Provider value={{view, setView}}>
      <div className='mt-5 xl:flex xl:gap-56 '>
        <HomeTweets />
        <HomeCards />
      </div>
    </ViewContext.Provider>

  )
}
