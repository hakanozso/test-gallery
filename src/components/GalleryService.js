
class GalleryService {

    // document = ""
    images = []
    zoomDeg = 1;
    rotate = 0;
    offsetX = 0;
    offsetY = 0;
    flipX = 1;
    flipY = 1;

    constructor(images, zoomDeg, rotate, offsetX, offsetY) {
        // this.document = document;
        this.images = images;
        this.zoomDeg = zoomDeg;
        this.rotate = rotate;
        this.offsetX = offsetX;
        this.offsetY = offsetY;

    }

    handleImageSelect = (e, image_id) => {

        // console.log('this.document', this.document)
        // console.log('e', e.ownerDocument)

        this.zoomDeg = 1;
        this.rotate = 0;
        this.flipX = 1;
        this.flipY = 1;

        // setZoomDeg(1);
        // setRotate(0);

        document.getElementsByClassName("image2")[0].style.transitionDuration = "0.0s";
        document.getElementsByClassName("image2")[0].style.transform = `translate3d(${this.offsetX}px,${this.offsetY}px,0px) scale(${this.zoomDeg}) scaleX(${this.flipX})  scaleY(${this.flipY}) rotate(${this.rotate}deg)`;
        document.querySelector(".flipXDiv svg").style.transform = `scaleX(${this.flipX})`;
        document.querySelector(".flipYDiv svg").style.transform = `scaleY(${this.flipY})`;

        // console.log('rotatemod', rotate % 360)

        const myNextList = [...this.images];
        const prev_selected_image = myNextList.find(
            a => a.selected === 1
        );
        prev_selected_image.selected = 0;
        const my_image = myNextList.find(
            a => a.id === image_id
        );
        my_image.selected = 1;
        // console.log('newls :>> ', myNextList);
        // setImages(myNextList);
        this.images = myNextList
    }


    handleImage = (rotate) => {

        // console.log('rotate :>> ', rotate);

        const myNextList = [...this.images];

        const selected_image = myNextList.find(
            a => a.selected === 1
        );

        const selected_image2 = myNextList.findIndex(
            a => a.selected === 1
        );


        let prev = myNextList[selected_image2 - 1]
        let next = myNextList[selected_image2 + 1]
        if (!prev) {
            // console.log('önceki :>> ', "önceki null");
            prev = myNextList[this.images.length - 1]
        }
        if (!next) {
            next = myNextList[0]
        }

        // console.log('selected_image :>> ', selected_image, selected_image2, "-----", "prev: ", prev, "next: ", next);

        if (rotate === 1) {

            console.log('next :>> ', next);
            console.log('next == myNextList[0] :>> ', next == myNextList[0]);
            console.log('object :>> ', document.getElementsByClassName("gallery-slider-content")[0].scrollLeft);

            if (next === myNextList[0]) {
                // document.getElementsByClassName("gallery-slider-content")[0].style.transition = "spin 4s linear infinite"
                // document.getElementsByClassName("gallery-slider-content")[0].style.transitionDuration = "0.3s";
                // document.getElementsByClassName("gallery-slider-content")[0].style.transform 
                document.getElementsByClassName("gallery-slider-content")[0].scrollTo(0, 0);
            } else {
                document.getElementsByClassName("gallery-slider-content")[0].scrollTo(next.id * 90, 0);
            }






            this.handleImageSelect("", next.id)
        } else {

            console.log('prev :>> ', prev);
            console.log('prev == myNextList[0] :>> ', prev == myNextList[0]);
            console.log('scrolleft :>> ', document.getElementsByClassName("gallery-slider-content")[0].scrollLeft);

            if (prev === myNextList[0]) {
                // document.getElementsByClassName("gallery-slider-content")[0].style.transition = "spin 4s linear infinite"
                // document.getElementsByClassName("gallery-slider-content")[0].style.transitionDuration = "0.3s";
                // document.getElementsByClassName("gallery-slider-content")[0].style.transform 
                document.getElementsByClassName("gallery-slider-content")[0].scrollTo(0, 0);
            } else {
                // document.getElementsByClassName("gallery-slider-content")[0].scrollTo(-((myNextList.length - next.id) * 90), 0);
                document.getElementsByClassName("gallery-slider-content")[0].scrollTo(-90, 0);
            }





            // document.getElementsByClassName("gallery-slider-content")[0].scrollLeft -= 150;
            this.handleImageSelect("", prev.id)
        }

    }

    static galleryZoom = (e) => {
        console.log('"dowuble clicked"', "dowuble clicked")
        if (zoomDeg != 1) {
            this.zoomDeg = 1
            // setZoomDeg(1)
        } else {
            this.zoomDeg = 3
            // setZoomDeg(2)
        }
    }

    static galleryGrab = (e) => {



        console.log("onClickCapture!");


        if (e.target.classList.contains("grabbing")) {
            e.target.classList.remove("grabbing")
        } else {
            e.target.classList.add("grabbing");
        }
    }


    kyhandleImage = (e) => {
        console.log('e :>> ', e);

        if (e.key == "ArrowLeft") {
            this.handleImage(-1)
            console.log('solyap" :>> ', "solyap");
        }

        if (e.key == "ArrowRight") {
            this.handleImage(1)
            console.log('sagyap" :>> ', "sagyap");
        }
    }



    openModalF = (e) => {
        e.target.nextElementSibling.style.animation = "spin 4s linear infinite"
        e.target.nextElementSibling.style.transition = "spin 4s linear infinite"
        console.log('object :>> ', e.target.nextElementSibling);
        // e.target.nextElementSibling.append("<span>asdasdasd</span>")
        // e.target.nextElementSibling.innerHTML = `<span>asdasdasd</span>`
        e.target.nextElementSibling.style.display = "inline"
    }


    closeGallery = () => {
        document.getElementsByClassName("openable-modal")[0].style.display = "none"
    }

    whlt = (e) => {
        console.log('e', e)
        console.log('zoomDeg', this.zoomDeg)

        if (e.deltaY > 0) {
            if (this.zoomDeg > 0.3) {
                // setZoomDeg(zoomDeg - 0.1);
                this.zoomDeg = this.zoomDeg - 0.1
            }
        } else {
            if (this.zoomDeg <= 4) {
                // setZoomDeg(zoomDeg + 0.1);
                this.zoomDeg = this.zoomDeg + 0.1

            }
        }
        // console.log('first', document.getElementsByClassName("image2")[0].style)

        document.getElementsByClassName("image2")[0].style.transform = `translate3d(${this.offsetX}px,${this.offsetY}px,0px) scale(${this.zoomDeg}) scaleX(${this.flipX})  scaleY(${this.flipY}) rotate(${this.rotate}deg)`;
        document.getElementsByClassName("image2")[0].style.transitionDuration = "0.3s";

    }

    static downloadMedia = () => {
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

    rotateF = (t) => {

        console.log('t', t)
        if (t != 1) {
            this.rotate = (this.flipX * this.flipY == 1 ? this.rotate + 90 : this.rotate - 90);
            // setRotate(rotate - 90)
        } else {
            this.rotate = (this.flipX * this.flipY == 1 ? this.rotate - 90 : this.rotate + 90);
            // setRotate(rotate + 90)
        }

        console.log('this.rotate', this.rotate)

        document.getElementsByClassName("image2")[0].style.transform = `translate3d(${this.offsetX}px,${this.offsetY}px,0px) scale(${this.zoomDeg}) scaleX(${this.flipX})  scaleY(${this.flipY}) rotate(${this.rotate}deg)`;
        document.getElementsByClassName("image2")[0].style.transitionDuration = "0.8s";


        // document.getElementsByClassName("image2")[0].style.transform = `scale(${this.zoomDeg}) rotate(${this.rotate})`
        // document.getElementsByClassName("image2")[0].style.transitionDuration = "0.8s";

        // this.document.getElementsByClassName("image2")[0].style.display = "none"


    }


    dragF = (e) => {

        console.log('e.nativeEvent', this.offsetX, this.offsetY)
        console.log('e.nativeEvent', e.nativeEvent.offsetX, e.nativeEvent.offsetY)


        // document.getElementsByClassName("image2")[0].style.transform =
        //     `translate3d(${e.nativeEvent.offsetX},${e.nativeEvent.offsetY},0px) scale(${this.zoomDeg}) rotate(${this.rotate}deg)`;


        e.target.style.transform = `translate3d(${this.offsetX}px,${this.offsetY}px,0px) scale(${this.zoomDeg}) scaleX(${this.flipX}) rotate(${this.rotate}deg)`;

        this.offsetX = e.nativeEvent.offsetX;
        this.offsetY = e.nativeEvent.offsetY;

        console.log('dragging', e)
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

    dragOutF = (e) => {


        console.log('e', e)

        // dragF(e)

        // console.log('e', e)
        // console.log('e.nativeEvent', e.nativeEvent.layerX, offsetX)
        // console.log('"drag çıkış"', "drag çıkış")


        if (this.zoomDeg == 1) {



            if (e.nativeEvent.layerX > -300 && 0 > e.nativeEvent.layerX) {
                console.log('ÖNCEKİ RESİM YÜKLENECEK', "ÖNCEKİ RESİM YÜKLENECEK")

                e.target.style.marginLeft = "0";
                e.target.style.marginRight = "0";
                // setOffsetX(0)
                this.handleImage(-1)
            }



            if (e.nativeEvent.layerX > 300 && e.nativeEvent.layerX > 0) {
                console.log('SONRAKI RESİM YÜKLENECEK', "SONRAKI RESİM YÜKLENECEK")
                e.target.style.marginLeft = "0";
                e.target.style.marginRight = "0";
                // setOffsetX(0)

                this.handleImage(1)
            }

        }


        // setOffsetX(e.nativeEvent.offsetX)
        // setOffsetY(e.nativeEvent.offsetY)

    }


    static upF = (e) => {
        // console.log('mouseup', e)

        // if (zoomDeg > 2) {

        //     e.target.style.marginLeft = "0"
        //     e.target.style.marginRight = "0"

        // }
    }

    static downF = (e) => {
        console.log('mousedown', e)

        // if (zoomDeg > 2) {

        //     e.target.style.marginTop = movementX + "px"
        //     e.target.style.marginBottom = movementX + "px"
        //     e.target.style.marginLeft = movementY + "px"
        //     e.target.style.marginRight = movementY + "px"
        // }
    }

    static moveF = (e) => {
        // console.log('e', e)

        if (e.movementY != 0 && e.movementX != 0) {

            if (zoomDeg > 3) {

                // console.log('e', e)
                e.target.style.marginTop = e.clientX * 1 + "px"
                // e.target.style.marginBottom = -10 * e.movementX + "px"
                e.target.style.marginLeft = e.clientY * 1 + "px"
                // e.target.style.marginRight = -10 * e.movementY + "px"

            }


        }



    }



    hover = (e) => {
        var offsetXX = 0;
        var offsetYY = 0;
        var x, y;
        console.log('eeeeee', e)
        var zoomer = e.target;

        offsetXX = e.nativeEvent.offsetX ? e.nativeEvent.offsetX : e.pageX;
        offsetYY = e.nativeEvent.offsetY ? e.nativeEvent.offsetY : e.pageY;

        // e.nativeEvent.offsetX ? offsetX = e.nativeEvent.offsetX : offsetX = e.pageX
        // e.nativeEvent.offsetY ? offsetY = e.nativeEvent.offsetY : offsetX = e.pageX




        x = offsetXX / e.pageX * 100
        y = offsetYY / e.pageY * 100


        console.log('first', x, y, offsetXX, offsetYY)

        zoomer.style.backgroundPosition = x + '% ' + y + '%';



    }

    symetryF = (axis) => {
        // console.log('e', e)

        if (axis == 1) {
            this.flipX *= -1;
        } else {
            this.flipY *= -1;
        }


        // e.target.style.transform

        // e.target.style.transform = `translate3d(${this.offsetX}px,${this.offsetY}px,0px) scale(-1) rotate(${this.rotate}deg)`;

        document.getElementsByClassName("image2")[0].style.transitionDuration = "0.6s";
        // document.getElementsByClassName("image2")[0].style.animation = "example 5s linear 2s infinite alternate";



        document.getElementsByClassName("image2")[0].style.transform = `translate3d(${this.offsetX}px,${this.offsetY}px,0px) scale(${this.zoomDeg}) scaleX(${this.flipX})  scaleY(${this.flipY}) rotate(${this.rotate}deg)`;

        document.querySelector(".flipXDiv svg").style.transform = `scaleX(${this.flipX})`;
        document.querySelector(".flipYDiv svg").style.transform = `scaleY(${this.flipY})`;

    }

    onMouseUpF = (e) => {


        console.log('e', e)

    }




}

export { GalleryService }