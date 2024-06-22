import { books } from "../../data/data";
import BookCard from "../components/BookCard";

function BookList() {
  return (
    <div>
      <div id="leftSideDiv"></div>
      <div className="mx-24 mt-10">
        <h1 className="text-center font-bold text-4xl">Book List</h1>
        <div className="flex flex-row justify-center flex-wrap space-x-2 space-y-3 ">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
      <div id="rightSideDiv"></div>
    </div>
  );
}

export default BookList;
