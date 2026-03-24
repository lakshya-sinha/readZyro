import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon, SearchIcon, ChevronDown } from "lucide-react";

export default function Component() {
  return (
    <>
        <nav className="flex items-end justify-between w-full h-10 px-10 mt-5 border-b gray-400">
            <div className="">
                <Image src={'/logo_removed.png'} width={'175'} height={'175'} alt="please refresh the page."></Image>
            </div>
            <div className=" flex items-center gap-4 h-full px-3 ">
                <Link  href={'/'} className="h-full px-2  hover:border-b-2 border-blue-700">Home</Link>
                <Link href={'/browse'} className="h-full  px-2 hover:border-b-2 border-blue-700">Browse Books</Link>
                 <Link href={'/categories'} className="h-full  px-2 hover:border-b-2  border-blue-700 flex ">Categories <ChevronDown color="grey"  /></Link>
                <Link href={'/about'} className="h-full px-2 hover:border-b-2  border-blue-700">About</Link>
                <Link href={'/contact'} className="h-full px-2 hover:border-b-2 border-blue-700">Contact</Link>
            </div>
            <div className=" flex gap-1 items-center pb-2">
                <div className="search-box flex items-center border px-2 rounded-sm">
                    <SearchIcon color="grey"/>
                    <input type="text" className=" px-2 py-1 focus:outline-none" placeholder="Search boooks, authors, topics..."/>
                </div>
                <Link href={'/'} className="px-2 py-1 border rounded-sm bg-blue-700 text-white">Search</Link>
            </div>
            <div className="flex gap-2 pb-2">
                <div className="cart px-3 py-1"><ShoppingCartIcon color="grey"/> </div>
                <Link className="login border px-2 py-1 rounded-sm" href={'/login'}>Login</Link>
                <Link className="sselling px-2 py-1 border rounded-sm bg-blue-950 text-white" href={'/sselling'}>Start Selling</Link>
            </div>
        </nav>
    </>
  );
}