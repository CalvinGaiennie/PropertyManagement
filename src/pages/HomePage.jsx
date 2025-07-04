import Map from "../components/Map";
import PageNav from "../components/PageNav";

function HomePage({ dispatch }) {
  return (
    <div>
      <PageNav />
      <Map dispatch={dispatch} />
    </div>
  );
}

export default HomePage;
