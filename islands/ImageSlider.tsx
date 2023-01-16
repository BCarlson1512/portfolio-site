import { useState } from "preact/hooks"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

interface Image {
    img_url: string,
    alt: string
}

interface SliderProps {
    images: Image[];
}

export default function ImageSlider(props: SliderProps){
    const [currImage, setCurrImage] = useState<number>(0)
    const length = props.images.length

    function nextSlide() {
        setCurrImage(currImage === length - 1 ? 0 : currImage + 1)
    }
    
    function prevSlide() {
        setCurrImage(currImage === 0 ? length - 1 : currImage - 1)
    }

    return (
        <div>
            <FaArrowAltCircleLeft className="absolute top-6 right-6 text-3xl z-10 cursor-pointer select-none" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="absolute top-6 left-6 text-3xl z-10 cursor-pointer select-none" onClick={nextSlide}/>
            {props.images.map((slide, idx) => {
                return(
                    <div class={idx === currImage ? 'slide-active' : 'slide-hidden'} key={idx}>
                        {idx === currImage && (
                            <img src={slide.img_url} alt={slide.alt} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}
