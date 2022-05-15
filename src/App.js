import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Leftbar from "./components/Leftbar";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col h-screen">
          <div className="flex ">
            <Navbar />
          </div>
          <div className="flex-1 w-4/6 mx-auto shadow-2xl">
            <div className="flex flex-row h-full">
              <div className="flex justify-center w-80 xl:w-80 lg:w-60 md:w-48">
                <div className="my-5 ">
                  <Leftbar />
                </div>
              </div>
              <div className="flex-1">
                <Content />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
