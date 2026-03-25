import CategoryBox from "../book/CategoryBox";
import Link from "next/link";

interface CategoryBoxInterface {
    imageUrl: string,
    title: string,
    booksCount: string
}

const categoryData: CategoryBoxInterface[] = [
    { imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount: '1200+' },
    { imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount: '1200+' },
    { imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount: '1200+' },
    { imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount: '1200+' },
    { imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount: '1200+' },
    { imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount: '1200+' },
    { imageUrl: 'https://cataas.com/cat', title: 'Business', booksCount: '1200+' },
];

export default function BrowseCategory() {
    return (
        <div className="flex flex-col gap-3 py-2">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 leading-tight">Browse by Category</h2>
                    <p className="text-xs text-gray-400 mt-0.5">Find books by your favourite topic</p>
                </div>
                <Link
                    href="/allcategories"
                    className="text-sm font-medium text-blue-700 hover:text-blue-500 transition-colors duration-200"
                >
                    View All →
                </Link>
            </div>

            {/* Category grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
                {categoryData.map((cat, i) => (
                    <CategoryBox key={i} {...cat} />
                ))}
            </div>
        </div>
    );
}