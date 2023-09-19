import HomeCards from "@/components/Homepage/HomeCards"
import HomeTweets from "@/components/Homepage/HomeTweets"

export default function Home() {
  return (
    <div className='mt-5 xl:ml-10 xl:flex xl:gap-56 overflow-auto'>
      <HomeTweets />
      <HomeCards />
      {/* ViewSection */}
    </div>
  )
}
