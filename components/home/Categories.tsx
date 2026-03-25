import Link from "next/link";
import { BookOpen, BriefcaseBusinessIcon, Calendar1Icon, FlaskConical, Gift, Lightbulb, Megaphone, PenTool, School, SquareActivity, TimerIcon } from "lucide-react";

export default function Categories() {
  return (
    <>
        <aside className="w-[20vw] h-[500px] border-r-1">
            <div className=" w-full h-full p-2 flex flex-col gap-2 border-b-1">
                <h1 className="font-bold text-lg">Categories</h1>
                <Link href={'/books'} className="flex items-center gap-2 bg-blue-100 text-blue-950 px-2 py-1 rounded-sm"> <BookOpen size={17}/> All Books</Link>
                <Link href={'/books'} className="flex items-center gap-2  px-2 py-1 rounded-sm"> <BriefcaseBusinessIcon size={17}/> Business</Link>
                <Link href={'/books'} className="flex items-center gap-2  px-2 py-1 rounded-sm"> <Calendar1Icon size={17}/> Technology</Link>
                <Link href={'/books'} className="flex items-center gap-2  px-2 py-1 rounded-sm"> <Lightbulb size={17}/> Self Help</Link>
                <Link href={'/books'} className="flex items-center gap-2  px-2 py-1 rounded-sm"> <TimerIcon size={17}/> Finance</Link>
                <Link href={'/books'} className="flex items-center gap-2  px-2 py-1 rounded-sm"> <Megaphone size={17}/> Marketing</Link>
                <Link href={'/books'} className="flex items-center gap-2  px-2 py-1 rounded-sm"> <Gift size={17}/> Fiction</Link>
                <Link href={'/books'} className="flex items-center gap-2  px-2 py-1 rounded-sm"> <PenTool size={17}/> Design</Link>
                <Link href={'/books'} className="flex items-center gap-2  px-2 py-1 rounded-sm"> <SquareActivity size={17}/> Health</Link>
                <Link href={'/books'} className="flex items-center gap-2  px-2 py-1 rounded-sm"> <FlaskConical size={17}/> Science</Link>
                <Link href={'/books'} className="flex items-center gap-2  px-2 py-1 rounded-sm"> <School size={17}/> Education</Link>
            </div>
            <div className="filter w-full ">
              <h1 className="font-bold text-xl">Price Range</h1>
              <div className="range-container ">
                <input type="range" max="5000" className="w-full"/>
              </div>
              <div className="flex justify-between">
                <h1>₹0</h1>
                <h1>₹5,000+</h1>
              </div>
              <div className="w-full  flex items-center ">
                <Link href={'/filter'} className="w-full px-4 py-1 border text-center font-bold">Filter</Link>
              </div>
            </div>
        </aside>
    </>
  );
}