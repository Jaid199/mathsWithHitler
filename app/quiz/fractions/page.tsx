"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function FractionsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(7).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      problem: (
        <div className="text-5xl font-light text-gray-900 flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span>1</span>
            <span className="border-t-2 border-gray-900 w-8"></span>
            <span>2</span>
          </div>
          <span>+</span>
          <div className="flex flex-col items-center">
            <span>3</span>
            <span className="border-t-2 border-gray-900 w-8"></span>
            <span>4</span>
          </div>
          <span>=</span>
          <span>?</span>
        </div>
      ),
      options: ["½", "¾", "⁵⁄₄", "²⁄₄"],
      correctAnswer: 2,
    },
    {
      id: 2,
      problem: (
        <div className="text-5xl font-light text-gray-900 flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span>6</span>
            <span className="border-t-2 border-gray-900 w-8"></span>
            <span>7</span>
          </div>
          <span>+</span>
          <div className="flex flex-col items-center">
            <span>10</span>
            <span className="border-t-2 border-gray-900 w-12"></span>
            <span>13</span>
          </div>
          <span>=</span>
          <span>?</span>
        </div>
      ),
      options: ["¹⁴⁸⁄₉₁", "¹⁴⁸⁄₉₁", "¹⁴⁶⁄₉₁", "¹⁴⁶⁄₉₃"],
      correctAnswer: 0,
    },
    {
      id: 3,
      problem: (
        <div className="text-5xl font-light text-gray-900 flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span>5</span>
            <span className="border-t-2 border-gray-900 w-12"></span>
            <span>11</span>
          </div>
          <span>−</span>
          <div className="flex flex-col items-center">
            <span>9</span>
            <span className="border-t-2 border-gray-900 w-12"></span>
            <span>14</span>
          </div>
          <span>=</span>
          <span>?</span>
        </div>
      ),
      options: ["⁷⁰⁄₁₅₄", "⁻²⁹⁄₁₅₄", "⁻⁴⁹⁄₁₅₄", "⁻⁴⁹⁄₁₅₄"],
      correctAnswer: 2,
    },
    {
      id: 4,
      problem: (
        <div className="text-5xl font-light text-gray-900 flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span>1</span>
            <span className="border-t-2 border-gray-900 w-8"></span>
            <span>4</span>
          </div>
          <span>+</span>
          <div className="flex flex-col items-center">
            <span>1</span>
            <span className="border-t-2 border-gray-900 w-8"></span>
            <span>2</span>
          </div>
          <span>+</span>
          <div className="flex flex-col items-center">
            <span>3</span>
            <span className="border-t-2 border-gray-900 w-8"></span>
            <span>4</span>
          </div>
          <span>=</span>
          <span>?</span>
        </div>
      ),
      options: ["³⁄₂", "⁵⁄₄", "³⁄₄", "⁵⁄₆"],
      correctAnswer: 0,
    },
    {
      id: 5,
      instruction: "Write as a single fraction, in its simplest form!",
      problem: (
        <div className="text-4xl font-light text-gray-900 flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span>3</span>
            <span className="border-t-2 border-gray-900 w-20"></span>
            <span>x + 2</span>
          </div>
          <span>−</span>
          <div className="flex flex-col items-center">
            <span>2</span>
            <span className="border-t-2 border-gray-900 w-16"></span>
            <span>x − 1</span>
          </div>
          <span>=</span>
          <span>?</span>
        </div>
      ),
      options: [
        "(x² − 3x − 2)/(x² + x − 2)",
        "(x − 7)/(x² + x − 2)",
        "7/(x² + x − 2)",
        "(x − 7)/(x − 2)",
      ],
      correctAnswer: 1,
    },
    {
      id: 6,
      instruction: "Write as a single fraction, in its simplest form!",
      problem: (
        <div className="text-5xl font-light text-gray-900 flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span>1</span>
            <span className="border-t-2 border-gray-900 w-8"></span>
            <span>y</span>
          </div>
          <span>−</span>
          <div className="flex flex-col items-center">
            <span>2</span>
            <span className="border-t-2 border-gray-900 w-8"></span>
            <span>x</span>
          </div>
          <span>=</span>
          <span>?</span>
        </div>
      ),
      options: ["(x − 2)/(x)", "xy/(2x + 1)", "(x − 2y)/(xy)", "x/xy"],
      correctAnswer: 2,
    },
    {
      id: 7,
      instruction: "Write as a single fraction, in its simplest form!",
      problem: (
        <div className="text-4xl font-light text-gray-900 flex items-center gap-4">
          <div className="flex flex-col items-center">
            <span>3</span>
            <span className="border-t-2 border-gray-900 w-24"></span>
            <span>x + 10</span>
          </div>
          <span>−</span>
          <div className="flex flex-col items-center">
            <span>1</span>
            <span className="border-t-2 border-gray-900 w-20"></span>
            <span>x + 4</span>
          </div>
          <span>=</span>
          <span>?</span>
        </div>
      ),
      options: [
        "(2x + 2)/(x² + 3x − 2)",
        "(2x + 2)/(x² + 14x + 40)",
        "8/(x + 8x − 2)",
        "(x − 1)/(x − 7)",
      ],
      correctAnswer: 1,
    },
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuestionNav = (index: number) => {
    setCurrentQuestion(index);
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-12">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl shadow-2xl p-12 text-center">
            <button
              onClick={() => window.history.back()}
              className="absolute top-6 right-6 w-8 h-8 rounded-lg border-2 border-gray-800 flex items-center justify-center hover:bg-orange-300 transition-colors"
            >
              <span className="text-xl font-bold">×</span>
            </button>

            <h1 className="text-4xl font-black text-gray-900 mb-8">
              FRACTIONS QUIZ
            </h1>

            {percentage === 100 ? (
              <>
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Congratulations!
                </h2>
                <p className="text-xl text-gray-800 mb-6">Perfect Score!</p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Quiz Complete!
                </h2>
              </>
            )}

            <div className="text-6xl font-black text-gray-900 mb-6">
              {percentage}%
            </div>
            <p className="text-2xl text-gray-800 mb-8">
              You got {score} out of {questions.length} correct
            </p>

            <div className="space-y-4 mb-8">
              {questions.map((q, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-orange-100 rounded-lg p-4"
                >
                  <span className="font-semibold text-gray-900">
                    Question {index + 1}
                  </span>
                  <span
                    className={`font-bold ${
                      selectedAnswers[index] === q.correctAnswer
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedAnswers[index] === q.correctAnswer
                      ? "✓ Correct"
                      : "✗ Incorrect"}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setSelectedAnswers(Array(7).fill(null));
              }}
              className="bg-gradient-to-r from-orange-400 to-amber-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all"
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl shadow-2xl p-8 md:p-12 relative">
          <button
            onClick={() => window.history.back()}
            className="absolute top-6 right-6 w-8 h-8 rounded-lg border-2 border-gray-800 flex items-center justify-center hover:bg-orange-300 transition-colors"
          >
            <span className="text-xl font-bold">×</span>
          </button>

          <h1 className="text-4xl font-black text-gray-900 text-center mb-8">
            FRACTIONS
          </h1>

          {/* Question Navigation */}
          <div className="flex gap-2 mb-8 justify-center flex-wrap">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleQuestionNav(index)}
                className={`w-12 h-12 rounded-lg font-bold text-gray-900 transition-all ${
                  currentQuestion === index
                    ? "bg-gradient-to-br from-orange-400 to-amber-400 shadow-lg scale-110"
                    : selectedAnswers[index] !== null
                    ? "bg-orange-300"
                    : "bg-orange-100 hover:bg-orange-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Question Content */}
          <div className="mb-8">
            {questions[currentQuestion].instruction && (
              <p className="text-xl text-gray-900 text-center mb-6">
                {questions[currentQuestion].instruction}
              </p>
            )}

            <div className="flex justify-center mb-12">
              {questions[currentQuestion].problem}
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`p-6 rounded-2xl text-xl font-medium transition-all ${
                    selectedAnswers[currentQuestion] === index
                      ? "bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg scale-105"
                      : "bg-orange-100 hover:bg-orange-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center transition-colors ${
                currentQuestion === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-orange-300"
              }`}
            >
              <span className="text-xl">‹</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === null}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedAnswers[currentQuestion] === null
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-400 to-amber-400 text-gray-900 hover:shadow-lg"
              }`}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === null}
              className={`w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center transition-colors ${
                selectedAnswers[currentQuestion] === null
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-orange-300"
              }`}
            >
              <span className="text-xl">›</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
