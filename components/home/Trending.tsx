import Link from "next/link";
import BookBox from '@/components/book/BookBox';
import BrowseCategory from '@/components/home/BrowseCategory';

interface BookBoxInterface {
    imageUrl: string;
    title: string;
    author: string;
    description: string;
    rating: string;
    price: string;
}

const BookBoxData: BookBoxInterface[] = [
    { imageUrl: 'https://cataas.com/cat', author: 'lakshya', title: 'Pearon IIT Foundation Series Class 9th', description: 'best hd books that make you got itt.', rating: '4.5', price: '500' },
    { imageUrl: 'https://cataas.com/cat', author: 'lakshya', title: 'Pearon IIT Foundation Series Class 9th', description: 'best hd books that make you got itt.', rating: '4.5', price: '500' },
    { imageUrl: 'https://cataas.com/cat', author: 'lakshya', title: 'Pearon IIT Foundation Series Class 9th', description: 'best hd books that make you got itt.', rating: '4.5', price: '500' },
    { imageUrl: 'https://cataas.com/cat', author: 'lakshya', title: 'Pearon IIT Foundation Series Class 9th', description: 'best hd books that make you got itt.', rating: '4.5', price: '500' },
    { imageUrl: 'https://cataas.com/cat', author: 'lakshya', title: 'Pearon IIT Foundation Series Class 9th', description: 'best hd books that make you got itt.', rating: '4.5', price: '500' },
];

export default function TrendingBooks() {
    return (
        <div className="w-full lg:pl-3 pt-3 flex flex-col gap-4">

            {/* Header row */}
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">Trending Books</h1>
                    <p className="text-sm text-gray-400 mt-0.5">Most popular ebooks this week</p>
                </div>
                <Link
                    href="/books"
                    className="text-sm font-medium text-blue-700 hover:text-blue-500 transition-colors duration-200 shrink-0"
                >
                    View All →
                </Link>
            </div>

            {/* Book grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {BookBoxData.map((book, i) => (
                    <BookBox key={i} {...book} />
                ))}
            </div>

            {/* Browse Category section */}
            <BrowseCategory />
        </div>
    );
}