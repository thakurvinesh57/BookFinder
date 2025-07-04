import { useState } from "react";

const BookCard = ({ book }) => {
  const [showMore, setShowMore] = useState(false);
  const { volumeInfo } = book;
  const thumbnail = volumeInfo.imageLinks?.thumbnail;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[300px] flex flex-col">
      {thumbnail && (
        <img
          src={thumbnail}
          alt={volumeInfo.title}
          className="w-full h-60 object-cover rounded"
        />
      )}
      <h2 className="text-xl font-semibold mt-3">{volumeInfo.title}</h2>
      <p className="text-gray-700 text-sm mt-1">
        <strong>Author:</strong> {volumeInfo.authors?.join(", ")}
      </p>
      <p className="text-gray-600 text-sm mt-2">
        {showMore
          ? volumeInfo.description
          : `${volumeInfo.description?.slice(0, 100) || "No description"}...`}
      </p>
      {volumeInfo.description && (
        <button
          className="mt-auto text-blue-600 hover:underline text-sm"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default BookCard;
