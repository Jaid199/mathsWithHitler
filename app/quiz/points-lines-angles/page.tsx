"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function PointsLinesAnglesQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(7).fill(null));
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What type of line is this?",
      diagram: (
        <svg viewBox="0 0 200 150" className="w-64 h-48 mx-auto mb-6">
          {/* Two parallel lines with arrows */}
          <defs>
            <marker
              id="arrowhead1"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
            </marker>
          </defs>
          <line
            x1="40"
            y1="80"
            x2="140"
            y2="40"
            stroke="#000"
            strokeWidth="3"
            markerEnd="url(#arrowhead1)"
          />
          <line
            x1="60"
            y1="110"
            x2="160"
            y2="70"
            stroke="#000"
            strokeWidth="3"
            markerEnd="url(#arrowhead1)"
          />
        </svg>
      ),
      options: ["Parallel", "Tangent", "Perpendicular", "Chord"],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "Calculate the value of x.",
      diagram: (
        <svg viewBox="0 0 300 200" className="w-80 h-56 mx-auto mb-6">
          {/* Perpendicular lines with 70° angle */}
          <line
            x1="100"
            y1="120"
            x2="250"
            y2="120"
            stroke="#000"
            strokeWidth="3"
          />
          <line
            x1="150"
            y1="60"
            x2="150"
            y2="140"
            stroke="#000"
            strokeWidth="3"
          />
          {/* Right angle marker */}
          <path
            d="M 145 120 L 145 115 L 150 115"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          {/* Angle arc */}
          <path
            d="M 165 120 Q 165 105 155 100"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
          <text x="145" y="95" fill="#000" fontSize="18" fontWeight="bold">
            70°
          </text>
          <text x="170" y="110" fill="#000" fontSize="18" fontWeight="bold">
            x
          </text>
        </svg>
      ),
      options: ["90", "20", "25", "45"],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Calculate the value of x.",
      diagram: (
        <svg viewBox="0 0 300 200" className="w-80 h-56 mx-auto mb-6">
          {/* Supplementary angles */}
          <line
            x1="50"
            y1="120"
            x2="250"
            y2="120"
            stroke="#000"
            strokeWidth="3"
          />
          <line
            x1="120"
            y1="70"
            x2="180"
            y2="120"
            stroke="#000"
            strokeWidth="3"
          />
          {/* Angle labels */}
          <text x="110" y="95" fill="#000" fontSize="18" fontWeight="bold">
            72°
          </text>
          <text x="155" y="105" fill="#000" fontSize="18" fontWeight="bold">
            2x
          </text>
        </svg>
      ),
      options: ["42", "23", "44", "54"],
      correctAnswer: 3,
    },
    {
      id: 4,
      question: "Calculate thee value of x.",
      diagram: (
        <svg viewBox="0 0 300 220" className="w-80 h-60 mx-auto mb-6">
          {/* Right triangle */}
          <polygon
            points="120,80 240,140 120,140"
            fill="#FF9944"
            stroke="#000"
            strokeWidth="3"
          />
          <text x="115" y="75" fill="#000" fontSize="18" fontWeight="bold">
            x
          </text>
          <text x="200" y="155" fill="#000" fontSize="18" fontWeight="bold">
            63°
          </text>
          {/* Right angle marker */}
          <path
            d="M 120 135 L 125 135 L 125 140"
            fill="none"
            stroke="#000"
            strokeWidth="2"
          />
        </svg>
      ),
      options: ["27", "14", "33", "30"],
      correctAnswer: 0,
    },
    {
      id: 5,
      question: "What is the value of angle w?",
      diagram: (
        <svg viewBox="0 0 300 220" className="w-80 h-60 mx-auto mb-6">
          {/* Vertically opposite angles */}
          <line
            x1="100"
            y1="80"
            x2="200"
            y2="80"
            stroke="#000"
            strokeWidth="3"
            markerEnd="url(#arrowhead2)"
          />
          <line
            x1="120"
            y1="120"
            x2="220"
            y2="120"
            stroke="#000"
            strokeWidth="3"
            markerEnd="url(#arrowhead2)"
          />
          <line
            x1="150"
            y1="60"
            x2="170"
            y2="140"
            stroke="#000"
            strokeWidth="3"
          />
          <defs>
            <marker
              id="arrowhead2"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
            </marker>
          </defs>
          <text x="130" y="75" fill="#000" fontSize="18" fontWeight="bold">
            35°
          </text>
          <text x="172" y="110" fill="#000" fontSize="18" fontWeight="bold">
            w
          </text>
        </svg>
      ),
      options: ["180", "145", "35", "25"],
      correctAnswer: 1,
    },
    {
      id: 6,
      question: "What is the value of angle y?",
      diagram: (
        <svg viewBox="0 0 300 220" className="w-80 h-60 mx-auto mb-6">
          {/* Intersecting lines with angles */}
          <line
            x1="80"
            y1="80"
            x2="220"
            y2="140"
            stroke="#000"
            strokeWidth="3"
          />
          <line
            x1="80"
            y1="140"
            x2="220"
            y2="80"
            stroke="#000"
            strokeWidth="3"
          />
          <text x="130" y="75" fill="#000" fontSize="16" fontWeight="bold">
            130°
          </text>
          <text x="125" y="130" fill="#000" fontSize="16" fontWeight="bold">
            50°
          </text>
          <text x="170" y="95" fill="#000" fontSize="16" fontWeight="bold">
            130°
          </text>
          <text x="165" y="120" fill="#000" fontSize="16" fontWeight="bold">
            y
          </text>
        </svg>
      ),
      options: ["30", "50", "45", "90"],
      correctAnswer: 1,
    },
    {
      id: 7,
      question: "What is the value of angle k?",
      diagram: (
        <svg viewBox="0 0 300 220" className="w-80 h-60 mx-auto mb-6">
          {/* Quadrilateral with angles */}
          <polygon
            points="120,80 220,90 200,150 100,140"
            fill="none"
            stroke="#000"
            strokeWidth="3"
          />
          <text x="110" y="100" fill="#000" fontSize="18" fontWeight="bold">
            x°
          </text>
          <text x="210" y="105" fill="#000" fontSize="18" fontWeight="bold">
            120°
          </text>
          <text x="190" y="160" fill="#000" fontSize="18" fontWeight="bold">
            75°
          </text>
          <text x="90" y="155" fill="#000" fontSize="18" fontWeight="bold">
            k
          </text>
        </svg>
      ),
      options: ["78", "68", "25", "49"],
      correctAnswer: 0,
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
              POINTS, LINES, AND ANGLES QUIZ
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
            POINTS, LINES, AND ANGLES
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
            {questions[currentQuestion].diagram && (
              <div className="mb-6">{questions[currentQuestion].diagram}</div>
            )}

            <h2 className="text-xl text-gray-900 text-center mb-8 font-light">
              {questions[currentQuestion].question}
            </h2>

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
