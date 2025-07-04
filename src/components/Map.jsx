import { useNavigate } from "react-router-dom";

function Map({ dispatch }) {
  const navigate = useNavigate();
  const cameras = [
    {
      src: "/images/camera.png",
      alt: "camera1",
      top: "25%",
      left: "30%",
    },
    {
      src: "/images/camera.png",
      alt: "camera2",
      top: "60%",
      left: "70%",
    },
  ];

  function handleCameraClick(imgName) {
    dispatch({ type: "SET_CURRENT_CAMERA", payload: imgName });
    navigate(`/camera-view`);
  }

  return (
    <div className="d-flex flex-column">
      <div>
        <h1 className="ms-3">Camera Names</h1>
      </div>
      <div className="position-relative">
        <img
          className="img-fluid"
          src="/images/screenshot.png"
          alt="screenshot"
        />
        {cameras.map((camera, index) => (
          <div
            key={index}
            className="position-absolute"
            style={{
              top: camera.top,
              left: camera.left,
              width: "2%",
              height: "2%",
              cursor: "pointer",
            }}
            onClick={() => handleCameraClick(camera.alt)}
          >
            <img
              src={camera.src}
              alt={camera.alt}
              className="w-100 h-100"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Map;
