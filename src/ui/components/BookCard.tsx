import { useNavigate } from "react-router-dom";
import { Book } from "../../data/data";
import StartRating from "./StarRating";

function BookCard(book: Book) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${book.id}`);
  };

  return (
    <div onClick={handleClick} className="hover:scale-[1.05]">
      <image>
        <img src={book.image} width={200} height={300} alt={book.title} />
      </image>
      <h3 className="font-bold w-48 text-center">{book.title}</h3>
      <h4 className="text-center">{book.author}</h4>
      {book.rating && (
        <div className="flex justify-center">
          <StartRating rating={book.rating} />
        </div>
      )}
      <h3 className="text-center text-2xl">{book.price} ₺</h3>
    </div>
  );
}

export default BookCard;
