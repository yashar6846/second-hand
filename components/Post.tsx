"use client"
import Image from "next/image";
import Link from "next/link";
import { FiLink } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
 
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
    const session =  (date);
    const isEditable= true
    // const isEditable = session && session?.user?.email === authorEmail;
  return(
    <div className="my-4 border-b border-b-300 py-8">
        <div className="">
         posted by: <span className="font-bold">{author}</span> on {date}
        </div>
        <div className="w-full h-72 relative">
            {thumbnail ? (
                <Image 
                 src={thumbnail} alt={title} fill
                 className="object-cover rounded-md object-center" />
                ):(
                    <Image 
                     src={"/thumbnail-placeholder.png"} alt={title} 
                fill className="object-cover rounded-md object-center" />
            )}
        </div>

        {category && (
            <Link className="bg-slate-800 w-fit text-white px-4 py-0.5 text-sm font-bold rounded-md mt-4 block"
            href={`categories/${category}`}
            >
              {category} 
            </Link>
        )}
        <h2>{title}</h2>
        <p className="content">{content}</p>

        {links && (
            <div className="my-4 flex flex-col gap-3">
                {links.map((link, i)=>(
                    <div key={i} className="flex gap-2 items-center">
                        <h2 className=""><FiLink/></h2>
                        <Link className="link" href={link}>{link}</Link>
                    </div>
                ))}
          </div>
        )}
            {isEditable && (
        <div className="flex gap-3 font-bold py-2 px-4 rounded-md bg-slate-200 w-fit">
          <Link href={`/edit-post/${id}`}>Edit</Link>
          <DeleteButton id={id} />
          
        </div>
      )}
    </div>
  )
}

