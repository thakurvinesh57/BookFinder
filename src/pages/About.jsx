import React from "react";

const teamMembers = [
  {
    name: "Priya",
    rollNo: "2224857",
    className: "BSc IT - Final Year",
    branch: "Information Technology",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Ripandeep Kaur",
    rollNo: "2224862",
    className: "BSc IT - Final Year",
    branch: "Information Technology",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Ranjan Kumar Rana",
    rollNo: "2224862",
    className: "BSc IT - Final Year",
    branch: "Information Technology",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Vinesh Thakur ",
    rollNo: "2224871",
    className: "BSc IT - Final Year",
    branch: "Information Technology",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          📘 About Our Project
        </h2>
        <div className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
          <p>
            The{" "}
            <span className="font-semibold text-blue-600">Book Finder App</span>{" "}
            is a React-based web application designed to help users explore and
            preview books using the Google Books API. It features real-time
            data, smooth UI, and responsive design.
          </p>
          <p className="mt-4 font-medium text-green-600">
            This project is developed as part of our BSc IT Final Year
            submission by a team of passionate students.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          👨‍🎓 Meet Our Team
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Roll no. {member.rollNo}
              </p>
              <p className="text-sm text-gray-600">{member.className}</p>
              <p className="text-sm text-gray-600">{member.branch}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
