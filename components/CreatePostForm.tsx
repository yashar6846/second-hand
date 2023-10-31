"use client"

import { categoriesData } from "@/data";
import { link } from "fs";
import Link from "next/link";
import { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { FiLink, FiTrash } from "react-icons/fi";


export default function CreatePostForm() {
    const [links, setLinks] = useState<string[]>([]);
    const [linkInput, setLinkInput] = useState("")

     const addLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {e.preventDefault()
        if(linkInput.trim() !== "") {
            setLinks((prev)=> [...prev, linkInput])
            setLinkInput("")
    }
}
  
  const deleteLink = (index: number) => {
    setLinks((prev)=> prev.filter((_, i)=> i !== index))
  }
  
  return (
    <div>
        <h2>Create post Fom</h2>
        <form className="flex flex-col gap-2">
            <input className="" type="text" placeholder="Title" />
              <textarea placeholder="Content"></textarea>
             
             {links && links.map((link, i)=>(
                <div className="flex items-center gap-4" key={i}>
                    <div><FiLink /></div>
                    <Link className="link" href={link}>{link}</Link>
                    <span className=" cursor-pointer" onClick={()=> deleteLink(i)}><FiTrash /></span>
                </div>
             )) }

             <div className="flex gap-2">
                <input onChange={(e)=> setLinkInput(e.target.value)}
                  value={linkInput}
                 className="flex-1" type="text" placeholder="Paste the like and click on Add" />
                <button  className="btn flex gap-2 items-center"
                   onClick={addLink}
                 type="submit"><GrAdd />Add</button>
            </div>

            <select className="p-3 rounded-md border appearance-none">
              <option value="">Select A Category</option>
              { categoriesData && categoriesData.map((category)=>(
                <option key={category.id} value={category.name}>
                 {category.name}
                </option>
              ))}
            </select>

            <button className="primary-btn" type="submit">Create Post</button>
            <div className="p-2 text-red-500 font-bold">Error Message</div>
        </form>
    </div>
  )
}
