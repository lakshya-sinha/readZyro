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
      <div className="centerize-container flex justify-center px-10">
        <Categories />
        <TrendingBooks/>
      </div> 
      <Footer />  
    </> 
  );
}
