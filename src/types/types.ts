type UserPost<S, A, N> = {
    screenshot: S,
    title: S,
    summary: S,
    repo: S,
    live_demo: S,
    comments: A,
    upvote: N
}


export interface UserTypes<S, N> {
    avatar: S,
    color: S,
    id: N
    user_name: S
    posts: UserPost<string, string[], number>
}   

