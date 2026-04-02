import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
    <Header />
      <main>
        <div className='px-12'>
          <Hero />
          <Services />
          <Testimonials />
          <About />
          <Contact />
        </div>     
      </main>
    </>
  );
}
