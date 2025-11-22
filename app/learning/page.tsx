import Header from "@/components/header";
import Link from "next/link";

export default function LearningPage() {
  const topics = [
    { id: "polygons", name: "Poligons", span: "col-span-1" },
    { id: "quadrilaterals", name: "Quadrilaterals", span: "col-span-1" },
    { id: "fraction", name: "Fraction", span: "col-span-1" },
    {
      id: "points-lines-angles",
      name: "Points, Lines, and Angles",
      span: "col-span-1",
    },
    { id: "transition", name: "Transition", span: "col-span-2" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-12 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Choose Topic to learn
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/learning/${topic.id}`}
              className={`${topic.span} bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl p-8 min-h-[140px] flex items-start hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
            >
              <h3 className="text-xl font-medium text-gray-800">
                {topic.name}
              </h3>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
