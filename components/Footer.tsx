"use client"

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react"

const Footer = () => {

    useEffect(()=>{
        let imageObserver = new IntersectionObserver(function(entries, callback) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    console.log("lazyImage.dataset.src ", lazyImage.dataset.src)
                    if (lazyImage.dataset){
                        if ( lazyImage.dataset.src.indexOf("data:image") === -1 && lazyImage.src.indexOf("data:image") !== -1 ){
                            lazyImage.src = lazyImage.dataset.src
                            lazyImage.classList.remove("lazyload");
                            lazyImage.classList.add("lazyloaded");
                            imageObserver.unobserve(lazyImage)
                        }
                    }
                }
            })
        });
    
        let bgImageObserver = new IntersectionObserver(function(entries, callback) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {

                    entry.target.classList.remove("lazyload-bg")
                    entry.target.classList.add("lazyloaded-bg")

                }
            })
        });


        
        let arr = document.querySelectorAll('img[src*="data:image"]')
        arr.forEach(function(elm) {
            imageObserver.observe(elm);
        })
        
        let arrBgImages = document.querySelectorAll('.lazyload-bg')
        arrBgImages.forEach(function(elm) {
            bgImageObserver.observe(elm);
        })

        return () =>{

            arr.forEach(function(elm) {
                imageObserver.unobserve(elm);
            })
    
        }
    })

    return (
        <footer className="flexCenter mb-24">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col item-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10" aria-label="Homepage">
                        <Image 
                            src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                            data-src="hilink-logo.svg"
                            alt="log"
                            width={74}
                            height={29}
                        />
                    </Link>
                    <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                        {FOOTER_LINKS.map((columns)=>(

                            <FooterColumn key={crypto.randomUUID()} title={columns.title}>
                                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                                    {columns.links.map((linkText)=>(
                                        <li key={crypto.randomUUID()}>
                                            <Link href='/' aria-label={linkText}>
                                                {linkText}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}

                        <div className="flex flex-col gap-5">
   
                            <div className="flex flex-col gap-5">
                                <h4 className="bold-18 whitespace-nowrap">{FOOTER_CONTACT_INFO.title}</h4>
                                <Link href={`tel:${FOOTER_CONTACT_INFO.phone.value.replaceAll("-", "")}`} aria-label="phone number" className="flex gap-4 md:flex-col lg:flex-row">
                                        <p className="whitespace-nowrap">{FOOTER_CONTACT_INFO.phone.label}</p>
                                        <p className="medium-14 whitespace-nowrap text-blue-70">{FOOTER_CONTACT_INFO.phone.value}</p>
                                </Link>
                                
         
                                <Link href={`mailto:${FOOTER_CONTACT_INFO.email.value}`} aria-label="email address" className="flex gap-4 md:flex-col lg:flex-row">
                                        <p className="whitespace-nowrap">{FOOTER_CONTACT_INFO.email.label}</p>
                                        <p className="medium-14 whitespace-nowrap text-blue-70">{FOOTER_CONTACT_INFO.email.value}</p>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <FooterColumn key={crypto.randomUUID()} title={SOCIALS.title}>
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {SOCIALS.links.map((linkItem)=> (
                                        <li key={crypto.randomUUID()} className="">
                                            <Link href={linkItem.link} target="_blank" aria-label={linkItem.label}>
                                                <Image 
                                                    src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                                                    data-src={linkItem.image}
                                                    alt={linkItem.label}
                                                    width={24}
                                                    height={24}
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children } : FooterColumnProps) =>{
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}

export default Footer