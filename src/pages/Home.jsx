import Products from "../components/Products";
import Slider from "../components/Slider";

function Home() {
  return (
    <div className="m-2 flex flex-col gap-4">
      <div className="flex justify-center">
        <Slider />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
}

export default Home;
