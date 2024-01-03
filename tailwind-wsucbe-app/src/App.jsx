import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Expert from "./Components/Expert";
import Newsletter from "./Components/Newsletter";
import Cards from "./Components/Card";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <Expert />
      <Newsletter />
      <Cards />

      {/* //   <div className="bg-blue-500 text-white p-4">
  //   This is a component styled with Tailwind CSS!
  // </div> */}
    </>
  );
}

export default App;
