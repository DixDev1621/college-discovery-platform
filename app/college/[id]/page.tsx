import { colleges } from "../../../data/colleges";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetails({ params }: PageProps) {
  const { id } = await params;

  const college = colleges.find(
    (college) => college.id === Number(id)
  );

  if (!college) {
    return <h1>College Not Found</h1>;
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">
        {college.name}
      </h1>

      <div className="space-y-4">
        <p>📍 Location: {college.location}</p>

        <p>
          💰 Fees: ₹
          {college.fees.toLocaleString("en-IN")}
        </p>

        <p>⭐ Rating: {college.rating}</p>

        <p>🏆 Highest Package: {college.placement}</p>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            Courses
          </h2>

          <ul className="list-disc ml-6">
            {college.courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            Review
          </h2>

          <p>{college.review}</p>
        </div>
      </div>
    </main>
  );
}