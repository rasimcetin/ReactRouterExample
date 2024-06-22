import { useParams } from "react-router-dom";
import { Book, books } from "../../data/data";
import { useEffect, useState } from "react";
import StartRating from "../components/StarRating";

function BookDetail() {
  const [book, setBook] = useState<Book>();
  const { id } = useParams();
  console.log("id:" + id);

  useEffect(() => {
    if (typeof id === "string") {
      const intId = parseInt(id);
      setBook(books.find((book) => book.id === intId));
    }
  }, [id]);

  if (typeof id === "undefined") {
    return <div>Book not found</div>;
  }
  return (
    <div className="mx-24 mt-10">
      <div className="flex flex-row justify-center space-x-7 space-y-1">
        <img src={book?.image} alt={book?.title} />
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">{book?.title}</h1>
          <h3 className="font-bold text-2xl">
            <span className="font-normal text-lg">by</span> {book?.author}
          </h3>
          <h4 className="mt-3">{book?.releaseDate}</h4>
          {book?.rating && <StartRating rating={book?.rating} />}
          <h3 className="text-2xl">{book?.price} ₺</h3>
          <p className="mt-3 text">{book?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
