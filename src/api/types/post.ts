import Account from "./account"

type Post = {
  id: string
  prev_block: string
  publisher: Account
  title: string
  content: string
  cover: string
  sources: string[]
  signature: string
  publication_date: number
}

export default Post
