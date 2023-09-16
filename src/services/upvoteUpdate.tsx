import { UserTypes } from "@/types/types"

export const plusVotes = (user: UserTypes<string, number, boolean>) => {
      const votes = {  
        "id": user.id,
        "color": "cyan",
        "unclicked": "gray",
        "state": false,
        "user_name": user.user_name,
        "avatar": user.avatar,
        "posts": {
          "screenshot": user.posts.screenshot,
          "title": user.posts.title,
          "summary": user.posts.summary,
          "repo": user.posts.repo,
          "live_demo": user.posts.live_demo,
          "comments": user.posts.comments,
          "upvote": user.posts.upvote++
           }
        } 
return votes
}

export const downVotes = (user: UserTypes<string, number, boolean>) => {
    const votes = {  
      "id": user.id,
      "color": "cyan",
      "unclicked": "gray",
      "state": false,
      "user_name": user.user_name,
      "avatar": user.avatar,
      "posts": {
        "screenshot": user.posts.screenshot,
        "title": user.posts.title,
        "summary": user.posts.summary,
        "repo": user.posts.repo,
        "live_demo": user.posts.live_demo,
        "comments": user.posts.comments,
        "upvote": user.posts.upvote--
         }
      } 
return votes
}




