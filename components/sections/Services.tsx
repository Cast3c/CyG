import { services } from '@/data/Index'
import Image from 'next/image'
import Card from '../ui/Card'

const Services = () => {
  return (
    <section id='servicios' className='py-24'>
        <div className='max-w-7xl mx-auto'>
          {/* TITLE */}
            <div className='flex flex-row items-center gap-2 '>
              <h1 className='text-2xl font-light text-neutral-600 text-start leading-[0.9]'>
                {services.title}
              </h1>
              <div className='flex-1 h-px bg-linear-to-r from-red-700 to-transparent'/>
            </div>
            {/* SUBTITLE */}
            <h2 className='mt-12 font-bold text-2xl md:text-4xl lg:text-7xl text-end'>{services.subtitle}</h2>
            {/* CONTENT*/}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {services.items.map((item) => (
                <Card key={item.id}>
                  <Image src={item.image.src} alt={item.image.alt} width={400} height={300} className='w-full h-50 object-cover'/>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Services