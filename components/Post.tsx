import Image from "next/image";

 
interface PostProps {
    id: string;
    author: string;
    date: string;
    thumbnail?: string;
    authorEmail?: string;
    title: string;
    content: string;
    links?: string[];
    category?: string;
  }
  
  export default function Post({
    id,
    author,
    date,
    thumbnail,
    authorEmail,
    title,
    content,
    links,
    category,
  }: PostProps){
  return(
    <div className="">
        <div className="">
         posted by: <span className="font-bold">{author}</span> on {date}
        </div>
        <div className="w-full h-72 relative">
            {thumbnail ? (
                <Image 
                 src={thumbnail} alt={title} fill />
                ):(
                    <Image 
                     src={"/thumbnail-placeholder.png"} alt={title} 
                fill />
            )}
        </div>
    </div>
  )
}

