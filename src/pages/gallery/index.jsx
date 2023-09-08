import axios from "axios";
import { useEffect, useState } from "react";

import GalleryScreen from "@/components/pages/gallery/gallery";

const GalleryPage = ({ data }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(data);
  }, [data]);

  return <GalleryScreen data={images} />;
};

export default GalleryPage;

export async function getServerSideProps(context) {


  const fetchUrl = `http://${context.req.headers.host}/api/image`;

  try {
    const res = await axios.get(fetchUrl);

    return { props: { data: res.data } };
  } catch (err) {
    // Pass data to the page via props
    return { props: { data: [{ id: "1", src: JSON.stringify(err) }] } };
  }
}
