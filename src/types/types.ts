type UserPost<S, A, N> = {
    screenshot: S,
    title: S,
    summary: S,
    repo: S,
    live_demo: S,
    comments: A,
    upvote: N
}

export type Comments<N, S> = {
    userId: N,
    id: N,
    comment: S,
}


export interface UserTypes<S, N, B> {
    avatar: S,
    color: S,
    unclicked: S,
    state: B,
    id: N
    user_name: S
    posts: UserPost<string, Comments<string, boolean>[], number>
}

//A - user
//S - Setstate
//F - function
// C - Comments array
// D - Delete comment
// Z - String, 
// P - PostFunc
//React.Dispatch<React.SetStateAction<string>>

export type Collapsible <A, S, F, C, D, Z, P  > = {
    user: A
    setClicked: S
    updateVotes: F
    filterComments: F
    comments: C,
    deleteComment: D,
    value: S,
    onchange: Z,
    postComment: P,
}

