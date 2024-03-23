import Image from "next/image";

export default function Product (){
    return(
        <section className="flexCenter flex-col">
            <div className="border-2 w-full pb-24 rounded-lg bg-blue-300  px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px]">
                <p className="uppercase regular-24 -mt-1 mb-3  text-blue-300">
                    We are here for you
                </p>
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 text-white lg:bold-64 xl:max-w-[390px]:">Cheer you from the lonely life</h2>
                    <p className="regular-24 text-blue-950"> CompanionCircle Entertainment is an online platform dedicated to being the friend that accompanies you through loneliness. We understand the importance of connection, especially in moments of solitude. Our theme revolves around being that reliable companion who brings joy, support, and a sense of belonging to individuals seeking solace in the digital realm.</p>
                </div>
            </div>
            <div className="flexCenter mx-auto max-w-[1440px] relative w-full border-2">
                <Image 
                src='/holobanya.png'
                alt="holo"
                width={1240}
                height={700}
                className="w-full object-cover object-center 2xl:rounded-5xl"
                />

              

            </div>

        </section>
    )
}