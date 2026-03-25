import { Star } from "lucide-react";
import Image from "next/image";

interface BookBoxInterface {
    imageUrl: string;
    title: string;
    author: string;
    description: string;
    rating: string;
    price: string;
}

export default function Component({ imageUrl, author, title, description, rating, price }: BookBoxInterface) {
    return (
        <div className="group relative w-[170px] lg:w-[200px] rounded-2xl border border-gray-200/80 bg-white p-2 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1">
            {/* Book cover */}
            <div className="relative w-full h-[180px] lg:h-[210px] overflow-hidden rounded-xl">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* subtle dark overlay on hover for depth */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-xl" />
            </div>

            {/* Info */}
            <div className="mt-2.5 px-0.5">
                <h1 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-1">{title}</h1>
                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{author}</p>
            </div>

            {/* Divider */}
            <div className="my-2 h-px bg-gray-100" />

            {/* Rating + Price */}
            <div className="flex items-center justify-between px-0.5">
                <div className="flex items-center gap-1">
                    <Star size={13} fill="#facc15" strokeWidth={0} />
                    <span className="text-xs font-medium text-gray-600">{rating}</span>
                </div>
                <span className="text-sm font-bold text-emerald-600">₹{price}</span>
            </div>
        </div>
    );
}