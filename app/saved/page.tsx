"use client";

import { useEffect, useState } from "react";
import { colleges } from "../../data/colleges";

export default function SavedPage() {
  const [savedColleges, setSavedColleges] = useState<
    typeof colleges
  >([]);

  useEffect(() => {
    const savedIds = JSON.parse(
      localStorage.getItem("savedColleges") || "[]"
    );

    const saved = colleges.filter((college) =>
      savedIds.includes(college.id)
    );

    setSavedColleges(saved);
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        Saved Colleges
      </h1>

      {savedColleges.length === 0 ? (
        <div className="border p-4 rounded-lg">
          No saved colleges yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {savedColleges.map((college) => (
            <div
              key={college.id}
              className="border p-4 rounded-lg shadow"
            >
              <h2 className="text-xl font-bold">
                {college.name}
              </h2>

              <p>📍 {college.location}</p>

              <p>
                💰 ₹
                {college.fees.toLocaleString("en-IN")}
              </p>

              <p>⭐ {college.rating}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}