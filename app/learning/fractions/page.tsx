"use client";

import Header from "@/components/header";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const fractionSlides = [
  {
    title: "Fractions in Real Life (Ratios & Scaling)",
    content: (
      <div className="space-y-4">
        <p>
          Fractions appear in real life, such as recipes, maps and blueprints.
        </p>
        <p>
          They help in resizing quantities such as doubling/halfing ingredients
          and real-world ratios such as fuel/speed.
        </p>
        <p>Learning fractions, can help students apply these in real life.</p>
        <div className="flex justify-end mt-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center relative">
            <span className="absolute left-8 top-4 text-2xl font-bold">E</span>
            <span className="absolute right-8 top-4 text-2xl font-bold">F</span>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-black"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-orange-700 rounded-b-full"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Complex Fractions",
    content: (
      <div className="space-y-4">
        <p>Complex fractions refer to fractions within a fraction.</p>
        <p>This can be done the same way as you deal with division</p>
        <p>
          This is useful in the field of mathematics, as it helps people complex
          expressions and to simplify formulas.
        </p>
        <div className="flex items-center justify-center gap-4 text-3xl font-serif mt-8">
          <div className="flex flex-col items-center">
            <div className="border-b-2 border-black pb-1">6</div>
            <div className="flex flex-col items-center pt-1">
              <div className="border-b border-black pb-0.5">9</div>
              <div className="pt-0.5">7</div>
            </div>
          </div>
          <span>=</span>
          <div className="flex flex-col items-center">
            <div className="border-b-2 border-black pb-1">6</div>
            <div className="pt-1">7</div>
          </div>
          <span>÷</span>
          <div className="flex flex-col items-center">
            <div className="border-b-2 border-black pb-1">9</div>
            <div className="pt-1">7</div>
          </div>
          <span>=</span>
          <div className="flex flex-col items-center">
            <div className="border-b-2 border-black pb-1">6</div>
            <div className="pt-1">7</div>
          </div>
          <span>×</span>
          <div className="flex flex-col items-center">
            <div className="border-b-2 border-black pb-1">7</div>
            <div className="pt-1">9</div>
          </div>
          <span>=</span>
          <div className="flex flex-col items-center">
            <div className="border-b-2 border-black pb-1">42</div>
            <div className="pt-1">63</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Equivalent Fractions",
    content: (
      <div className="space-y-4">
        <p>
          When converted to decimal, some fractions can have the same value.
        </p>
        <p>This is called Equivalent Fractions.</p>
        <p>
          A fraction can be equivalent to another if one can be converted to
          another by multiplying or dividing both numerator or denominator with
          the same value
        </p>
        <p>
          Equivalent fractions can assist you when simplifying fractions, or
          when finding common denominators.
        </p>
        <div className="flex items-center justify-end gap-4 text-3xl font-serif mt-8">
          <div className="flex flex-col items-center">
            <div className="border-b-2 border-black pb-1">
              4<sup className="text-sm">×6</sup>
            </div>
            <div className="pt-1">
              5<sup className="text-sm">×6</sup>
            </div>
          </div>
          <span>=</span>
          <div className="flex flex-col items-center">
            <div className="border-b-2 border-black pb-1">
              24<sub className="text-sm">/2</sub>
            </div>
            <div className="pt-1">
              30<sub className="text-sm">/2</sub>
            </div>
          </div>
          <span>=</span>
          <div className="flex flex-col items-center">
            <div className="border-b-2 border-black pb-1">12</div>
            <div className="pt-1">15</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Improper Fractions and Mixed Numbers",
    content: (
      <div className="space-y-4">
        <p>
          Fractions can be found in many IRL examples, such as a pizza (1 slice
          is 1/8 ).
        </p>
        <p>
          A fraction can show a connection between whole numbers & remainders
        </p>
        <p>
          A proper fraction is where the numerator is smaller than the
          denominator.
        </p>
        <p>
          An improper fraction is a fraction where the numerator is bigger than
          the denominator
        </p>
        <p>
          An improper fraction (17 / 2) can be written as a mixed number. This
          can be done by combining a proper fraction with a whole number.
        </p>
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-4 text-3xl font-serif">
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">17</div>
              <div className="pt-1">2</div>
            </div>
            <span>=</span>
            <div className="flex items-center">
              <span>2</span>
              <div className="flex flex-col items-center text-2xl ml-1">
                <div className="border-b border-black pb-0.5">
                  <span>17</span>
                  <div className="border-b border-black w-full"></div>
                  <span>16</span>
                </div>
                <div className="pt-0.5">1</div>
              </div>
            </div>
            <span>=</span>
            <div className="flex items-center">
              <span>8</span>
              <div className="flex flex-col items-center text-2xl ml-1">
                <div className="border-b border-black pb-0.5">1</div>
                <div className="pt-0.5">2</div>
              </div>
            </div>
          </div>
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 relative">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-16 h-16 origin-bottom-left"
                  style={{ transform: `rotate(${i * 45}deg)` }}
                >
                  <div className="w-full h-0.5 bg-black"></div>
                </div>
              ))}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-full h-full origin-center"
                  style={{ transform: `rotate(${i * 45}deg)` }}
                >
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-600"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Fraction Operations",
    content: (
      <div className="space-y-4">
        <p>Adding and Subtraction requires you to have the same denominator</p>
        <p>
          For multiplication, you multiply numerator with numerator, and
          denominator with denominator
        </p>
        <p>For division, you would flip the 2nd fraction, and then multiply</p>
        <div className="space-y-6 mt-8">
          <div className="flex items-center gap-4 text-3xl font-serif justify-center">
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">6</div>
              <div className="pt-1">7</div>
            </div>
            <span>+</span>
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">9</div>
              <div className="pt-1">7</div>
            </div>
            <span>=</span>
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">15</div>
              <div className="pt-1">7</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-3xl font-serif justify-center">
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">6</div>
              <div className="pt-1">7</div>
            </div>
            <span>×</span>
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">9</div>
              <div className="pt-1">7</div>
            </div>
            <span>=</span>
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">54</div>
              <div className="pt-1">49</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-3xl font-serif justify-center">
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">6</div>
              <div className="pt-1">7</div>
            </div>
            <span>÷</span>
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">9</div>
              <div className="pt-1">7</div>
            </div>
            <span>=</span>
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">6</div>
              <div className="pt-1">7</div>
            </div>
            <span>×</span>
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">7</div>
              <div className="pt-1">9</div>
            </div>
            <span>=</span>
            <div className="flex flex-col items-center">
              <div className="border-b-2 border-black pb-1">42</div>
              <div className="pt-1">63</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function FractionPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNext = () => {
    setCurrentSlide((prev) =>
      prev < fractionSlides.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl p-8 md:p-12 shadow-lg relative">
            {/* Close button */}
            <Link
              href="/learning"
              className="absolute top-6 right-6 w-10 h-10 rounded-lg border-2 border-gray-800 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-gray-800" />
            </Link>

            {/* Title */}
            <h1
              className="text-5xl font-black text-gray-900 text-center mb-8"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              FRACTIONS
            </h1>

            {/* Content area with navigation */}
            <div className="relative flex items-center gap-4">
              {/* Previous button */}
              <button
                onClick={goToPrevious}
                disabled={currentSlide === 0}
                className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              {/* Slide content */}
              <div className="flex-1 min-h-[300px]">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {fractionSlides[currentSlide].title}
                </h2>
                <div className="text-gray-800 leading-relaxed">
                  {fractionSlides[currentSlide].content}
                </div>
              </div>

              {/* Next button */}
              <button
                onClick={goToNext}
                disabled={currentSlide === fractionSlides.length - 1}
                className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Slide indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {fractionSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-gray-800 w-8" : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
