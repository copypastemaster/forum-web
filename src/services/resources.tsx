import { UserTypes } from "@/types/types"

export const plusVotes = (user: UserTypes<string, number, boolean>) => {
      const votes = {  
        "id": user.id,
        "color": "cyan",
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



// {
//     "id": 1,
//     "color": "black",
//     "user_name": "enoch",
//     "avatar": "en",
//     "posts": {
//       "screenshot": "src/assets/web1.jpg",
//       "title": "car-rental",
//       "summary": "My recent one! Car rental website where you can search, browse for luxury cars. Tech used: React, tailwind, zustand",
//       "repo": "github.com.io/car-rental",
//       "live_demo": "github.com.io/car-rental-live",
//       "comments": [
//         "Absolute god.",
//         "Nicely done, sir!",
//         "Sheeeesh!"
//       ],
//       "upvote": 1157
//     }
//   },



