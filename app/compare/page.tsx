"use client";

import { useState } from "react";
import { colleges } from "../../data/colleges";
import Navbar from "../../components/Navbar";

export default function ComparePage() {
  const [college1Id, setCollege1Id] = useState(1);
  const [college2Id, setCollege2Id] = useState(2);

  const college1 =
    colleges.find((c) => c.id === college1Id) || colleges[0];

  const college2 =
    colleges.find((c) => c.id === college2Id) || colleges[1];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-8 text-white">
        <h1 className="text-5xl font-extrabold text-center mb-10">
          📊 Compare Colleges
        </h1>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <select
            value={college1Id}
            onChange={(e) =>
              setCollege1Id(Number(e.target.value))
            }
            className="border p-3 rounded-lg bg-gray-800 text-white"
          >
            {colleges.map((college) => (
              <option
                key={college.id}
                value={college.id}
              >
                {college.name}
              </option>
            ))}
          </select>

          <select
            value={college2Id}
            onChange={(e) =>
              setCollege2Id(Number(e.target.value))
            }
            className="border p-3 rounded-lg bg-gray-800 text-white"
          >
            {colleges.map((college) => (
              <option
                key={college.id}
                value={college.id}
              >
                {college.name}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-600 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-700">
                <th className="p-4 border">Feature</th>
                <th className="p-4 border">
                  {college1.name}
                </th>
                <th className="p-4 border">
                  {college2.name}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-gray-800">
                <td className="border p-4 font-bold">
                  📍 Location
                </td>
                <td className="border p-4">
                  {college1.location}
                </td>
                <td className="border p-4">
                  {college2.location}
                </td>
              </tr>

              <tr className="hover:bg-gray-800">
                <td className="border p-4 font-bold">
                  💰 Fees
                </td>
                <td className="border p-4">
                  ₹{college1.fees.toLocaleString("en-IN")}
                </td>
                <td className="border p-4">
                  ₹{college2.fees.toLocaleString("en-IN")}
                </td>
              </tr>

              <tr className="hover:bg-gray-800">
                <td className="border p-4 font-bold">
                  ⭐ Rating
                </td>
                <td className="border p-4">
                  {college1.rating}
                </td>
                <td className="border p-4">
                  {college2.rating}
                </td>
              </tr>

              <tr className="hover:bg-gray-800">
                <td className="border p-4 font-bold">
                  📈 Placement
                </td>
                <td className="border p-4">
                  {college1.placement}
                </td>
                <td className="border p-4">
                  {college2.placement}
                </td>
              </tr>

              <tr className="hover:bg-gray-800">
                <td className="border p-4 font-bold">
                  📚 Courses
                </td>
                <td className="border p-4">
                  {college1.courses.join(", ")}
                </td>
                <td className="border p-4">
                  {college2.courses.join(", ")}
                </td>
              </tr>

              <tr className="hover:bg-gray-800">
                <td className="border p-4 font-bold">
                  📝 Review
                </td>
                <td className="border p-4">
                  {college1.review}
                </td>
                <td className="border p-4">
                  {college2.review}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}