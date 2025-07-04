import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CameraViewPage from "./pages/CameraViewPage";
import { useReducer } from "react";

const initialState = {
  currentCamera: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_CURRENT_CAMERA":
      return { ...state, currentCamera: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage state={state} dispatch={dispatch} />}
        />
        <Route
          path="/camera-view"
          element={<CameraViewPage state={state} dispatch={dispatch} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
