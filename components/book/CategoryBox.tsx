import Image from "next/image"

interface CategoryBoxInterface {
    imageUrl: string,
    title: string,
    booksCount: string
}

export default function CategoryBox({ imageUrl, title, booksCount }: CategoryBoxInterface) {
    return (
        <div className="group w-[142px] rounded-2xl border border-gray-200/80 bg-white p-2 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/10">
            {/* Image */}
            <div className="relative w-full h-[108px] overflow-hidden rounded-xl">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
            </div>

            {/* Text */}
            <div className="mt-2 px-0.5 text-center">
                <h1 className="text-sm font-semibold text-gray-900 leading-tight line-clamp-1">{title}</h1>
                <p className="text-xs text-gray-400 mt-0.5">{booksCount} Books</p>
            </div>
        </div>
    );
}