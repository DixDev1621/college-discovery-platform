"use client";

import { useState } from "react";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [exam, setExam] = useState("JEE Main");
  const [result, setResult] = useState<string[]>([]);

  const predictCollege = () => {
    const rankNumber = Number(rank);

    if (rankNumber <= 0) {
      setResult(["Please enter a valid rank"]);
      return;
    }

    if (exam === "JEE Advanced") {
      if (rankNumber <= 1000) {
        setResult([
          "IIT Madras",
          "IIT Bombay",
          "IIT Delhi",
        ]);
      } else if (rankNumber <= 5000) {
        setResult([
          "IIT Kharagpur",
          "IIT Roorkee",
          "IIT Guwahati",
        ]);
      } else {
        setResult([
          "NIT Trichy",
          "NIT Surathkal",
          "NIT Warangal",
        ]);
      }
    }

    else if (exam === "JEE Main") {
      if (rankNumber <= 5000) {
        setResult([
          "NIT Trichy",
          "NIT Surathkal",
          "NIT Warangal",
        ]);
      } else if (rankNumber <= 10000) {
        setResult([
          "BITS Pilani",
          "VIT Vellore",
          "PSG College",
        ]);
      } else if (rankNumber <= 25000) {
        setResult([
          "SSN College",
          "SRM University",
          "Anna University",
        ]);
      } else {
        setResult([
          "Private Engineering Colleges",
          "Government Engineering Colleges",
          "Management Quota Colleges",
        ]);
      }
    }

    else if (exam === "TNEA") {
      if (rankNumber <= 1000) {
        setResult([
          "Anna University",
          "PSG College",
          "SSN College",
        ]);
      } else if (rankNumber <= 5000) {
        setResult([
          "Thiagarajar College",
          "Kumaraguru College",
          "Sri Sivasubramaniya Nadar College",
        ]);
      } else {
        setResult([
          "SRM University",
          "Sathyabama University",
          "Vel Tech University",
        ]);
      }
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h1 className="text-5xl font-extrabold mb-8 text-center">
        🎯 College Predictor Tool
      </h1>

      <div className="max-w-md mx-auto space-y-4">

        <select
          value={exam}
          onChange={(e) => setExam(e.target.value)}
          className="w-full border p-3 rounded bg-gray-800"
        >
          <option>JEE Main</option>
          <option>JEE Advanced</option>
          <option>TNEA</option>
        </select>

        <input
          type="number"
          placeholder="Enter Your Rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="w-full border p-3 rounded bg-gray-800"
        />

        <button
          onClick={predictCollege}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-3 rounded"
        >
          Predict Colleges
        </button>

        {result.length > 0 && (
          <div className="bg-gray-800 p-4 rounded-lg mt-6">
            <h2 className="text-2xl font-bold mb-3">
              Recommended Colleges
            </h2>

            <ul className="list-disc ml-6 space-y-2">
              {result.map((college) => (
                <li key={college}>{college}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}