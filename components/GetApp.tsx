import Image from "next/image"
import Link from "next/link"

const GetApp = () => {
    return (
        <section data-value="get-app" id="get-app" className="lazyload-bg flexCenter w-full flex-col pb-[100px]">
            <div className="get-app">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-20">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
                    <p className="regular-16 text-gray-10">Available on iOS and Android</p>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                    
                        <Link href="https://www.apple.com/app-store/" target="_blank" aria-label="Download App at Apple Apps Store" className="bold-16 flexCenter gap-3 rounded-full border btn_white w-full min-h-[70px]">
                            <Image 
                                src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                                data-src="/apple.svg"
                                alt="Apple Apps Store Icon"
                                width={24}
                                height={24}
                            />
                            App Store
                        </Link>
                    
                        <Link href="https://play.google.com/store/apps?hl=en&gl=US" aria-label="Download App at Google Play Market" target="_blank" className="bold-16 flexCenter gap-3 rounded-full border btn_dark_green_outline w-full min-h-[70px]">
                            <Image 
                                src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                                data-src="/android.svg"
                                alt="Google Play Market Icon"
                                width={24}
                                height={24}
                            />
                            Play Store
                        </Link>
                    
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-1 items-center justify-end">
                    <Image 
                         src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                         data-src="/phones.png"
                         alt="phones image"
                         width={550}
                         height={870}
                    />
                </div>

            </div>
        </section>
    )
}

export default GetApp