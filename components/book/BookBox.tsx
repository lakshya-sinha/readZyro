import { Star } from "lucide-react";
import Image from "next/image";

interface BookBoxInterface {
    imageUrl: string;
    title: string;
    author: string;
    description: string;
    rating: string;
    price: string
}

export default function Component({ imageUrl, author, title, description, rating, price }: BookBoxInterface) {
    return (
        <>
            <div className="border rounded-xl w-[200px] p-1 shadow-md cursor-pointer hover:scale-105 transition-all backdrop-blur-xs">
                <div className="relative w-[190px] h-[200px] border overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/15">
                    <Image
                        src={imageUrl}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="border-b-1 text-center">
                    <h1 className="line-clamp-1">{title}</h1>
                    <h2 className="text-gray-600">{author}</h2>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center"><Star size={15} fill="yellow" color="orange"/>{rating}</div>
                    <div className="text-green-700 font-bold">₹{price}</div>
                </div>
            </div>
        </>
    );
}