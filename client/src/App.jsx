import "./App.css";

function App() {
  return (
    <>
      <div className="nav">
        <a href="#menu" target="_blank">
          Menu
        </a>
        <a href="book" target="_blank">
          Book Table
        </a>
        <a href="log" target="_blank">
          Log In
        </a>
      </div>
      <div className="App text-center m-10 p-10 space-y-6">
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

export default App;
