"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function PointsLinesAnglesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Points and Lines",
      content: [
        "A point will show an exact location, it will have no size nor shape.",
        "A line is a straight path that goes in both directions, while a segment has two end points. A ray, however, will go infinitely in one direction.",
        "Lines are named using two points",
      ],
      diagram: (
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Point */}
          <circle cx="350" cy="80" r="8" fill="#000" />

          {/* Line with label */}
          <line
            x1="200"
            y1="220"
            x2="380"
            y2="120"
            stroke="#000"
            strokeWidth="3"
          />
          <text x="320" y="180" fill="#000" fontSize="32" fontWeight="bold">
            AB
          </text>
        </svg>
      ),
    },
    {
      title: "Types of Lines",
      content: [
        "Parallel lines never meet and stay the same distance apart.",
        "Intersecting lines meet or cross at a point.",
        "Perpendicular lines meet at a right angle (90°).",
        "Coincident lines lie exactly on top of each other, which is used to describe shapes, maps, roads and geometric patterns.",
      ],
      diagram: (
        <svg viewBox="0 0 500 350" className="w-full h-full">
          {/* Parallel lines */}
          <line
            x1="320"
            y1="80"
            x2="420"
            y2="50"
            stroke="#000"
            strokeWidth="2.5"
          />
          <line
            x1="320"
            y1="120"
            x2="420"
            y2="90"
            stroke="#000"
            strokeWidth="2.5"
          />
          <circle cx="370" cy="65" r="4" fill="#000" />
          <circle cx="370" cy="105" r="4" fill="#000" />

          {/* Intersecting lines */}
          <line
            x1="280"
            y1="160"
            x2="380"
            y2="210"
            stroke="#000"
            strokeWidth="2.5"
          />
          <line
            x1="320"
            y1="230"
            x2="340"
            y2="140"
            stroke="#000"
            strokeWidth="2.5"
          />
          <text x="290" y="190" fill="#000" fontSize="16">
            AB
          </text>
          <text x="345" y="170" fill="#000" fontSize="16">
            CD
          </text>

          {/* Perpendicular lines */}
          <line
            x1="280"
            y1="270"
            x2="420"
            y2="270"
            stroke="#000"
            strokeWidth="2.5"
          />
          <line
            x1="350"
            y1="240"
            x2="350"
            y2="300"
            stroke="#000"
            strokeWidth="2.5"
          />
          <text x="360" y="265" fill="#000" fontSize="16">
            CD
          </text>
          <text x="380" y="285" fill="#000" fontSize="16">
            AB
          </text>
          {/* Right angle marker */}
          <path
            d="M 345 270 L 345 265 L 350 265"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />

          {/* Coincident lines */}
          <line
            x1="350"
            y1="320"
            x2="470"
            y2="280"
            stroke="#000"
            strokeWidth="2.5"
          />
          <line
            x1="420"
            y1="340"
            x2="540"
            y2="300"
            stroke="#000"
            strokeWidth="2.5"
          />
          <text x="360" y="310" fill="#000" fontSize="16">
            AB
          </text>
          <text x="430" y="355" fill="#000" fontSize="16">
            CD
          </text>
        </svg>
      ),
    },
    {
      title: "Types of Angles",
      content: [],
      diagram: (
        <svg viewBox="0 0 600 400" className="w-full h-full">
          {/* Acute angle */}
          <g>
            <line
              x1="50"
              y1="100"
              x2="150"
              y2="100"
              stroke="#000"
              strokeWidth="2.5"
            />
            <line
              x1="50"
              y1="100"
              x2="120"
              y2="50"
              stroke="#000"
              strokeWidth="2.5"
            />
            <path
              d="M 70 100 Q 75 90 80 85"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="50" y="130" fill="#000" fontSize="16">
              Acute angle: less than 90°.
            </text>
          </g>

          {/* Right angle */}
          <g>
            <line
              x1="50"
              y1="200"
              x2="150"
              y2="200"
              stroke="#000"
              strokeWidth="2.5"
            />
            <line
              x1="50"
              y1="200"
              x2="50"
              y2="120"
              stroke="#000"
              strokeWidth="2.5"
            />
            <path
              d="M 50 190 L 50 180 L 60 180 L 60 190"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="50" y="230" fill="#000" fontSize="16">
              Right angle: exactly 90°.
            </text>
          </g>

          {/* Obtuse angle */}
          <g>
            <line
              x1="50"
              y1="320"
              x2="150"
              y2="320"
              stroke="#000"
              strokeWidth="2.5"
            />
            <line
              x1="50"
              y1="320"
              x2="30"
              y2="250"
              stroke="#000"
              strokeWidth="2.5"
            />
            <path
              d="M 70 320 Q 65 300 55 285"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="50" y="350" fill="#000" fontSize="16">
              Obtuse angle: between 90° and 180°.
            </text>
          </g>

          {/* Straight angle */}
          <g>
            <line
              x1="320"
              y1="100"
              x2="500"
              y2="100"
              stroke="#000"
              strokeWidth="2.5"
            />
            <path
              d="M 370 100 Q 400 80 430 100"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="320" y="130" fill="#000" fontSize="16">
              Straight angle: exactly 180°.
            </text>
          </g>

          {/* Reflex angle */}
          <g>
            <line
              x1="400"
              y1="250"
              x2="500"
              y2="250"
              stroke="#000"
              strokeWidth="2.5"
            />
            <line
              x1="400"
              y1="250"
              x2="350"
              y2="200"
              stroke="#000"
              strokeWidth="2.5"
            />
            <path
              d="M 420 250 Q 440 270 450 240 Q 460 210 430 200"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
            <text x="320" y="280" fill="#000" fontSize="16">
              Reflex angle: greater than 180° but less than 360°.
            </text>
          </g>
        </svg>
      ),
    },
    {
      title: "Angle Relationships",
      content: [
        "(Knowing relationships between angles can help us learn about unkown angles)",
        "Complementary angles: two angles that add up to 90°, but adjacent angles do not need to add ap to 90°.",
        "Vertically opposite angles: formed when two lines cross - always equal.",
        "Supplementary angles: two angles that add up to 180°.",
      ],
      diagram: (
        <svg viewBox="0 0 600 300" className="w-full h-full">
          {/* Complementary angles */}
          <g>
            <line
              x1="80"
              y1="150"
              x2="180"
              y2="150"
              stroke="#000"
              strokeWidth="2.5"
            />
            <line
              x1="80"
              y1="150"
              x2="80"
              y2="80"
              stroke="#000"
              strokeWidth="2.5"
            />
            <line
              x1="80"
              y1="150"
              x2="140"
              y2="100"
              stroke="#000"
              strokeWidth="2.5"
            />
            <text x="85" y="135" fill="#000" fontSize="18" fontWeight="bold">
              A
            </text>
            <text x="85" y="115" fill="#000" fontSize="18" fontWeight="bold">
              B
            </text>
            <path
              d="M 80 140 L 90 140 L 90 150"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
          </g>

          {/* Vertically opposite angles */}
          <g>
            <line
              x1="200"
              y1="120"
              x2="320"
              y2="180"
              stroke="#000"
              strokeWidth="2.5"
            />
            <line
              x1="200"
              y1="180"
              x2="320"
              y2="120"
              stroke="#000"
              strokeWidth="2.5"
            />
            <text x="240" y="140" fill="#000" fontSize="18" fontWeight="bold">
              A
            </text>
            <text x="270" y="170" fill="#000" fontSize="18" fontWeight="bold">
              B
            </text>
            <text x="230" y="170" fill="#000" fontSize="18" fontWeight="bold">
              C
            </text>
            <text x="280" y="140" fill="#000" fontSize="18" fontWeight="bold">
              D
            </text>
          </g>

          {/* Supplementary angles */}
          <g>
            <line
              x1="420"
              y1="150"
              x2="580"
              y2="150"
              stroke="#000"
              strokeWidth="2.5"
            />
            <line
              x1="420"
              y1="150"
              x2="480"
              y2="100"
              stroke="#000"
              strokeWidth="2.5"
            />
            <text x="475" y="135" fill="#000" fontSize="18" fontWeight="bold">
              A
            </text>
            <text x="510" y="135" fill="#000" fontSize="18" fontWeight="bold">
              B
            </text>
            <path
              d="M 450 150 Q 460 135 470 125"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M 480 150 Q 500 140 520 145"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Angles Formed by Parallel Lines and a Transversal",
      content: [
        "A transversal is a line that cuts across two or more parallel lines, creating Alternate angles, Co-interior angles, & Corresponding Angles",
        "Alternate angles are equal (A).",
        "Co-interior angles add up to 180° (CI).",
        "Corresponding angles are equal too (CR).",
      ],
      diagram: (
        <svg viewBox="0 0 500 350" className="w-full h-full">
          {/* Two parallel lines */}
          <line
            x1="250"
            y1="80"
            x2="450"
            y2="20"
            stroke="#000"
            strokeWidth="3"
          />
          <line
            x1="250"
            y1="220"
            x2="450"
            y2="160"
            stroke="#000"
            strokeWidth="3"
          />

          {/* Transversal */}
          <line
            x1="300"
            y1="10"
            x2="380"
            y2="280"
            stroke="#000"
            strokeWidth="3"
          />

          {/* Labels and angle markers */}
          {/* Top intersection */}
          <circle
            cx="330"
            cy="50"
            r="18"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <text x="322" y="57" fill="#000" fontSize="16" fontWeight="bold">
            A
          </text>

          <circle
            cx="355"
            cy="65"
            r="18"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <text x="347" y="72" fill="#000" fontSize="16" fontWeight="bold">
            A
          </text>

          <text x="275" y="110" fill="#000" fontSize="20" fontWeight="bold">
            AB
          </text>

          {/* Bottom intersection */}
          <circle
            cx="340"
            cy="165"
            r="18"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <text x="332" y="172" fill="#000" fontSize="16" fontWeight="bold">
            A
          </text>

          <circle
            cx="365"
            cy="180"
            r="18"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <text x="357" y="187" fill="#000" fontSize="16" fontWeight="bold">
            CD
          </text>

          {/* CR marker (Corresponding) */}
          <path
            d="M 395 150 L 395 160 L 405 160"
            fill="none"
            stroke="#000"
            strokeWidth="2.5"
          />
          <text x="410" y="165" fill="#000" fontSize="16" fontWeight="bold">
            CR
          </text>
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
            POINTS, LINES & ANGLES
          </h1>

          {/* Content Area */}
          <div className="flex flex-col md:flex-row gap-8 items-start min-h-[400px]">
            {/* Left Side - Text Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {slides[currentSlide].title}
              </h2>
              <div className="space-y-3">
                {slides[currentSlide].content.map((text, index) => (
                  <p key={index} className="text-gray-800 leading-relaxed">
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Side - Diagram */}
            <div className="w-full md:w-96 h-80 flex items-center justify-center">
              {slides[currentSlide].diagram}
            </div>
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
