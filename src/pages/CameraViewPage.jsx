import PageNav from "../components/PageNav";
import CameraView from "../components/CameraView";

function CameraViewPage({ state, dispatch }) {
  return (
    <div>
      <PageNav />
      <CameraView state={state} dispatch={dispatch} />
    </div>
  );
}

export default CameraViewPage;
