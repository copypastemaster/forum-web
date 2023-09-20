import HomeCards from "@/components/Homepage/HomeCards"
import HomeTweets from "@/components/Homepage/HomeTweets"
import HomeView from "@/components/Homepage/HomeView";
import { createContext, useState } from 'react'

export const ViewContext = createContext({});

export default function Home() {
  const [view, setView] = useState()

  return (
    <ViewContext.Provider value={{view, setView}}>
      <div className='mt-5 xl:ml-10 xl:flex xl:gap-56 '>
        <HomeTweets />
        <HomeCards />
        <HomeView />
      </div>
    </ViewContext.Provider>

  )
}
