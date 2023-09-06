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
  const res = await fetch(`api/image`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}

