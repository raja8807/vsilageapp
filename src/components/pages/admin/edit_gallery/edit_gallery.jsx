import CustomButton from "@/components/ui/custom_container/custom_button/custom_button";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Check2Circle, Trash } from "react-bootstrap-icons";
import styles from "./edit_gallery.module.scss";

const EditGallery = () => {
  const [selectedIamge, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [images, setImages] = useState(null);
  const [error,setError] = useState(null)

  //   const [isError,setIserror] = useState(false)

  const postImage = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    const file = selectedIamge;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "gallery_image");

    const uploadData = await fetch(
      "https://api.cloudinary.com/v1_1/djea4vipn/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());

    if (uploadData) {
      await fetch("api/image", {
        method: "POST",
        body: JSON.stringify({ src: uploadData.secure_url }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    setIsSuccess(true);
    setIsLoading(false);
    setSelectedImage(null);
    setImages((prev) => [
      ...prev,
      { _id: Math.random(), src: uploadData.secure_url },
    ]);
  };

  const [ImagesisLoading, setImageIsLoading] = useState(false);

  useEffect(() => {
    setImageIsLoading(true);
    const fetchImages = async () => {
      const data = await fetch("api/image").then((res) => res.json());
      setImages(data);
      setImageIsLoading(false);
    };
    fetchImages();
  }, []);

  const deleteImage = async (img, i) => {
    setImageIsLoading(true);
    const data = await fetch(`api/image?src=${img.src}`, {
      method: "DELETE",
    });

    setImages((prev) => prev.filter((x, idx) => idx !== i));
  };

  return (
    <CustomContainer>
      <div className={styles.edit_gallery}>
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          onChange={(e) => {
           if(e.target.files[0].type.includes('image')){
            setSelectedImage(e.target.files[0]);
            setError(null)
            setIsSuccess(false);
            setIsLoading(false);
           }else{
            setError('Unsupported File.')
           }
          }}
        />
        <CustomButton
          clickHandler={async () => {
            await postImage();
          }}
          disabled={isLoading || !selectedIamge}
        >
          {isLoading ? "Loading..." : "upload"}
        </CustomButton>
        {
            <small style={{color:'red'}}>{error}</small>
        }
        {selectedIamge && (
          <Image src={URL.createObjectURL(selectedIamge)} alt="preview" fluid />
        )}
        {isSuccess && (
          <div className={styles.success}>
            <Check2Circle />
            <p>Upload Sucess</p>
          </div>
        )}
      </div>
      <br />
      {images && (
        <div className={styles.images}>
          {images.map((img, i) => {
            return (
              <div key={img._id} className={styles.img}>
                <Trash
                  onClick={async () => {
                    await deleteImage(img, i);
                  }}
                />
                <Image src={img.src} alt={img.src} width="150px" />
              </div>
            );
          })}
        </div>
      )}
    </CustomContainer>
  );
};

export default EditGallery;
