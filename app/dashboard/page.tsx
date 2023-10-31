import { postsData } from "@/data"
import Post from "@/components/Post"
import Link from "next/link"

const DashBoard = () => {
  return (
   <div>
      <div>My page</div>

{postsData && postsData.length > 0 ? (
    postsData.map((post) => (
      <Post
        key={post.id}
        id={post.id}
        author={post.author}
        authorEmail={"test@example.com"}
        date={post.datepublished}
        thumbnail={post.thumbnail} 
        category={post.category} 
        title={post.title}
        content={post.content} 
        links={post.links || []}
      />
    ))
  ) : (
    <div className="py-6">No posts created yet.
    <Link className="underline" href={'/create-posts'}>
        Create New
    </Link>
    </div>
  )}
   </div>
  )
}

export default DashBoard