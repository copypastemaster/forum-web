import { AxiosError } from "axios"

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

type Update = (userType: UserTypes<string, number, boolean>,
               clicked: boolean,
               setvote: React.Dispatch<React.SetStateAction<null>>
    ) => void;

type Filter = (userid: number) => Comments<number, string>[];
type CommentsData = Comments<number, string>[];
type Delete = (id: number) => object | AxiosError 
type OnChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type Post = (userid: number, id: number, comment: string) => object | AxiosError
type SetVote = React.Dispatch<React.SetStateAction<null>>

export type Collapsibles = {
    user: UserTypes<string, number, boolean>[]
    clicked: boolean
    setclicked: React.Dispatch<React.SetStateAction<boolean>>
    setvotes: SetVote 
    updateVotes: Update
    filtercomments: Filter
    comments: CommentsData,
    deletecomment: Delete,
    value: string,
    onchange: OnChange,
    postcomment: Post,
}

