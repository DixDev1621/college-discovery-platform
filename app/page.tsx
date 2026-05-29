"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import CollegeCard from "../components/CollegeCard";
import { colleges } from "../data/colleges";
import Footer from "../components/Footer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const collegesPerPage = 6;

  const filteredColleges = colleges
    .filter((college) => {
      const matchesSearch = college.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesLocation =
        selectedLocation === "All" ||
        college.location === selectedLocation;

      return matchesSearch && matchesLocation;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "rating":
          return b.rating - a.rating;

        case "feesLow":
          return a.fees - b.fees;

        case "feesHigh":
          return b.fees - a.fees;

        default:
          return 0;
      }
    });

  const lastCollegeIndex = currentPage * collegesPerPage;
  const firstCollegeIndex = lastCollegeIndex - collegesPerPage;

  const currentColleges = filteredColleges.slice(
    firstCollegeIndex,
    lastCollegeIndex
  );

  const totalPages = Math.ceil(
    filteredColleges.length / collegesPerPage
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen p-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-5xl font-extrabold text-center mb-4 text-white">
          🎓 Find Your Dream College
        </h1>

        <p className="text-center text-gray-300 mb-10">
          Compare colleges, predict admissions, and save your favorites.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white text-black shadow-lg rounded-xl p-6 text-center">
            <h2 className="text-4xl font-bold">10+</h2>
            <p className="mt-2">Top Colleges</p>
          </div>

          <div className="bg-white text-black shadow-lg rounded-xl p-6 text-center">
            <h2 className="text-4xl font-bold">1000+</h2>
            <p className="mt-2">Students Guided</p>
          </div>

          <div className="bg-white text-black shadow-lg rounded-xl p-6 text-center">
            <h2 className="text-4xl font-bold">95%</h2>
            <p className="mt-2">Placement Success</p>
          </div>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <Filter
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg bg-gray-900 text-white"
        >
          <option value="">Sort By</option>
          <option value="rating">Rating High to Low</option>
          <option value="feesLow">Fees Low to High</option>
          <option value="feesHigh">Fees High to Low</option>
        </select>

        <div className="grid md:grid-cols-3 gap-6">
          {currentColleges.map((college) => (
            <CollegeCard
              key={college.id}
              id={college.id}
              name={college.name}
              location={college.location}
              fees={college.fees}
              rating={college.rating}
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded disabled:bg-gray-500"
          >
            Previous
          </button>

          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded disabled:bg-gray-500"
          >
            Next
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}