import Image from "next/image";
import { SearchIcon } from "lucide-react";

export default function Component() {

    const popular = ["Business", "Technology", "Self Help", "Finance", "Marketing"]

  return (
    <>
        <main className="flex  gap-2 w-full items-center justify-between px-20 pt-5 border-b-2">
         <div className="left   flex gap-3 flex-col">
                <div className="first-line text-6xl font-bold">
                    <h1>Discover Knowledge, <br/> Read <span className="text-blue-800">Great eBooks</span></h1>
                </div>
                <div className="second-line text-xl text-gray-800">
                    Explore thousands of ebooks from expert authors worldwide. <br/> Search, buy, and download instatly.
                </div>
                <div className="third-line">
                    <div className="search-button border flex items-center justify-center rounded-sm">
                        <input type="text"  placeholder="Search books, authors, topics.." className="w-full px-2 py-2 focus:outline-none"/>
                        <div className="search-icon-container px-2 py-2 cursor-pointer bg-blue-800  m-1 rounded-sm">
                            <SearchIcon className="" color="white"/>
                        </div>
                    </div>
                </div>
                <div className="forth-line flex items-center">
                   Popular: {" "} <div className="flex gap-2 ml-2 ">
                         {popular.map((e,n)=>{
                        return <div className="bg-gray-200 px-2 py-1 rounded-xl" key={n}>
                            {e}
                        </div>
                    
                   })} </div>
                </div>
            </div>
            <div className="">
                <Image src={'/herobooks.png'} width={550} height={600} alt="please refresh the page to load image."/>
            </div>
        </main>
    </>
  );
}