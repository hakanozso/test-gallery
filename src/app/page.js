"use client"

import Gallery from "@/components/Gallery";
import { useState } from "react";


export default function Home() {

  const [images, setImages] = useState([
    { id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWUKOmj9epMtmJx4Rm02g5m86CsiigxEiqgw&s", selected: 1 },
    { id: 2, url: "https://productimages.hepsiburada.net/s/777/375-375/110000687499865.jpg", selected: 0 },
    { id: 3, url: "https://iaftm.tmgrup.com.tr/3191e5/385/218/0/209/2048/1370?u=https://iftm.tmgrup.com.tr/2021/06/23/son-dakika-fb-haberleri-fenerbahce-yeni-teknik-direktoruyle-kac-yillik-imzalayacak-iste-yaniti-1624436703847.jpg", selected: 0 },
    { id: 4, url: "https://foto.haberler.com/haber/2024/05/03/fenerbahce-hangi-gun-kuruldu-fb-3-mayis-ta-mi-17289112_2656_amp.jpg", selected: 0 },
    { id: 5, url: "https://static.daktilo.com/sites/1125/uploads/2024/10/11/son-dakika-fenerbahce-haberleri.png", selected: 0 },
    { id: 6, url: "https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fHww", selected: 0 }
  ])


  return (
    <Gallery images={images} />
  );
}
