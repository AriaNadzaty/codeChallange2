import Image from "next/image"

export default function Services (){
    return(
        <section className="border-2 border-red-500 flex-col flexCenter overflow-hidden bg-">
                <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full justify-end">
                    <div className=" flex flex-1 lg:min-h-[900px]">
                        <Image src={'/suis.png'} alt="sui" width={ 440} height={1000} 
                        className="absolute top-[13%] hidden max-w-[1500px]  md:-left-16 lg:flex  3xl:left-20"/>
                        
                    </div>

                    <div className="z-20 flex w-full flex-col lg:w-[60%]">
                        <div className="relative">
                            <h2 className="bold-40 lg:bold-64">Our Services</h2>
                        </div>
                        <ul>
                            <li className="flex w-full flex-1 flex-col items-start"></li>
                        </ul>
                    </div>

                </div>
        </section>
    )
}