import React from "react";

const OurProcess = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        📘 Our Process in Building Book Finder App
      </h1>

      {/* Process Steps */}
      <div className="space-y-10">
        {/* Step 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl text-blue-500 font-bold">1</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Project Setup
            </h2>
            <p className="text-gray-600">
              We initialized the project using{" "}
              <span className="font-medium">React + Vite</span> for fast
              development and smooth Hot Module Reloading. Tailwind CSS was
              configured to enable rapid styling and responsiveness.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl text-green-500 font-bold">2</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Google Books API Integration
            </h2>
            <p className="text-gray-600">
              We connected the app with the{" "}
              <span className="font-medium">Google Books API</span> to fetch
              real-time book data like title, authors, description, preview
              links, and cover images. We used `fetch()` to make the requests.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl text-yellow-500 font-bold">3</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Home Page Slider
            </h2>
            <p className="text-gray-600">
              The homepage includes a stylish banner and a featured{" "}
              <span className="font-medium">Swiper.js</span> slider to show the
              latest books with a centered-highlight effect and auto-play
              functionality.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl text-purple-500 font-bold">4</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Library Page
            </h2>
            <p className="text-gray-600">
              A responsive grid-based library displays multiple books. Each book
              is rendered using a reusable
              <code className="bg-gray-200 text-sm px-1 py-0.5 mx-1 rounded">
                BookCard
              </code>{" "}
              component. We also added loader functionality while the data is
              being fetched.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl text-red-500 font-bold">5</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Preview Integration
            </h2>
            <p className="text-gray-600">
              For books that allow preview, a button redirects the user to view
              the book on Google Books. We checked availability using
              `volumeInfo.previewLink` and displayed a conditional button
              accordingly.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl text-indigo-500 font-bold">6</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Tailwind CSS Design
            </h2>
            <p className="text-gray-600">
              Throughout the app, we leveraged{" "}
              <span className="font-medium">Tailwind CSS</span> to create
              responsive, modern UI components with hover effects, rounded
              cards, and good spacing that enhances readability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
