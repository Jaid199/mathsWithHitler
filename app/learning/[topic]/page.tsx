import Header from "@/components/header";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const topicContent: Record<string, { title: string; description: string }> = {
  polygons: {
    title: "Polygons",
    description:
      "Learn about polygons, their properties, types, and how to identify them in geometry.",
  },
  quadrilaterals: {
    title: "Quadrilaterals",
    description:
      "Explore quadrilaterals including squares, rectangles, parallelograms, and trapezoids.",
  },
  fraction: {
    title: "Fractions",
    description:
      "Master fractions, including adding, subtracting, multiplying, and dividing fractions.",
  },
  "points-lines-angles": {
    title: "Points, Lines, and Angles",
    description:
      "Understand the fundamentals of geometry: points, lines, rays, and different types of angles.",
  },
  transition: {
    title: "Transitions",
    description:
      "Learn about geometric transformations including translations, rotations, and reflections.",
  },
};

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const content = topicContent[topic] || {
    title: "Topic Not Found",
    description: "This topic is not available yet.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-12">
        <Link
          href="/learning"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Topics
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl p-12 shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {content.title}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {content.description}
            </p>

            <div className="bg-white/50 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Learning Content
              </h2>
              <p className="text-gray-700">
                Interactive learning content for {content.title.toLowerCase()}{" "}
                will be displayed here. This could include animations, diagrams,
                practice problems, and step-by-step explanations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
