import { CategoriesList } from '@/components/CategoriesList'
import Post from '@/components/Post'
import { postsData } from '@/data'


export default function Home() {
  return (
    <>
      <CategoriesList />
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
        <div className="py-6">No posts to display</div>
      )}
    </>
  )
}
