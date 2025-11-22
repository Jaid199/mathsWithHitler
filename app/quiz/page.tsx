import Header from "@/components/header";
import Link from "next/link";

export default function LearningPage() {
  const topics = [
    {
      id: "polygons",
      name: "Polygons",
      span: "col-span-1",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 10 L90 35 L75 75 L25 75 L10 35 Z"
            fill="#FF6B35"
            stroke="#C4320A"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "quadrilaterals",
      name: "Quadrilaterals",
      span: "col-span-1",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
          <rect
            x="20"
            y="30"
            width="60"
            height="40"
            fill="#FF8C42"
            stroke="#C4320A"
            strokeWidth="2"
            transform="rotate(15 50 50)"
          />
        </svg>
      ),
    },
    {
      id: "fractions",
      name: "Fraction",
      span: "col-span-1",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
          <circle
            cx="35"
            cy="30"
            r="18"
            fill="#FF6B35"
            stroke="#C4320A"
            strokeWidth="2"
          />
          <path
            d="M 35 48 Q 50 50 65 52"
            stroke="#C4320A"
            strokeWidth="3"
            fill="none"
          />
          <path d="M 30 48 L 72 20" stroke="#C4320A" strokeWidth="3" />
          <circle
            cx="65"
            cy="70"
            r="18"
            fill="#FFB627"
            stroke="#C4320A"
            strokeWidth="2"
          />
          <path d="M 50 70 L 80 70" stroke="#C4320A" strokeWidth="2" />
          <path d="M 65 55 L 65 85" stroke="#C4320A" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "points-lines-angles",
      name: "Points, Lines, and Angles",
      span: "col-span-1",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
          <line
            x1="20"
            y1="70"
            x2="80"
            y2="30"
            stroke="#C4320A"
            strokeWidth="2"
          />
          <line
            x1="80"
            y1="30"
            x2="50"
            y2="80"
            stroke="#C4320A"
            strokeWidth="2"
          />
          <circle cx="20" cy="70" r="4" fill="#FF6B35" />
          <circle cx="80" cy="30" r="4" fill="#FF6B35" />
          <circle cx="50" cy="80" r="4" fill="#FF6B35" />
          <path
            d="M 70 35 Q 75 40 70 45"
            stroke="#FFB627"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      id: "transitions",
      name: "Transition",
      span: "col-span-2",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none">
          <rect
            x="15"
            y="35"
            width="30"
            height="30"
            fill="#FF8C42"
            stroke="#C4320A"
            strokeWidth="2"
          />
          <path
            d="M 45 50 L 55 50"
            stroke="#C4320A"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <circle
            cx="70"
            cy="50"
            r="15"
            fill="#FFB627"
            stroke="#C4320A"
            strokeWidth="2"
          />
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#C4320A" />
            </marker>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-12 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Choose Topic to test your Knowledge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/quiz/${topic.id}`}
              className={`${topic.span} bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl p-8 min-h-[140px] flex items-center justify-between hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group`}
            >
              <h3 className="text-xl font-medium text-gray-800">
                {topic.name}
              </h3>
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {topic.icon}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
