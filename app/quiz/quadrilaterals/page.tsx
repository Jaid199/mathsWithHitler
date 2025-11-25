"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function QuadrilateralsQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Array<number | null>>(
    Array(7).fill(null)
  );
  const [showResults, setShowResults] = useState<boolean>(false);

  const questions = [
    {
      id: 1,
      question: "Find the area of the rectangle.",
      shape: (
        <svg viewBox="0 0 200 120" className="w-64 h-40 mx-auto mb-6">
          <rect
            x="50"
            y="30"
            width="100"
            height="60"
            fill="#FF9944"
            stroke="#8B4513"
            strokeWidth="3"
          />
          <text x="100" y="20" textAnchor="middle" fill="#000" fontSize="14">
            10 cm
          </text>
          <text x="100" y="105" textAnchor="middle" fill="#000" fontSize="14">
            30 cm
          </text>
        </svg>
      ),
      options: ["350 cm²", "300 cm²", "200 cm²", "310 cm²"],
      correctAnswer: 1,
    },
    {
      id: 2,
      question:
        "Find the missing dimension of the trapezium, given an area of 32.5 cm².",
      shape: (
        <svg viewBox="0 0 200 140" className="w-64 h-48 mx-auto mb-6">
          <polygon
            points="60,90 140,90 120,50 80,50"
            fill="#FF9944"
            stroke="#8B4513"
            strokeWidth="3"
          />
          <text x="100" y="45" textAnchor="middle" fill="#000" fontSize="12">
            4 cm
          </text>
          <text x="100" y="65" textAnchor="middle" fill="#000" fontSize="12">
            x cm
          </text>
          <text x="100" y="110" textAnchor="middle" fill="#000" fontSize="12">
            9 cm
          </text>
        </svg>
      ),
      options: ["9 cm", "5 cm", "16 cm", "6 cm"],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Find the area of the kite",
      shape: (
        <svg viewBox="0 0 200 140" className="w-64 h-48 mx-auto mb-6">
          <polygon
            points="100,30 120,70 100,110 80,70"
            fill="#FF9944"
            stroke="#8B4513"
            strokeWidth="3"
          />
          <text x="100" y="55" textAnchor="middle" fill="#000" fontSize="12">
            3 cm
          </text>
          <text x="85" y="75" textAnchor="middle" fill="#000" fontSize="12">
            7 cm
          </text>
        </svg>
      ),
      options: ["50 cm²", "30 cm²", "95 cm²", "45 cm²"],
      correctAnswer: 0,
    },
    {
      id: 4,
      question:
        "Find the missing dimension of the rectangle, given an area of 264 cm².",
      shape: (
        <svg viewBox="0 0 200 140" className="w-64 h-48 mx-auto mb-6">
          <rect
            x="60"
            y="40"
            width="80"
            height="60"
            fill="#FF9944"
            stroke="#8B4513"
            strokeWidth="3"
          />
          <text x="155" y="75" textAnchor="middle" fill="#000" fontSize="14">
            11 cm
          </text>
          <text x="100" y="115" textAnchor="middle" fill="#000" fontSize="14">
            x cm
          </text>
        </svg>
      ),
      options: ["24 cm", "16 cm", "48 cm", "10 cm"],
      correctAnswer: 0,
    },
    {
      id: 5,
      question:
        "Find the length ×x of the parallelogram, given an area of 54 cm².",
      shape: (
        <svg viewBox="0 0 200 140" className="w-64 h-48 mx-auto mb-6">
          <polygon
            points="70,80 130,80 150,50 90,50"
            fill="#FF9944"
            stroke="#8B4513"
            strokeWidth="3"
          />
          <text x="110" y="70" textAnchor="middle" fill="#000" fontSize="12">
            x cm
          </text>
          <text x="110" y="105" textAnchor="middle" fill="#000" fontSize="12">
            9 cm
          </text>
        </svg>
      ),
      options: ["6 cm", "9 cm", "5 cm", "10 cm"],
      correctAnswer: 0,
    },
    {
      id: 6,
      question: "What is the Quadrilateral called?",
      shape: (
        <svg viewBox="0 0 200 140" className="w-64 h-48 mx-auto mb-6">
          <polygon
            points="100,30 130,70 100,110 70,70"
            fill="#FF9944"
            stroke="#8B4513"
            strokeWidth="3"
          />
        </svg>
      ),
      options: ["Kite", "Trapezium", "Rectangle", "Deltoid"],
      correctAnswer: 0,
    },
    {
      id: 7,
      question: "What is this Quadrilateral called?",
      shape: (
        <svg viewBox="0 0 200 120" className="w-64 h-40 mx-auto mb-6">
          <polygon
            points="70,80 130,80 110,40 90,40"
            fill="#FF9944"
            stroke="#8B4513"
            strokeWidth="3"
          />
        </svg>
      ),
      options: ["Kite", "Trapezium", "Rectangle", "Deltoid"],
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
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl shadow-2xl p-12 text-center relative">
            <button
              onClick={() => window.history.back()}
              className="absolute top-6 right-6 w-8 h-8 rounded-lg border-2 border-gray-800 flex items-center justify-center hover:bg-orange-300 transition-colors"
            >
              <span className="text-xl font-bold">×</span>
            </button>

            <h1 className="text-4xl font-black text-gray-900 mb-8">
              QUADRILATERALS QUIZ
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
            QUADRILATERALS
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
            <h2 className="text-xl text-gray-900 text-center mb-6 font-light">
              {questions[currentQuestion].question}
            </h2>

            {questions[currentQuestion].shape && (
              <div className="mb-6">{questions[currentQuestion].shape}</div>
            )}

            {/* Answer Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`p-6 rounded-2xl text-xl font-medium text-amber-900 transition-all ${
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
