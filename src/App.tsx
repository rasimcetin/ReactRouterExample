import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookList from "./ui/pages/BookList";
import BookDetail from "./ui/pages/BookDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
