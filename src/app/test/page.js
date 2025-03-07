
"use client"

import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";
// import { images } from "../images";
import { useState } from "react";

export default function TestPage() {

    const images = [
        "//placekittens.com/1500/500",
        "//placekittens.com/4000/3000",
        "//placekittens.com/800/1200",
    ];



    const [index, setIndex] = useState(0);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;

    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);



    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>


            <button type="button" onClick={() => setIsOpen(true)}>
                Open Lightbox
            </button>


            {isOpen && (
                <Lightbox
                    mainSrc={currentImage}
                    nextSrc={nextImage}
                    prevSrc={prevImage}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}


        </div>
    );
}
