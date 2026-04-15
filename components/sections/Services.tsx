import Link from 'next/link'
import { services } from '@/data/Index'
import Image from 'next/image'
import Card from '../ui/Card'
import { icons } from "@/lib/icons"

const Services = () => {
  return (
    <section id='servicios' className='py-24'>
        <div className='max-w-7xl mx-auto'>
          {/* TITLE */}
            <div className='flex flex-row items-center gap-2 '>
              <h2 className='text-2xl font-light text-neutral-600 text-start leading-[0.9]'>
                {services.title}
              </h2>
              <div className='flex-1 h-px bg-linear-to-r from-red-700 to-transparent'/>
            </div>
            {/* SUBTITLE */}
            <h3 className='mt-12 font-bold text-2xl md:text-4xl lg:text-7xl text-end'>{services.subtitle}</h3>
            {/* CONTENT*/}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {services.items.map((item) => {
                const Icon = icons[item.icon?.icon as keyof typeof icons]
                return(
              <Link key={item.id} href={item.href} className='group'>
                <Card  className='flex justify-between flex-col gap-6 pb-6 h-full'>
                  <Image 
                    src={item.image.src} 
                    alt={item.image.alt} 
                    width={400} 
                    height={300} 
                    className='w-full h-50 object-cover'
                    />
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold mb-2 group-hover:text-red-600 transition'>{item.title}</h3>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                  <div className='max-w-max flex items-center gap-2 bg-red-600 hover:bg-red-700 mx-auto px-5 rounded-full py-2 text-white font-semibold transition-all group-hover:translate-x-1'>
                    <div className='flex items-center gap-2'>
                      <span>{item.icon?.label}</span> - {Icon && <Icon className="w-5 h-5 " />}
                    </div>
                  </div>
                  <p className="mx-auto text-xs text-gray-400 mt-2">
                    Cotiza en menos de 1 minuto
                  </p>
                </Card>
              </Link>
              )})}
            </div>
        </div>
    </section>
  )
}

export default Services