import Image from "next/image"

export default function About (){
    return(
        <div >
            <section className="flexCenter flex-col">
            <div className="border-2 w-full pb-24 rounded-lg bg-blue-300  px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px]">
                <p className="uppercase regular-24 -mt-1 mb-3  text-blue-300">
                   
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 text-white lg:bold-64 xl:max-w-[390px]:">What is Hololive?</h2>
                    <p className="regular-24 text-blue-950"> 
Hololive's worldwide popularity is exemplified by its multifaceted divisions, strategically catering to diverse audiences across the globe. These divisions, tailored to various regions and cultures, showcase the agency's commitment to engaging with fans on a global scale while maintaining authenticity and resonance within each unique community.
</p>
            <h2 className="bold-40 text-white lg:bold-64 xl:max-w-[390px]:">Culture</h2>
            
            <p className="regular-24 text-blue-950"> At Hololive, our culture is built on creativity, camaraderie, and inclusivity. We foster an environment where individuals are encouraged to express themselves freely and collaborate seamlessly. Working here means being part of a dynamic team dedicated to pushing boundaries, embracing diversity, and creating unforgettable experiences for our community.</p>
                </div>
            </div>
            <div className="flexCenter mx-auto max-w-[1440px] relative w-full border-2 border-blue-500">
                <Image 
                src='/holonyengir.png'
                alt="holo"
                width={1240}
                height={700}
                className="w-full object-cover object-center 2xl:rounded-5xl"
                />

                

            </div>

        </section>
        
        </div>
    )
}