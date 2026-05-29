import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          College Discovery
        </h1>

        <div className="flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/predictor">Predictor</Link>
          <Link href="/saved">Saved</Link>
        </div>
      </div>
    </nav>
  );
}