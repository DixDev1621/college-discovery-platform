import Link from "next/link";
import Image from "next/image";

type CollegeCardProps = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
};

export default function CollegeCard({
  id,
  name,
  location,
  fees,
  rating,
}: CollegeCardProps) {
  const saveCollege = () => {
    const saved = JSON.parse(
      localStorage.getItem("savedColleges") || "[]"
    );

    if (!saved.includes(id)) {
      saved.push(id);

      localStorage.setItem(
        "savedColleges",
        JSON.stringify(saved)
      );

      alert("College Saved!");
    }
  };

  const imageMap: Record<number, string> = {
    1: "/colleges/iit-madras.jpg",
    2: "/colleges/nit-trichy.jpg",
    3: "/colleges/anna-university.jpg",
    4: "/colleges/vit-vellore.jpg",
    5: "/colleges/srm.jpg",
    6: "/colleges/bits-pilani.jpg",
    7: "/colleges/nit-warangal.jpg",
    8: "/colleges/nit-surathkal.jpg",
    9: "/colleges/psg.jpg",
    10: "/colleges/ssn.jpg",
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <Image
        src={imageMap[id] || "/colleges/iit-madras.jpg"}
        alt={name}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />

<div className="p-5 text-black">
                <Link href={`/college/${id}`}>
<h2 className="text-xl font-bold text-blue-700 mb-2">
                {name}
          </h2>

          <p>📍 {location}</p>

          <p>
            💰 ₹{fees.toLocaleString("en-IN")}
          </p>

          <p>⭐ {rating}</p>
        </Link>

        <button
          onClick={saveCollege}
          className="mt-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-lg w-full"
        >
          ❤️ Save
        </button>
      </div>
    </div>
  );
}