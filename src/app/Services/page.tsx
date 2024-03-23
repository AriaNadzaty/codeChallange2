import Image from "next/image"

export default function Services (){
    return(
        <div>
               <section className="flexCenter flex-col">
            <div className="border-2 w-full pb-24 rounded-lg bg-blue-50  px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px]">
                <p className="uppercase regular-24 -mt-1 mb-3  text-blue-300">
                   
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 text-blue-500 lg:bold-64 xl:max-w-[390px]:">Livestream</h2>
                    <p className="regular-24 text-blue-950">             
Step into the vibrant world of Hololive through our captivating livestreams! Join us as our talented virtual personalities embark on exciting adventures, entertain with their unique talents, and connect with fans in real-time. Whether it&apos;s gaming, singing, chatting, or exploring new experiences, our livestreams offer a diverse range of content to suit every taste. Immerse yourself in the interactive community atmosphere, where viewers can engage with their favorite VTubers, participate in lively discussions, and share unforgettable moments together. With high-quality production values and an unwavering commitment to entertainment, Hololive livestreams promise an immersive and unforgettable experience for fans around the globe. Tune in and discover the magic of virtual entertainment with Hololive!</p>
                </div>
            </div>
            <div className="flexCenter mx-auto max-w-[1440px] relative w-full border-2 ">
                <Image 
                src='/maxresdefault.jpg'
                alt="holo"
                width={1240}
                height={600}
                className="w-full object-cover object-center 2xl:rounded-5xl"
                />

            </div>

            <div className="border-2 w-full pb-24 rounded-lg bg-blue-950  px-6 lg:px-20 3xl:px-0 mt-4 mx-auto max-w-[1440px]">
                <p className="uppercase regular-24 -mt-1 mb-3  text-blue-300">
                   
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 text-white lg:bold-64 xl:max-w-[390px]:">Concert</h2>
                    <p className="regular-24 text-white max-w-sm:"> 
Immerse yourself in the electrifying world of Hololive with our live concert experience! Step into a mesmerizing realm where virtual idols come to life on stage, captivating audiences with their dynamic performances and infectious energy. Join us for an unforgettable journey filled with dazzling visuals, heart-pounding music, and thrilling interactions. From breathtaking solo acts to exhilarating group numbers, our live concert showcases the extraordinary talent and boundless creativity of our virtual stars. Get ready to be swept away by the magic of Hololive as we bring the excitement and passion of our virtual world directly to you, live on stage.</p>
                </div>
            </div>
            <div className="flexCenter mx-auto max-w-[1440px] relative w-full border-2 ">
                <Image 
                src='/holokonser.jpg'
                alt="holo"
                width={1240}
                height={600}
                className="w-full object-cover object-center 2xl:rounded-5xl"
                />
            </div>


            <div className="border-2 w-full pb-24 rounded-lg mt-5 bg-blue-50  px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px]">
                <p className="uppercase regular-24 -mt-1 mb-3  text-blue-300">
                   
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 text-blue-500 lg:bold-64 xl:max-w-[390px]:">Collaboration</h2>
                    <p className="regular-24 text-blue-950"> 
Hololive frequently engages in collaborations, seamlessly blending virtual personalities with beloved characters and worlds. These crossovers yield exciting content like streams, collaborative videos, and virtual performances, delighting fans with unique interactions and adventures.</p>
                </div>
            </div>
            <div className="flexCenter mx-auto max-w-[1440px] relative w-full border-2 ">
                <Image 
                src='/holocollabpng.png'
                alt="holo"
                width={1240}
                height={600}
                className="w-full object-cover object-center 2xl:rounded-5xl"
                />
            </div>
        </section>
        </div>
    )
}