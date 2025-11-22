"use client";

import { useState } from "react";
import Header from "@/components/header";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function PolygonsPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Decagon",
      sides: 10,
      totalInteriorAngles: "1440°",
      eachInteriorAngle: "144°",
      eachExteriorAngle: "36°",
      etymology: "Etymolody: Deca (10), and gon (angle) in Greek.",
      polygon: 10,
    },
    {
      title: "Icosikaipentagon",
      sides: 25,
      totalInteriorAngles: "4140°",
      eachInteriorAngle: "165.6°",
      eachExteriorAngle: "14.4°",
      etymology:
        "Etymolody: Icosi (20), kai (and), penta (5), and gon (angle) in Greek.",
      polygon: 25,
    },
    {
      title: "Icosagon",
      sides: 20,
      totalInteriorAngles: "3240°",
      eachInteriorAngle: "162°",
      eachExteriorAngle: "18°",
      etymology: "Etymolody: Icosi (20), and gon (angle) in Greek.",
      polygon: 20,
    },
    {
      title: "Triacontagon",
      sides: 30,
      totalInteriorAngles: "5040°",
      eachInteriorAngle: "168°",
      eachExteriorAngle: "12°",
      etymology: "Etymolody: Triaconta (30) and gon (angle) in Greek.",
      polygon: 30,
    },
    {
      title: "Pentadecagon",
      sides: 15,
      totalInteriorAngles: "2340°",
      eachInteriorAngle: "156°",
      eachExteriorAngle: "24°",
      etymology: "Etymolody: Penta (5), deca (10), and gon (angle).",
      polygon: 15,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentContent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl p-12 relative shadow-lg">
          {/* Close button */}
          <button
            onClick={() => router.push("/learning")}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border-2 border-gray-800 rounded-lg hover:bg-orange-400 transition-colors"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>

          {/* Title */}
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
            POLIGONS
          </h1>

          <div className="flex items-center gap-8">
            {/* Previous button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center border-2 border-gray-800 rounded-full hover:bg-orange-400 transition-colors flex-shrink-0"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* Content */}
            <div className="flex-1 flex items-center gap-12">
              {/* Left side - Polygon name and shape */}
              <div className="flex-1">
                <h2 className="text-3xl font-medium mb-8 text-gray-900">
                  {currentContent.title}
                </h2>

                {/* Polygon shape */}
                <div className="flex justify-center">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    className="drop-shadow-lg"
                  >
                    {/* Draw polygon */}
                    <polygon
                      points={Array.from(
                        { length: currentContent.polygon },
                        (_, i) => {
                          const angle =
                            (i * 2 * Math.PI) / currentContent.polygon -
                            Math.PI / 2;
                          const x = 100 + 80 * Math.cos(angle);
                          const y = 100 + 80 * Math.sin(angle);
                          return `${x},${y}`;
                        }
                      ).join(" ")}
                      fill="#f97316"
                      stroke="#ea580c"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>

              {/* Right side - Details */}
              <div className="flex-1 space-y-2 text-gray-900">
                <p className="text-lg">
                  Number of Sides: {currentContent.sides}
                </p>
                <p className="text-lg">
                  Total Interior Angles: {currentContent.totalInteriorAngles}
                </p>
                <p className="text-lg">
                  Each Interior Angle: {currentContent.eachInteriorAngle}
                </p>
                <p className="text-lg">
                  Each Exterior Angle: {currentContent.eachExteriorAngle}
                </p>
                <p className="text-lg mt-4">{currentContent.etymology}</p>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center border-2 border-gray-800 rounded-full hover:bg-orange-400 transition-colors flex-shrink-0"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-gray-800 w-8" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
