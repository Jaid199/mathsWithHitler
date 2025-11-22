"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function QuadrilateralsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Trapezium (Non-Isosceles)",
      description:
        "Non-Isosceles Trapezium refers to quadrilaterals that have only one pair of opposite parallel sides",
      formula: "Area = 1/2 (A+B) * H",
      examples:
        "Real-life examples : tabletops, some roofs, bridges, handbags, and popcorn buckets",
      shape: (
        <svg viewBox="0 0 400 250" className="w-full h-full">
          {/* Trapezium */}
          <polygon
            points="100,180 300,180 350,80 150,80"
            fill="#FF8C42"
            stroke="#8B4513"
            strokeWidth="3"
          />
          {/* Labels */}
          <text x="250" y="70" fill="#000" fontSize="20" fontWeight="bold">
            A
          </text>
          <text x="225" y="200" fill="#000" fontSize="20" fontWeight="bold">
            B
          </text>
          <text x="220" y="135" fill="#000" fontSize="20" fontWeight="bold">
            H
          </text>
          {/* Height line */}
          <line
            x1="225"
            y1="80"
            x2="225"
            y2="180"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      ),
    },
    {
      title: "Deltoid Quadrilateral/Kite",
      description:
        "Deltoid Quadrilateral/ Kite refers to quadrilaterals that have opposite sides are equal and parallel, but angles are not right angles.",
      formula: "Area = 1/2 (A*B)",
      examples:
        "Real-life examples : the Deltoid muscle in the human body and flying kites.",
      shape: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Kite */}
          <polygon
            points="200,50 250,150 200,270 150,150"
            fill="#FF8C42"
            stroke="#8B4513"
            strokeWidth="3"
          />
          {/* Labels */}
          <text x="160" y="120" fill="#000" fontSize="20" fontWeight="bold">
            B
          </text>
          <text x="205" y="165" fill="#000" fontSize="20" fontWeight="bold">
            A
          </text>
          {/* Diagonal lines */}
          <line
            x1="200"
            y1="50"
            x2="200"
            y2="270"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="150"
            y1="150"
            x2="250"
            y2="150"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      ),
    },
    {
      title: "Parallelogram",
      description:
        "Parallelogram refers to quadrilaterals that have two opposite parallel sides which are equal, not both. Rectangles are a type of parallelogram",
      formula: "Area = A*B",
      examples: "Real-life examples : tables, desks, and doorways",
      shape: (
        <svg viewBox="0 0 500 300" className="w-full h-full">
          {/* Parallelogram */}
          <polygon
            points="80,200 250,200 320,100 150,100"
            fill="#FF8C42"
            stroke="#8B4513"
            strokeWidth="3"
          />
          {/* Rectangle */}
          <rect
            x="340"
            y="100"
            width="120"
            height="100"
            fill="#FF8C42"
            stroke="#8B4513"
            strokeWidth="3"
          />
          {/* Labels for Parallelogram */}
          <text x="100" y="120" fill="#000" fontSize="18" fontWeight="bold">
            B
          </text>
          <text x="50" y="160" fill="#000" fontSize="18" fontWeight="bold">
            A
          </text>
          {/* Labels for Rectangle */}
          <text x="400" y="90" fill="#000" fontSize="18" fontWeight="bold">
            B
          </text>
          <text x="315" y="160" fill="#000" fontSize="18" fontWeight="bold">
            A
          </text>
        </svg>
      ),
    },
    {
      title: "Concave Quadrilateral",
      description:
        "Concave Quadrilaterals refer to quadrilaterals that have one vertex pushed inwards. (one angle is > 180 degrees)",
      formula: "Area = 1/2 (A*B*sin(C))",
      examples: "Real-life examples : Arrowheads and direction signs.",
      shape: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Concave Quadrilateral (Arrow shape) */}
          <polygon
            points="200,80 280,200 200,150 120,200"
            fill="#FF8C42"
            stroke="#8B4513"
            strokeWidth="3"
          />
          {/* Labels */}
          <text x="205" y="110" fill="#000" fontSize="20" fontWeight="bold">
            C
          </text>
          <text x="205" y="180" fill="#000" fontSize="20" fontWeight="bold">
            B
          </text>
          <text x="110" y="220" fill="#000" fontSize="20" fontWeight="bold">
            A
          </text>
          {/* Diagonal lines */}
          <line
            x1="120"
            y1="200"
            x2="280"
            y2="200"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      ),
    },
    {
      title: "Rhomboid",
      description:
        "Rhomboid quadrilaterals refer to quadrilaterals that all four sides are of the same length and opposite sides are parallel to each other",
      formula: "Area = 1/2 (A*B)",
      examples:
        "Real-life examples : Diamonds, window panes and certain floor tiles.",
      shape: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Rhombus */}
          <polygon
            points="200,80 280,160 200,240 120,160"
            fill="#FF8C42"
            stroke="#8B4513"
            strokeWidth="3"
          />
          {/* Labels */}
          <text x="205" y="125" fill="#000" fontSize="20" fontWeight="bold">
            B
          </text>
          <text x="185" y="175" fill="#000" fontSize="20" fontWeight="bold">
            A
          </text>
          {/* Diagonal lines */}
          <line
            x1="200"
            y1="80"
            x2="200"
            y2="240"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="120"
            y1="160"
            x2="280"
            y2="160"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl shadow-2xl p-8 md:p-12 relative">
          {/* Close Button */}
          <button
            onClick={() => window.history.back()}
            className="absolute top-6 right-6 w-8 h-8 rounded-lg border-2 border-gray-800 flex items-center justify-center hover:bg-orange-300 transition-colors"
          >
            <span className="text-xl font-bold">×</span>
          </button>

          {/* Title */}
          <h1 className="text-4xl font-black text-gray-900 text-center mb-8">
            QUADRILATERALS
          </h1>

          {/* Content Area */}
          <div className="flex flex-col items-center gap-6">
            {/* Subtitle */}
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              {slides[currentSlide].title}
            </h2>

            {/* Description */}
            <p className="text-gray-800 leading-relaxed text-center max-w-3xl">
              {slides[currentSlide].description}
            </p>

            {/* Shape and Formula Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
              {/* Shape */}
              <div className="w-full md:w-96 h-64">
                {slides[currentSlide].shape}
              </div>

              {/* Formula */}
              <div className="text-center md:text-left">
                <p className="text-xl font-semibold text-gray-900">
                  {slides[currentSlide].formula}
                </p>
              </div>
            </div>

            {/* Examples */}
            <p className="text-gray-800 leading-relaxed text-center max-w-3xl mt-4">
              {slides[currentSlide].examples}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-orange-300 transition-colors"
              aria-label="Previous slide"
            >
              <span className="text-xl">‹</span>
            </button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentSlide ? "bg-gray-800" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-orange-300 transition-colors"
              aria-label="Next slide"
            >
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
