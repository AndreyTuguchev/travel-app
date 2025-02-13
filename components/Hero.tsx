import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
        <section data-value="hero" className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 lx:flex-row ">
            <div className="hero-map"></div>

            

            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <Image
                    src="/camp.svg"
                    alt="camp"
                    width={50}
                    height={50}
                    className="absolute left-[7px] top-[-30px] w-10 lg:w-[50px] sm:left-[0px]"
                 />
                 <h1 className="bold-52 lg:bold-88">Amazing Camp Area</h1>
                 <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] mdmax:min-h-[120px]">
                    We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
                 </p>
                 <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2 mdmax:w-full">
                        {Array(5).fill(1).map(() => (
                            <Image 
                                src="/star.svg"
                                key={crypto.randomUUID()}
                                alt="star"
                                width={24}
                                height={24}
                             />
                        ))}
                    </div>
                    <p className="bold-16 lg:bold-20 text-blue-70">
                        198k
                        <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
                    </p>
                 </div>

                 <div className="flex flex-col w-full gap-3 sm:flex-row">

                    <a href="#get-app" aria-label="Download App" className="flexCenter gap-3 rounded-full border cursor-pointer btn_green">Download App</a>

                    {/* <Link href="#" className="flexCenter gap-3 rounded-full border cursor-pointer btn_white_text" aria-label="How We work">How we work?</Link> */}

                 </div>
            </div>


            <div className="relative flex flex-1 items-start ">
                <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                    
                    <div className="flex flex-col">
                        <div className="flexBetween">
                            <p className="regular-16 text-gray-20">Location</p>
                            {/* <Image src="/close.svg" alt="" width={24} height={24} /> */}
                        </div>

                        <p className="bold-20 text-white">Aguas Calientes</p>
                    </div>
                    
                    <div className="flexBetween">
                        <div className="flex flex-col">
                            <p className="regular-16 block text-gray-20">Distance</p>
                            <p className="bold-20 text-white">173.28 mi</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="regular-16 block text-gray-20">Elevation</p>
                            <p className="bold-20 text-white">2.040 km</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Hero