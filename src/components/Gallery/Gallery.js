"use client"

import Image from "next/image";
// import styles from "../page.module.css";
// import * as FF from "../../components/Default"
import { GalleryService } from "../GalleryService";
import { useState, useEffect, useCallback } from "react";



export default function Gallery({ images }) {

    const [zoomDeg, setZoomDeg] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [imageLs, setImageLs] = useState(images);

    const F = new GalleryService(imageLs, 1, 0, 0, 0);


    useEffect(() => {


        document.querySelector(".gallery-prev").addEventListener('touchstart', function (e) {
            console.log("event start")

        }, false);



        console.log('images', imageLs)

        // document.addEventListener('keydown', F.kyhandleImage, false);
        document.addEventListener("keydown", (event) => {
            F.kyhandleImage(event);
            setImageLs(F.images)
        });





        let imageElementScale = 1;

        let start = {};

        // Define a flag to keep track of initial load
        let initialLoad = true;

        // Define variables to keep track of the existing transform values
        let translateX = 0;
        let translateY = 0;

        // Calculate distance between two fingers
        const distance = (event) => {
            return Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
        };

        document.getElementsByClassName("selectedImg")[0].addEventListener('touchstart', (event) => {
            // Check if the element is an image
            if (event.target.tagName === 'IMG') {
                if (event.touches.length === 2) {
                    event.preventDefault(); // Prevent page scroll

                    // Calculate where the fingers have started on the X and Y axis
                    start.x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
                    start.y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
                    start.distance = distance(event);
                }
            }
        });

        document.getElementsByClassName("selectedImg")[0].addEventListener('touchmove', (event) => {
            // Check if the element is an image
            if (event.target.tagName === 'IMG') {
                if (event.touches.length === 2) {
                    event.preventDefault(); // Prevent page scroll

                    // Safari provides event.scale as two fingers move on the screen
                    // For other browsers just calculate the scale manually
                    let scale;
                    if (event.scale) {
                        scale = event.scale;
                    } else {
                        const deltaDistance = distance(event);
                        scale = deltaDistance / start.distance;
                    }
                    imageElementScale = Math.min(Math.max(1, scale), 4);

                    // Check if it's the initial load
                    if (initialLoad) {
                        // Get the existing transform style property for proper calculations
                        var style = window.getComputedStyle(event.target);
                        const existingTransform = style.getPropertyValue('transform');

                        if (existingTransform.toString() !== "none") {
                            const rect = event.target.getBoundingClientRect();
                            translateX = -rect.width / 2;
                            translateY = -rect.height / 2;
                        }
                        initialLoad = false; // Update the flag to indicate initial load has occurred
                    }

                    // Calculate how much the fingers have moved on the X and Y axis
                    const deltaX = (((event.touches[0].pageX + event.touches[1].pageX) / 2) - start.x) * 2; // x2 for accelerated movement
                    const deltaY = (((event.touches[0].pageY + event.touches[1].pageY) / 2) - start.y) * 2; // x2 for accelerated movement

                    // Combine the existing transform with the additional calculations
                    const transform = `translate3d(` + (translateX + deltaX) + `px, ` + (translateY + deltaY) + `px, 0) scale(` + imageElementScale + `)`;
                    event.target.style.transform = transform;

                    event.target.style.WebkitTransform = transform;
                    event.target.style.zIndex = "9999";
                }
            }
        });

        document.getElementsByClassName("selectedImg")[0].addEventListener('touchend', (event) => {
            // Check if the element is an image
            if (event.target.tagName === 'IMG') {
                // Reset image to it's original format
                event.target.style.transform = "";
                event.target.style.WebkitTransform = "";
                event.target.style.zIndex = "";
            }
            //reset initialLoad and translateX and translateY needed to apply the existing transform on image
            initialLoad = true;
            translateX = 0;
            translateY = 0;
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



    const a = (e) => {
        // var object1;
        // if (e.target.nodeName == "IMG") {
        //     object1 = 
        //     // e.target.parentElement
        //     console.log('object :>> ', e.target.parentElement.parentElement.className);
        // }
        console.log('e :>> ', e);
        // document.getElementsByClassName("gallery-slider-content")[0].scrollLeft += 30;

        if (e.deltaY < 0) {
            document.getElementsByClassName("gallery-slider-content")[0].scrollLeft -= 180;
        } else {
            document.getElementsByClassName("gallery-slider-content")[0].scrollLeft += 180;
        }

    }

    const prev_next_show_attr = (a) => {
        console.log('"show" :>> ', a);
        // document.querySelector(`.${a}`).style.backgroundColor = "white";
        document.querySelector(`.${a}`).style.background = "rgb(255, 255, 255)"
        document.querySelector(`.${a} svg`).style.fill = "black";
    }

    const prev_next_hide_attr = (a) => {
        console.log('"hide" :>> ', a);
        // document.querySelector(`.${a}`).style.backgroundColor = "black";
        document.querySelector(`.${a}`).style.background = "rgba(255, 255, 255, 0.15)"
        document.querySelector(`.${a} svg`).style.fill = "white";
    }

    return (
        <div className="a">



            <button type="button" className="btn btn-primary btn" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={F.openModalF}>
                Launch gallery
            </button>


            <div className="openable-modal" style={{ display: 'none' }}>


                <div className="gallery-outer" style={{ backgroundColor: 'black' }}>


                    <div className="gallery-toolbar">


                        {/* <span style={{ color: 'white' }}> {rotate}</span> */}


                        <div className="flipYDiv">
                            <button type="button" onClick={() => F.symetryF(-1)}>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                                    </svg> */}

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-symmetry-horizontal" viewBox="0 0 16 16">
                                    <path d="M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376M11.539 10H3v4.658z" />
                                </svg>
                            </button>
                        </div>

                        <div className="flipXDiv">
                            <button type="button" onClick={() => F.symetryF(1)}>
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

                    <div className="gallery-content" onTouchStart={() => {
                        console.log('object :>> ', "object");
                    }}>

                        <div className="selectedImg" onWheel={(e) => F.whlt(e)}>

                            <div>
                                <img src={imageLs?.find(i => i.selected == 1).url} className="image2" alt=""

                                    // onMouseDown={S.dragStart} onTouchStart={S.dragStart}

                                    // onDurationChange={F.galleryGrab} 
                                    onDoubleClick={F.galleryZoom}
                                />
                            </div>
                        </div>


                        <button type="button" className="gallery-prev" onClick={() => { handleImage(-1) }} onTouchStart={() => {
                            console.log('naber :>> ', "naber");
                            prev_next_show_attr("gallery-prev")
                        }}
                            onTouchEnd={() => {
                                console.log('naber :>> ', "naber");
                                prev_next_hide_attr("gallery-prev")
                            }}>
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

                        <div className="gallery-slider-content" onWheel={a}>
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
                        </div>
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


    );

}
