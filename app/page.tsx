import Navbar from '@/components/layouts/Navbar';
import Hero from '@/components/home/Hero';
import Categories  from '@/components/home/Categories';
import TrendingBooks   from '@/components/home/Trending';
import Footer from '@/components/layouts/Footer'

export default function Home() {
  return (
   <>
      <Navbar />
      <Hero/> 
       <div className="flex flex-col md:flex-row gap-6 w-full px-4 sm:px-8 lg:px-16 py-6">
        <Categories />
        <TrendingBooks />
       </div>
      <Footer />  
    </> 
  );
}
