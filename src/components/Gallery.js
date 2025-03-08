"use client"

import Image from "next/image";
// import styles from "../page.module.css";
// import * as FF from "../../components/Default"
import { GalleryService } from "./GalleryService";
import { useState, useEffect, useCallback } from "react";



export default function Gallery({ images }) {

    const [zoomDeg, setZoomDeg] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [imageLs, setImageLs] = useState(images);

    const F = new GalleryService(document, imageLs, 1, 0, 0, 0);


    useEffect(() => {

        console.log('images', imageLs)

        // document.addEventListener('keydown', F.kyhandleImage, false);
        document.addEventListener("keydown", (event) => {
            F.kyhandleImage(event);


            setImageLs(F.images)

        });

    }, [])

    // useEffect(() => { images = F.ima }, [F.images])

    const handleImageSelect = (e, i) => {
        F.handleImageSelect(e, i)
        setImageLs(F.images);
        setZoomDeg(F.zoomDeg)
        setRotate(F.rotate)
    }

    const handleImage = (r) => {
        F.handleImage(r);
        setImageLs(F.images);
        setZoomDeg(F.zoomDeg)
        setRotate(F.rotate)
    }




    // var slider = document.getElementById('slider'),
    //     sliderItems = document.getElementById('slides'),
    //     prev = document.getElementById('prev'),
    //     next = document.getElementById('next');


    return (
        <div style={{ height: '120vh' }}>

            <div>



                {/* <div id="slider" class="slider">
                    <div class="wrapper">
                        <div id="slides" class="slides">
                            <span class="slide">Slide 1</span>
                            <span class="slide">Slide 2</span>
                            <span class="slide">Slide 3</span>
                            <span class="slide">Slide 4</span>
                            <span class="slide">Slide 5</span>
                        </div>
                    </div>
                    <a id="prev" class="control prev"></a>
                    <a id="next" class="control next"></a>
                </div> */}



                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={F.openModalF}>
                    Launch gallery
                </button>


                <div className="openable-modal" style={{ display: 'none' }}>


                    <div className="gallery-outer" style={{ backgroundColor: 'black' }}>

z
                        <div className="gallery-toolbar">


                            {/* <span style={{ color: 'white' }}> {rotate}</span> */}


                            <div className="flipDiv">
                                <button type="button" onClick={F.symetryF}>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                                    </svg> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-symmetry-vertical" viewBox="0 0 16 16">
                                        <path d="M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484M10 4.46V13h4.658z" />
                                    </svg>
                                </button>
                            </div>



                            <div className="rotateDiv">
                                <button type="button" onClick={() => F.rotateF(-1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                                    </svg>
                                </button>
                            </div>



                            <div className="rotateDiv">
                                <button type="button" onClick={() => F.rotateF(1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z" />
                                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
                                    </svg>

                                </button>
                            </div>



                            <div className="downloadDiv">
                                <button type="button" onClick={F.downloadMedia}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-download" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                    </svg>
                                </button>
                            </div>


                            <div className="closeDiv" style={{ right: '10px' }}>
                                <button type="button" onClick={F.closeGallery}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                    </svg>
                                </button>
                            </div>




                        </div>

                        <div className="gallery-content">

                            <div className="selectedImg" onWheel={(e) => F.whlt(e)} >


                                <div >
                                    <img src={imageLs?.find(i => i.selected == 1).url} className="image2" alt=""

                                        // onMouseDown={S.dragStart} onTouchStart={S.dragStart}

                                        // onDurationChange={F.galleryGrab} 
                                        onDoubleClick={F.galleryZoom}
                                    //  style={{ transform: 'scale(' + F.zoomDeg + ') rotate(' + F.rotate + 'deg)', objectFit: 'contain' }}

                                    // style={{
                                    //     transform: `translate3d(` + offsetX + `px,` + offsetY + `px, 0px)` +
                                    //         'rotate(' + rotate + 'deg)' +
                                    //         'scale(' + zoomDeg + ')'
                                    // }}
                                    />

                                </div>




                            </div>


                            <button type="button" className="gallery-prev" onClick={() => { handleImage(-1) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                </svg>
                            </button>
                            <button type="button" className="gallery-next" onClick={() => { handleImage(1) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        </div>


                        <div className="gallery-slider">

                            {imageLs?.map(image =>
                                image.selected == 1 ?
                                    (
                                        <div key={image.id}>
                                            <img src={image.url} alt="" onClick={(e) => handleImageSelect(e, image.id)} data-id={image.id} className="image selected" style={{ backgroundImage: "url(" + image.url + ")" }} />
                                        </div>
                                    ) : (
                                        <div key={image.id}>
                                            <img src={image.url} alt="" onClick={(e) => handleImageSelect(e, image.id)} data-id={image.id} style={{ backgroundImage: "url(" + image.url + ")" }} />
                                        </div>
                                    )
                            )}

                            {/* <div className="mini">
                                <div className="open-slider-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </div>


                            </div> */}


                            <div className="open-slider-btn">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg> */}


                                <button type="button" onClick={() => F.handleImage(1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                        <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </button>


                            </div>

                        </div>



                    </div>


                </div>
            </div>
        </div>

    );

}
