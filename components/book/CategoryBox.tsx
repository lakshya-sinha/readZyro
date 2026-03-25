import Image from "next/image"
interface CategoryBoxInterface{
    imageUrl: string,
    title: string,
    booksCount: string
}

export default function CategoryBox({imageUrl, title, booksCount}: CategoryBoxInterface) {
  return (
    <>
        <div className="border p-1 shadow-md">
            <div className="relative w-[132px] h-[100px] border overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/15">
                    <Image
                        src={imageUrl}
                        alt=""
                        fill
                        className="object-cover"
                    />
            </div>
            <h1 className="font-bold text-lg text-center">{title}</h1>
            <p className="text-center text-gray-600 font-bold">{booksCount} Books</p>
        </div>
    </>
  );
}