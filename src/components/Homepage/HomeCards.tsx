import { useGetUser } from "@/services/getUsers"
import { UserTypes } from "@/types/types"

export default function HomeCards() {
  
  const { isLoading, data } = useGetUser() 

  if (isLoading) {
    return <h1>Loading ... </h1>
  }
  
  return (
    <div>
        {data?.data.map((user: UserTypes<string, number>) => {
            return <div key={user.id}>{user.user_name}</div>
        })}
    </div>
  )
}
