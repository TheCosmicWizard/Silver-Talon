import { Link, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/book-table">Book Table</Link>
      </div>

      <div className="text-center m-10 p-10 space-y-6" id="App">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Silver Talon
        </h1>
        <p>
          Premium dining destination where elegance meets exceptional taste. We
          blend refined ambience, carefully curated recipes, and uncompromising
          quality to deliver a luxurious culinary experience you can trust. From
          handpicked ingredients to hygienic preparation and professional
          service, every detail at Silver Talon reflects excellence.
        </p>
      </div>
    </>
  );
}

export default Home;
