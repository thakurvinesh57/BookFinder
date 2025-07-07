import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import { Autoplay, EffectCoverflow } from "swiper/modules";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [expandedBookId, setExpandedBookId] = useState(null);

  useEffect(() => {
    fetchLatestBooks();
  }, []);

  const fetchLatestBooks = async () => {
    try {
      const res = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=newest&maxResults=10"
      );
      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const toggleReadMore = (bookId) => {
    setExpandedBookId((prevId) => (prevId === bookId ? null : bookId));
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-[400px] bg-cover bg-center">
        {/* Background image with blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
            filter: "blur(4px)", // Blur applied only to the background
            zIndex: -1, // To make sure the background stays behind the content
          }}></div>

        {/* Content */}
        <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Book Finder App
            </h1>
            <p className="text-lg md:text-xl">
              Discover the latest and greatest in fiction and non-fiction.
            </p>
          </div>
        </div>
      </div>

      {/* Latest Books Slider */}
      <div className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Latest Books
        </h2>
        {books.length > 0 ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full max-w-6xl mx-auto">
            {books.map((book) => {
              const info = book.volumeInfo;
              const isExpanded = expandedBookId === book.id;
              const description =
                info.description || "No description available.";
              const truncated = description.length > 200 && !isExpanded;

              return (
                <SwiperSlide
                  key={book.id}
                  className="bg-white rounded-xl shadow-lg   md:w-[350px] flex flex-col items-center justify-center text-center space-y-4 transition-all duration-300 hover:scale-105 p-10">
                  <div className="w-full flex justify-center">
                    <img
                      src={
                        info.imageLinks?.thumbnail ||
                        "https://via.placeholder.com/150"
                      }
                      alt={info.title}
                      className=" w-60 h-90 object-cover rounded-md bg-red-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{info.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {info.authors?.join(", ") || "Unknown Author"}
                    </p>
                  </div>
                  <div className="text-sm text-gray-700">
                    {truncated
                      ? `${description.substring(0, 200)}...`
                      : description}
                    {description.length > 200 && (
                      <button
                        onClick={() => toggleReadMore(book.id)}
                        className="block mt-2 text-blue-600 hover:underline text-sm">
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <p className="text-center text-gray-600">Loading latest books...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
