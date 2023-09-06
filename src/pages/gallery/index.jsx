import { useEffect, useState } from "react";

import GalleryScreen from "@/components/pages/gallery/gallery";

const GalleryPage = ({data})=>{

const [images,setImages] = useState([])

useEffect(()=>{
setImages(data)
},[data])

    return <GalleryScreen data={images}/>
}

export default GalleryPage;

export async function getServerSideProps() {
  // Fetch data from external API
  //const res = await fetch(`api/image`)
  //const data = await res.json()
const imagesTemp = [
    {
      id: "1",
      src: "/images/banner/1.jpg",
    },
    {
      id: "2",
      src: "/images/banner/2.jpg",
    },
    {
      id: "3",
      src: "/images/banner/3.jpg",
    },
  ];
 
  // Pass data to the page via props
  return { props: { data : imagesTemp} }
}

