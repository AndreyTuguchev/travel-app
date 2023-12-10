"use client"

import { useEffect } from "react"


const LazyLoadImages = () =>{
    // document.querySelectorAll('.lazyload').forEach((image)=>{
    //   console.log(image)
    //   console.log(image.dataset)
    //   if("" !== image.dataset.src && image.classList.contains("lazyload")){
    //     image.src = image.dataset.src
    //     image.classList.add("lazyloaded")
    //     image.classList.remove("lazyload")
    //   }
    // })


}
  


const Footer = () => {

    useEffect(()=>{
        let imageObserver = new IntersectionObserver(function(entries, imgObserver) {
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
        
        let arr = document.querySelectorAll('img[src*="data:image"]')
        arr.forEach(function(elm) {
            imageObserver.observe(elm);
        })

        return () =>{

            arr.forEach(function(elm) {
                imageObserver.unobserve(elm);
            })
    
        }
    })

    return (
        <div>Footer</div>
    )
}

export default Footer