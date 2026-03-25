import Link from "next/link";
import BookBox from '@/components/book/BookBox';
import BrowseCategory from '@/components/home/BrowseCategory';

interface BookBoxInterface {
    imageUrl: string;
    title: string;
    author: string;
    description: string;
    rating: string;
    price:string  
}

const BookBoxData: BookBoxInterface[] = [
    { imageUrl: 'https://cataas.com/cat', author: 'lakshya', title: 'Pearon IIT Foundation Series Class 9th', description: 'best hd books that make you got itt.', rating: '4.5', price: '500' },
    { imageUrl: 'https://cataas.com/cat', author: 'lakshya', title: 'Pearon IIT Foundation Series Class 9th', description: 'best hd books that make you got itt.', rating: '4.5', price: '500' },
    { imageUrl: 'https://cataas.com/cat', author: 'lakshya', title: 'Pearon IIT Foundation Series Class 9th', description: 'best hd books that make you got itt.', rating: '4.5', price: '500' },
    { imageUrl: 'https://cataas.com/cat', author: 'lakshya', title: 'Pearon IIT Foundation Series Class 9th', description: 'best hd books that make you got itt.', rating: '4.5', price: '500' },
    { imageUrl: 'https://cataas.com/cat', author: 'lakshya', title: 'Pearon IIT Foundation Series Class 9th', description: 'best hd books that make you got itt.', rating: '4.5', price: '500' }
]

export default function TrendingBooks() {
    return (
        <>
            <div className="first-row  w-full pl-4 pt-4">
                <div className="fir-row-container flex justify-between">
                    <div className="one-side">
                        <h1 className="text-3xl font-bold">Trending Books</h1>
                        <h2 className="text-lg ">Most popular ebooks this week</h2>
                    </div>
                    <div className="second-side">
                        <Link href={'/books'} className="text-blue-800">View All</Link>
                    </div>
                </div>

                <div className="second-row flex gap-3 flex-wrap">
                    {BookBoxData.map((e, n) => {
                        return <div key={n}>
                            <BookBox {...e} />
                        </div>
                    })}
                </div>
                <BrowseCategory />
            </div>
            
        </>
    );
}