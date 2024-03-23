import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
  return (
    <section className="mx-auto max-w-[1440px] flex flex-col gap-20   md:gap-8 px-6 ">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col ">
        <div>

        <Image 
          src="/hololive.png"
          alt="HeroImage"
          width={2400}
          height={1080}
           
        />
        </div>
        <h1 className="bold-40 lg:bold-64 md:bold-52 lg:px-20 pt-4 sm:bold-40 mb">
            <div className=' bg-blue-400  text-white inline rounded-lg size-2 px-4 '>
                <Link href={"/About"}> About  
                </Link></div> </h1>
        <p className="regular-24 mt-6 text-gray-30 xl:max-w-[720px] lg:px-20 mb-14">
          Hololive are VTuber agencies we are online entertainer using live stream media
        </p>

        

        
      </div>

  
    </section>
  )
}

export default Hero