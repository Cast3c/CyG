import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
    <Header />
      <main>
        <div className='px-6'>
          <Hero />
          <Services />
          <Testimonials />
          <About />
          <Contact />
        </div>     
      </main>
    <Footer />
    </>
  );
}
