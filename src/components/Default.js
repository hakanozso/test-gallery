// class Gallery {

//     zoomDeg = 1;
//     rotate = 0;
//     offsetX = 0;
//     offsetY = 0;

//     constructor(zoomDeg, rotate, offsetX, offsetY) {
//         this.zoomDeg = zoomDeg;
//         this.rotate = rotate;
//         this.offsetX = offsetX;
//         this.offsetY = offsetY;
//     }

//     static handleImageSelect = (e, image_id) => {

//         setZoomDeg(1);
//         setRotate(0);
//         document.getElementsByClassName("image2")[0].style.transitionDuration = "0.0s";
//         document.getElementsByClassName("image2")[0].style.transform = `scale(${zoomDeg}) rotate(${rotate})`

//         console.log('rotatemod', rotate % 360)

//         const myNextList = [...images];
//         const prev_selected_image = myNextList.find(
//             a => a.selected === 1
//         );
//         prev_selected_image.selected = 0;
//         const my_image = myNextList.find(
//             a => a.id === image_id
//         );
//         my_image.selected = 1;
//         console.log('newls :>> ', myNextList);
//         setImages(myNextList);
//     }


//     static handleImage = (rotate) => {

//         console.log('rotate :>> ', rotate);

//         const myNextList = [...images];

//         const selected_image = myNextList.find(
//             a => a.selected === 1
//         );

//         const selected_image2 = myNextList.findIndex(
//             a => a.selected === 1
//         );


//         let prev = myNextList[selected_image2 - 1]
//         let next = myNextList[selected_image2 + 1]
//         if (!prev) {
//             console.log('önceki :>> ', "önceki null");
//             prev = myNextList[images.length - 1]
//         }
//         if (!next) {
//             next = myNextList[0]
//         }

//         console.log('selected_image :>> ', selected_image, selected_image2, "-----", "prev: ", prev, "next: ", next);



//         if (rotate === 1) {
//             handleImageSelect("", next.id)
//         } else {
//             handleImageSelect("", prev.id)
//         }

//     }

//     static galleryZoom = (e) => {
//         console.log('"dowuble clicked"', "dowuble clicked")
//         if (zoomDeg != 1) {
//             setZoomDeg(1)
//         } else {
//             setZoomDeg(2)
//         }
//     }

//     static galleryGrab = (e) => {

//         console.log("onClickCapture!");


//         if (e.target.classList.contains("grabbing")) {
//             e.target.classList.remove("grabbing")
//         } else {
//             e.target.classList.add("grabbing");
//         }
//     }


//     static kyhandleImage = (e) => {
//         console.log('e :>> ', e);

//         if (e.key == "ArrowLeft") {
//             handleImage(-1)
//             console.log('solyap" :>> ', "solyap");
//         }

//         if (e.key == "ArrowRight") {
//             handleImage(1)
//             console.log('sagyap" :>> ', "sagyap");
//         }
//     }



//     static testet = (e) => {
//         e.target.nextElementSibling.style.animation = "spin 4s linear infinite"
//         e.target.nextElementSibling.style.transition = "spin 4s linear infinite"
//         console.log('object :>> ', e.target.nextElementSibling);
//         // e.target.nextElementSibling.append("<span>asdasdasd</span>")
//         // e.target.nextElementSibling.innerHTML = `<span>asdasdasd</span>`
//         e.target.nextElementSibling.style.display = "inline"
//     }


//     static closeGallery = () => {
//         document.getElementsByClassName("openable-modal")[0].style.display = "none"
//     }

//     static whlt = (e) => {
//         console.log('e', e)
//         console.log('zoomDeg', zoomDeg)

//         if (e.deltaY > 0) {
//             if (zoomDeg > 0.3) {
//                 setZoomDeg(zoomDeg - 0.1);
//             }
//         } else {
//             if (zoomDeg <= 2) {
//                 setZoomDeg(zoomDeg + 0.1);

//             }
//         }
//         // console.log('first', document.getElementsByClassName("image2")[0].style)

//         document.getElementsByClassName("image2")[0].style.transform = `scale(${zoomDeg}) rotate(${rotate})`
//         document.getElementsByClassName("image2")[0].style.transitionDuration = "0.3s";

//     }

//     static downloadMedia = () => {
//         const selected_image = images.find(
//             a => a.selected === 1
//         );
//         console.log('selected_image', selected_image)


//         fetch("http://127.0.0.1:5000/user_download", {
//             method: "POST",
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name: 'React POST Request Example' })

//         })
//             .then((response) => response)
//             .then((data) => {
//                 // setJoke(data[0].joke);
//                 console.log(data);
//             })
//             .catch((error) => console.log(error));




//     }

//     static rotateF = (t) => {
//         if (t > 0) {
//             setRotate(rotate - 90)
//         } else {
//             setRotate(rotate + 90)
//         }

//         document.getElementsByClassName("image2")[0].style.transform = `scale(${zoomDeg}) rotate(${rotate})`
//         // document.getElementsByClassName("image2")[0].style.animation = "spin 4s linear infinite"
//         document.getElementsByClassName("image2")[0].style.transitionDuration = "0.8s";
//         // console.log('rotate', rotate)
//         // console.log('first', document.getElementsByClassName("image2")[0].style.transform)
//     }


//     static dragF = (e) => {


//         console.log('e', e)
//         // console.log('e.nativeEvent', e.nativeEvent.layerX, e.nativeEvent.layerY)
//         // console.log('e', e, e.nativeEvent.offsetX, e.nativeEvent.offsetY)



//         // if (-200 > e.nativeEvent.offsetX) {
//         //     console.log("onceki = ", offsetX, "sağa gidiş = ", e.nativeEvent.layerX)
//         //     e.target.style.marginLeft = e.nativeEvent.offsetX + "px";
//         //     e.target.style.marginRight = "0";
//         // }

//         // if (e.nativeEvent.offsetX > 200) {
//         //     console.log("onceki = ", offsetX, "sola gidiş = ", e.nativeEvent.layerX)
//         //     e.target.style.marginLeft = e.nativeEvent.offsetX + "px";
//         //     e.target.style.marginRight = "0";
//         // }



//         // setOffsetX(e.nativeEvent.offsetX)
//         // setOffsetY(e.nativeEvent.offsetY)

//         // if (offsetX > 400) {
//         //     console.log('first', "next image")
//         //     // setOffsetX(0)

//         //     // handleImage(1)
//         // } else if (0 > offsetX && offsetX > -400) {
//         //     console.log('first', "prev image")
//         //     // setOffsetX(0)
//         //     // handleImage(-1)
//         // }


//         // console.log('e.target', e.target)
//         // e.target.style.marginLeft = "300px";
//     }

//     static dragOutF = (e) => {
//         // dragF(e)

//         // console.log('e', e)
//         // console.log('e.nativeEvent', e.nativeEvent.layerX, offsetX)
//         // console.log('"drag çıkış"', "drag çıkış")


//         if (zoomDeg == 1) {



//             if (e.nativeEvent.layerX > -300 && 0 > e.nativeEvent.layerX) {
//                 console.log('ÖNCEKİ RESİM YÜKLENECEK', "ÖNCEKİ RESİM YÜKLENECEK")

//                 e.target.style.marginLeft = "0";
//                 e.target.style.marginRight = "0";
//                 // setOffsetX(0)
//                 handleImage(-1)
//             }



//             if (e.nativeEvent.layerX > 300 && e.nativeEvent.layerX > 0) {
//                 console.log('SONRAKI RESİM YÜKLENECEK', "SONRAKI RESİM YÜKLENECEK")
//                 e.target.style.marginLeft = "0";
//                 e.target.style.marginRight = "0";
//                 // setOffsetX(0)

//                 handleImage(1)
//             }

//         }


//         // setOffsetX(e.nativeEvent.offsetX)
//         // setOffsetY(e.nativeEvent.offsetY)

//     }


//     static upF = (e) => {
//         // console.log('mouseup', e)

//         // if (zoomDeg > 2) {

//         //     e.target.style.marginLeft = "0"
//         //     e.target.style.marginRight = "0"

//         // }
//     }

//     static downF = (e) => {
//         console.log('mousedown', e)

//         // if (zoomDeg > 2) {

//         //     e.target.style.marginTop = movementX + "px"
//         //     e.target.style.marginBottom = movementX + "px"
//         //     e.target.style.marginLeft = movementY + "px"
//         //     e.target.style.marginRight = movementY + "px"
//         // }
//     }

//     static moveF = (e) => {
//         // console.log('e', e)

//         if (e.movementY != 0 && e.movementX != 0) {

//             if (zoomDeg > 2) {

//                 // console.log('e', e)
//                 e.target.style.marginTop = e.clientX * 1 + "px"
//                 // e.target.style.marginBottom = -10 * e.movementX + "px"
//                 e.target.style.marginLeft = e.clientY * 1 + "px"
//                 // e.target.style.marginRight = -10 * e.movementY + "px"

//             }


//         }



//     }


// }




const handleImageSelect = (e, image_id) => {


    console.log('e', e)
    console.log('zoomDeg', zoomDeg)
    setZoomDeg(1);
    setRotate(0);
    document.getElementsByClassName("image2")[0].style.transitionDuration = "0.0s";
    document.getElementsByClassName("image2")[0].style.transform = `scale(${zoomDeg}) rotate(${rotate})`

    console.log('rotatemod', rotate % 360)

    const myNextList = [...images];
    const prev_selected_image = myNextList.find(
        a => a.selected === 1
    );
    prev_selected_image.selected = 0;
    const my_image = myNextList.find(
        a => a.id === image_id
    );
    my_image.selected = 1;
    console.log('newls :>> ', myNextList);
    setImages(myNextList);
}


const handleImage = (rotate) => {

    console.log('rotate :>> ', rotate);

    const myNextList = [...images];

    const selected_image = myNextList.find(
        a => a.selected === 1
    );

    const selected_image2 = myNextList.findIndex(
        a => a.selected === 1
    );


    let prev = myNextList[selected_image2 - 1]
    let next = myNextList[selected_image2 + 1]
    if (!prev) {
        console.log('önceki :>> ', "önceki null");
        prev = myNextList[images.length - 1]
    }
    if (!next) {
        next = myNextList[0]
    }

    console.log('selected_image :>> ', selected_image, selected_image2, "-----", "prev: ", prev, "next: ", next);



    if (rotate === 1) {
        handleImageSelect("", next.id)
    } else {
        handleImageSelect("", prev.id)
    }

}

const galleryZoom = (e) => {
    console.log('"dowuble clicked"', "dowuble clicked")
    if (zoomDeg != 1) {
        setZoomDeg(1)
    } else {
        setZoomDeg(2)
    }
}

const galleryGrab = (e) => {

    console.log("onClickCapture!");


    if (e.target.classList.contains("grabbing")) {
        e.target.classList.remove("grabbing")
    } else {
        e.target.classList.add("grabbing");
    }
}


const kyhandleImage = (e) => {
    console.log('e :>> ', e);

    if (e.key == "ArrowLeft") {
        handleImage(-1)
        console.log('solyap" :>> ', "solyap");
    }

    if (e.key == "ArrowRight") {
        handleImage(1)
        console.log('sagyap" :>> ', "sagyap");
    }
}



const testet = (e) => {
    e.target.nextElementSibling.style.animation = "spin 4s linear infinite"
    e.target.nextElementSibling.style.transition = "spin 4s linear infinite"
    console.log('object :>> ', e.target.nextElementSibling);
    // e.target.nextElementSibling.append("<span>asdasdasd</span>")
    // e.target.nextElementSibling.innerHTML = `<span>asdasdasd</span>`
    e.target.nextElementSibling.style.display = "inline"
}


const closeGallery = () => {
    document.getElementsByClassName("openable-modal")[0].style.display = "none"
}

const whlt = (e) => {
    console.log('e', e)
    console.log('zoomDeg', zoomDeg)

    if (e.deltaY > 0) {
        if (zoomDeg > 0.3) {
            setZoomDeg(zoomDeg - 0.1);
        }
    } else {
        if (zoomDeg <= 2) {
            setZoomDeg(zoomDeg + 0.1);

        }
    }
    // console.log('first', document.getElementsByClassName("image2")[0].style)

    document.getElementsByClassName("image2")[0].style.transform = `scale(${zoomDeg}) rotate(${rotate})`
    document.getElementsByClassName("image2")[0].style.transitionDuration = "0.3s";

}

const downloadMedia = () => {
    const selected_image = images.find(
        a => a.selected === 1
    );
    console.log('selected_image', selected_image)


    fetch("http://127.0.0.1:5000/user_download", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'React POST Request Example' })

    })
        .then((response) => response)
        .then((data) => {
            // setJoke(data[0].joke);
            console.log(data);
        })
        .catch((error) => console.log(error));




}

const rotateF = (t) => {
    if (t > 0) {
        setRotate(rotate - 90)
    } else {
        setRotate(rotate + 90)
    }

    document.getElementsByClassName("image2")[0].style.transform = `scale(${zoomDeg}) rotate(${rotate})`
    // document.getElementsByClassName("image2")[0].style.animation = "spin 4s linear infinite"
    document.getElementsByClassName("image2")[0].style.transitionDuration = "0.8s";
    // console.log('rotate', rotate)
    // console.log('first', document.getElementsByClassName("image2")[0].style.transform)
}


const dragF = (e) => {


    console.log('e', e)
    // console.log('e.nativeEvent', e.nativeEvent.layerX, e.nativeEvent.layerY)
    // console.log('e', e, e.nativeEvent.offsetX, e.nativeEvent.offsetY)



    // if (-200 > e.nativeEvent.offsetX) {
    //     console.log("onceki = ", offsetX, "sağa gidiş = ", e.nativeEvent.layerX)
    //     e.target.style.marginLeft = e.nativeEvent.offsetX + "px";
    //     e.target.style.marginRight = "0";
    // }

    // if (e.nativeEvent.offsetX > 200) {
    //     console.log("onceki = ", offsetX, "sola gidiş = ", e.nativeEvent.layerX)
    //     e.target.style.marginLeft = e.nativeEvent.offsetX + "px";
    //     e.target.style.marginRight = "0";
    // }



    // setOffsetX(e.nativeEvent.offsetX)
    // setOffsetY(e.nativeEvent.offsetY)

    // if (offsetX > 400) {
    //     console.log('first', "next image")
    //     // setOffsetX(0)

    //     // handleImage(1)
    // } else if (0 > offsetX && offsetX > -400) {
    //     console.log('first', "prev image")
    //     // setOffsetX(0)
    //     // handleImage(-1)
    // }


    // console.log('e.target', e.target)
    // e.target.style.marginLeft = "300px";
}

const dragOutF = (e) => {
    // dragF(e)

    // console.log('e', e)
    // console.log('e.nativeEvent', e.nativeEvent.layerX, offsetX)
    // console.log('"drag çıkış"', "drag çıkış")


    if (zoomDeg == 1) {



        if (e.nativeEvent.layerX > -300 && 0 > e.nativeEvent.layerX) {
            console.log('ÖNCEKİ RESİM YÜKLENECEK', "ÖNCEKİ RESİM YÜKLENECEK")

            e.target.style.marginLeft = "0";
            e.target.style.marginRight = "0";
            // setOffsetX(0)
            handleImage(-1)
        }



        if (e.nativeEvent.layerX > 300 && e.nativeEvent.layerX > 0) {
            console.log('SONRAKI RESİM YÜKLENECEK', "SONRAKI RESİM YÜKLENECEK")
            e.target.style.marginLeft = "0";
            e.target.style.marginRight = "0";
            // setOffsetX(0)

            handleImage(1)
        }

    }


    // setOffsetX(e.nativeEvent.offsetX)
    // setOffsetY(e.nativeEvent.offsetY)

}


const upF = (e) => {
    // console.log('mouseup', e)

    // if (zoomDeg > 2) {

    //     e.target.style.marginLeft = "0"
    //     e.target.style.marginRight = "0"

    // }
}

const downF = (e) => {
    console.log('mousedown', e)

    // if (zoomDeg > 2) {

    //     e.target.style.marginTop = movementX + "px"
    //     e.target.style.marginBottom = movementX + "px"
    //     e.target.style.marginLeft = movementY + "px"
    //     e.target.style.marginRight = movementY + "px"
    // }
}

const moveF = (e) => {
    // console.log('e', e)

    if (e.movementY != 0 && e.movementX != 0) {

        if (zoomDeg > 2) {

            // console.log('e', e)
            e.target.style.marginTop = e.clientX * 1 + "px"
            // e.target.style.marginBottom = -10 * e.movementX + "px"
            e.target.style.marginLeft = e.clientY * 1 + "px"
            // e.target.style.marginRight = -10 * e.movementY + "px"

        }


    }



}

export { handleImageSelect, handleImage, galleryZoom, testet, closeGallery, whlt, downloadMedia, rotateF, dragOutF, moveF, kyhandleImage };

// export { Gallery };