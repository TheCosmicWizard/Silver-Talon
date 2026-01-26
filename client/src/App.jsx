import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BookTable from "./pages/BookTable.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-table" element={<BookTable />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
