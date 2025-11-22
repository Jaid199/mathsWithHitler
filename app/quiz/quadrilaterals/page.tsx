"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function QuadrilateralsQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(7).fill(null));
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question:
        'What shape does this definition fit "Only one pair of sides are parallel."',
      options: ["Kite", "Trapezium", "Rectangle", "Deltoid"],
      correctAnswer: 1,
    },
    {
      id: 2,
      question:
        'What shape does this definition fit "Opposite sides are equal and parallel, the diagonals are equal."?',
      options: ["Kite", "Trapezium", "Rectangle", "Deltoid"],
      correctAnswer: 2,
    },
    {
      id: 3,
      question:
        'What shape does this definition fit "Opposite sides are equal and parallel, the diagonals are not equal."?',
      options: ["Kite", "Trapezium", "Rectangle", "Deltoid"],
      correctAnswer: 0,
    },
    {
      id: 4,
      question:
        'What shape does this definition fit "a four-sided polygon with at least one interior angle greatr then 180 degrees."?',
      options: ["Concave Quadrilateral", "Trapezium", "Rhomboid", "Deltoid"],
      correctAnswer: 0,
    },
    {
      id: 5,
      question:
        'What shape does this definition fit "... have four equal sides, apposite sides parallel, and opposite angles parallel."?',
      options: ["Concave Quadrilateral", "Trapezium", "Rectangle", "Deltoid"],
      correctAnswer: 2,
    },
    {
      id: 6,
      question: "What is the Quadrilateral called?",
      shape: (
        <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto mb-6">
          {/* Kite/Deltoid shape */}
          <polygon
            points="100,40 140,100 100,160 60,100"
            fill="#FF9944"
            stroke="#8B4513"
            strokeWidth="3"
          />
          {/* Tick marks to show equal sides */}
          <line
            x1="95"
            y1="65"
            x2="100"
            y2="60"
            stroke="#000"
            strokeWidth="2"
          />
          <line
            x1="105"
            y1="65"
            x2="100"
            y2="60"
            stroke="#000"
            strokeWidth="2"
          />
          <line
            x1="95"
            y1="135"
            x2="100"
            y2="140"
            stroke="#000"
            strokeWidth="2"
          />
          <line
            x1="105"
            y1="135"
            x2="100"
            y2="140"
            stroke="#000"
            strokeWidth="2"
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
        <svg viewBox="0 0 300 200" className="w-64 h-48 mx-auto mb-6">
          {/* Trapezoid shape */}
          <polygon
            points="80,130 220,130 190,70 110,70"
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
            {questions[currentQuestion].shape && (
              <div className="mb-6">{questions[currentQuestion].shape}</div>
            )}

            <h2 className="text-xl text-gray-900 text-center mb-8 font-light px-4">
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
