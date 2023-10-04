import React, { useState, useEffect } from "react";

const Imagelider = () => {
  const imageArray = [
    "https://a0.muscache.com/im/pictures/cf65c091-2925-4a16-9fe0-f75915494f29.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/5311bbb8-0403-47f4-ac8c-afb9fe68bb11.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/64f41b99-b4c6-4bbb-8b17-07018fb3f89f.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-52345982/original/c13aa42d-4b32-4c30-a45f-1ef4f8617a08.jpeg?im_w=720",
  ];
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    // const timer=setInterval(()=>{
    //     nextImage();
    //     clearInterval(timer)
    // },2000);
    const timer = setTimeout(() => {
      nextImage();
      clearTimeout(timer);
    }, 2000);
  }, [imageIndex]);
  const nextImage = () => {
    if (imageIndex < imageArray.length - 1) {
      setImageIndex(imageIndex + 1);
    }
    if (imageIndex == imageArray.length - 1) {
      setImageIndex(0);
    }
  };
  const prevImage = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
    if (imageIndex == 0) {
      setImageIndex(imageArray.length - 1);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <button
          style={{ position: "relative", right: "-59px" }}
          onClick={() => {
            prevImage();
          }}
        >
          Prev
        </button>
        <img
          style={{ width: "500px", height: "500px", objectFitit: "cover" }}
          src={imageArray[imageIndex]}
        />
        <button
          style={{ position: "relative", left: "-56px" }}
          onClick={() => {
            nextImage();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Imagelider;
