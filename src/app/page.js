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
    { id: 6, url: "https://media.fenerbahce.org/getmedia/efb64390-f5c3-4263-a787-fc93a41f2523/storygenelson.jpg?width=450&height=800&ext=.jpg?width=152&height=270&ext=.png", selected: 0 },
    { id: 7, url: "https://wallpapers.com/images/featured/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", selected: 0 },
    { id: 8, url: "https://wallpapers.com/images/featured/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", selected: 0 },
    { id: 9, url: "https://wallpapers.com/images/featured/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", selected: 0 },
    { id: 10, url: "https://wallpapers.com/images/featured/1920-x-1080-hd-1qq8r4pnn8cmcew4.jpg", selected: 0 },
    { id: 11, url: "https://s1.bwallpapers.com/wallpapers/2014/01/24/abstract-1920x1080_112537987.jpg", selected: 0 },
    { id: 12, url: "https://s1.bwallpapers.com/wallpapers/2014/01/24/abstract-1920x1080_112537987.jpg", selected: 0 },
    { id: 13, url: "https://s1.bwallpapers.com/wallpapers/2014/01/24/abstract-1920x1080_112537987.jpg", selected: 0 },
    { id: 14, url: "https://s1.bwallpapers.com/wallpapers/2014/01/24/abstract-1920x1080_112537987.jpg", selected: 0 },
    { id: 15, url: "https://s1.bwallpapers.com/wallpapers/2014/01/24/abstract-1920x1080_112537987.jpg", selected: 0 },
    { id: 16, url: "https://s1.bwallpapers.com/wallpapers/2014/01/24/abstract-1920x1080_112537987.jpg", selected: 0 },
    { id: 17, url: "https://s1.bwallpapers.com/wallpapers/2014/01/24/abstract-1920x1080_112537987.jpg", selected: 0 },
    { id: 18, url: "https://s1.bwallpapers.com/wallpapers/2014/01/24/abstract-1920x1080_112537987.jpg", selected: 0 },
  ])


  const a = (e) => {
    console.log('e :>> ', e.de);
  }

  return (
    <>
      <Gallery images={images} />




    </>
  );
}
