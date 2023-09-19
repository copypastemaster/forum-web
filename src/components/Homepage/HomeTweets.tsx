import { Tweet } from "react-tweet"

export default function HomeTweets() {
  return (
    <div className="hidden xl:fixed xl:flex flex-col max-w-[370px] scroll-smooth  max-h-100"
         >
        <h1 className='font-bold text-3xl'>Twitter memes</h1>
        <div className='max-h-screen overflow-y-auto no-scrollbar'>
            <Tweet id="1703885446680350737"/>
            <Tweet id="1701225292209991712"/>
            <Tweet id="1700782899656785953"/>
            <Tweet id="1703094150940205162"/>
            <Tweet id="1700782363024994369"/>
            <Tweet id="1702899472274170123" />
        </div>
      
    </div>
  )
}
