"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function TransitionsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Translation (Shifting the Graph)",
      content: [
        {
          text: "Translation of a graph refers to the movement of the graph, without changing its shape.",
        },
        {
          text: '"Left/Right" happens when you add or subtract a number inside the function. The opposite of the symbol present inside will happen. For example, y=f(x+2) will move it 2 units left, as you will be subtracting the x coordinates.',
        },
        {
          text: '"Up/Down" happens when you add or subtract a number outside the function. For example, y=f(x)+3 will move it up 3 units.',
        },
      ],
      graph: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern
              id="grid1"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="40"
                height="40"
                fill="#F5CBA7"
                stroke="#D68910"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid1)" />
          <line
            x1="0"
            y1="100"
            x2="200"
            y2="100"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <path
            d="M 60 140 L 140 60"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <path d="M 80 160 L 160 80" stroke="#C4320A" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Stretch (Vertical Stretch or Compression)",
      content: [
        {
          text: "Stretching will change how tall or short a graph looks.",
        },
        {
          text: "This can be achieved by multiplying the function by a value.",
        },
        {
          text: "If said value is greater than 1, it will Stretch.",
        },
        {
          text: "(y=4*f(x))",
        },
        {
          text: "If said value is less than 1, but greater than 0, it will be a compression.",
        },
        {
          text: "(y=0.5*f(x))",
        },
      ],
      graph: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern
              id="grid2"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="40"
                height="40"
                fill="#F5CBA7"
                stroke="#D68910"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid2)" />
          <line
            x1="0"
            y1="100"
            x2="200"
            y2="100"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <path
            d="M 60 140 L 140 60"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <path d="M 80 180 L 120 20" stroke="#C4320A" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Stretch (Horizontal Stretch or Squish)",
      content: [
        {
          text: "Stretching can also refer to making a graph look wider or thinner.",
        },
        {
          text: "This can be achieved by multiplying the x value within the function.",
        },
        {
          text: "If said value is greater than 1, it will Squish.",
        },
        {
          text: "(y=f(4x))",
        },
        {
          text: "If said value is less than 1, but greater than 0, it will Stretch.",
        },
        {
          text: "(y=f(0.5x))",
        },
      ],
      graph: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern
              id="grid3"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="40"
                height="40"
                fill="#F5CBA7"
                stroke="#D68910"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid3)" />
          <line
            x1="0"
            y1="100"
            x2="200"
            y2="100"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <path
            d="M 60 140 L 140 60"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <path
            d="M 20 180 L 100 100 L 180 20"
            stroke="#C4320A"
            strokeWidth="3"
          />
        </svg>
      ),
    },
    {
      title: "Rotation",
      content: [
        {
          text: "Rotating a graph can be referred to moving the coordinates of the graph about a point.",
        },
        {
          text: "When moving the graph about the origin 90 degrees counterclockwise, the new coordinates will switch, while the y coordinate becomes negative. If it is clockwise, x coordinate becomes negative.",
        },
        {
          text: "counterclockwise: (x,y) becomes (-y,x)",
        },
        {
          text: "(2,1)          (-1,2)",
        },
        {
          text: "clockwise       (x,y) becomes (y,-x)",
        },
        {
          text: "(2,1)          (1,-2)",
        },
      ],
      graph: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern
              id="grid4"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="40"
                height="40"
                fill="#F5CBA7"
                stroke="#D68910"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid4)" />
          <line
            x1="0"
            y1="100"
            x2="200"
            y2="100"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <path
            d="M 140 70 L 170 130"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <path d="M 70 140 L 130 170" stroke="#C4320A" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Rotation",
      content: [
        {
          text: "Rotating a graph can be referred to moving the coordinates of the graph about a point.",
        },
        {
          text: "When moving the graph about the origin 180 degrees the new coordinates will be the negatives of both. 270 degrees clockwise is the same as 90 degrees counterclockwise, while 270 degrees counterclockwise is the same as 90 degrees clockwise.",
        },
        {
          text: "180 degrees: (x,y) becomes (-x,-y)",
        },
        {
          text: "(2,1)          (-2,-1)",
        },
      ],
      graph: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern
              id="grid5"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="40"
                height="40"
                fill="#F5CBA7"
                stroke="#D68910"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid5)" />
          <line
            x1="0"
            y1="100"
            x2="200"
            y2="100"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="200"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <path
            d="M 120 70 L 170 130"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <path d="M 30 170 L 80 70" stroke="#C4320A" strokeWidth="3" />
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
            TRANSITION
          </h1>

          {/* Content Area */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left Side - Text Content */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {slides[currentSlide].title}
              </h2>
              <div className="space-y-3">
                {slides[currentSlide].content.map((item, index) => (
                  <p key={index} className="text-gray-800 leading-relaxed">
                    {item.text}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Side - Graph */}
            <div className="w-full md:w-80 h-80 bg-orange-100 rounded-xl border-2 border-orange-800 overflow-hidden">
              {slides[currentSlide].graph}
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
