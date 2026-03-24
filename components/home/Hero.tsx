import Image from "next/image";
import { SearchIcon } from "lucide-react";

export default function Component() {

    const popular = ["Business", "Technology", "Self Help", "Finance", "Marketing"]

  return (
    <>
        <main>
            <div className="left">
                <div className="first-line">
                    <h1>Discover Knowledge, <br/> Read <span>Great eBooks</span></h1>
                </div>
                <div className="second-line">
                    Explore thousands of ebooks from expert authors worldwide. <br/> Search, buy, and download instatly.
                </div>
                <div className="third-line">
                    <div className="search-button border">
                        <input type="text"  placeholder="Search books, authors, topics.."/>
                        <SearchIcon/>
                    </div>
                </div>
                <div className="forth-line">
                   Popular: {popular.map((e,n)=>{
                        return <div className="bg-gray-400 px-2 py-2" key={n}>
                            {e}
                        </div>
                   })} 
                </div>
            </div>
            <div className="right">
                <Image src={'/herobooks.png'} width={200} height={200} alt="please refresh the page to load image."/>
            </div>
        </main>
    </>
  );
}