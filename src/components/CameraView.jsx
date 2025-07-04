function CameraView({ state, dispatch }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };
  const { currentCamera } = state;
  console.log(currentCamera);
  const images = [
    {
      src: "/images/deer.png",
      parentCamera: "camera1",
      description: "description 1",
      date: "2025-01-01",
      time: "12:00:00",
    },
    {
      src: "/images/deerbed.png",
      parentCamera: "camera2",
      description: "description 2",
      date: "2025-01-02",
      time: "12:00:00",
    },
    {
      src: "/images/dog.png",
      parentCamera: "camera3",
      description: "description 3",
      date: "2025-01-03",
      time: "12:00:00",
    },
  ];

  const sortedImages = images.filter(
    (image) => image.parentCamera === currentCamera
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <div className="d-flex flex-column m-5">
        <h1 className="mb-3">Camera View</h1>

        {/* <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <input type="text" placeholder="Description" />
            <button type="submit">Upload</button>
          </div>
        </form> */}

        {sortedImages.map((image, index) => (
          <div key={index} className="ms-3 d-flex flex-column">
            <img
              src={image.src}
              alt={image.parentCamera}
              style={{
                width: "60%",
                height: "auto",
              }}
            />
            <div
              className="d-flex flex-column"
              style={{ border: "1px solid black", width: "60%" }}
            >
              <p>{image.description}</p>
              <p>{image.date}</p>
              <p>{image.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CameraView;
