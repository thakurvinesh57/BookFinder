import React from "react";

const BookCard = ({ book }) => {
  const info = book.volumeInfo;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={info.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
        alt={info.title}
        className="w-32 h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {info.authors?.join(", ") || "Unknown Author"}
      </p>

      {info.previewLink ? (
        <a
          href={info.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Preview Book
        </a>
      ) : (
        <span className="text-xs text-gray-500 mt-auto">
          Preview not available
        </span>
      )}
    </div>
  );
};

export default BookCard;
