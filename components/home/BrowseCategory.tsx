import CategoryBox from "../book/CategoryBox";
import Link from "next/link";

interface CategoryBoxInterface{
    imageUrl: string,
    title: string,
    booksCount: string
}

const categoryData = [
    {imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount:'1200+'},
    {imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount:'1200+'},
    {imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount:'1200+'},
    {imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount:'1200+'},
    {imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount:'1200+'},
    {imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount:'1200+'},
    {imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount:'1200+'},
]

export default function Component() {
  return (
    <>
    <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-bold">Browse by Category</h1>
        <Link href={'/allcategories'} className="underline text-blue-800">View All Categories</Link>
    </div>
        <div className="category-box-container flex flex-wrap items-center gap-2">
            {categoryData.map((e, n)=>{
                return <div key={n}>
                    <CategoryBox {...e}/>
                </div>
            })}
        </div>
    </>
  );
}