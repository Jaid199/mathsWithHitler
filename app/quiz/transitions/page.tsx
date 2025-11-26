"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function TranslationQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(7).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [shapePosition, setShapePosition] = useState({ x: -2, y: 3 });

  type Point = { x: number; y: number };

  type Question = {
    id: number;
    question: string;
    hint?: string;
    grid?: { pointA: Point; pointB: Point };
    options?: string[];
    displayOptions?: string[];
    correctAnswer?: number;
    vector?: string;
    instruction?: string;
    isDraggable?: boolean;
    startPosition?: Point;
    correctPosition?: Point;
    image?: string;
  };

  const questions: Question[] = [
    {
      id: 1,
      question: "Whats is the translation vector from A to B?",
      options: ["(⁴/₁)", "(⁸/₁)", "(⁵/₂)", "(⁴/₂)"],
      displayOptions: ["(⁴/₁)", "(⁸/₁)", "(⁵/₂)", "(⁴/₂)"],
      correctAnswer: 2,
      image: "/QS/QS1.png",
    },
    {
      id: 2,
      question: "Whats is the translation vector from B to A?",
      options: ["(⁴/₁)", "(⁸/₁)", "(⁻⁷/₁)", "(⁴/₂)"],
      displayOptions: ["(⁴/₁)", "(⁸/₁)", "(⁻⁷/₁)", "(⁴/₂)"],
      correctAnswer: 1,
      image: "/QS/QS2.png",
    },
    {
      id: 3,
      question: "Whats is the translation vector from C to D?",
      options: ["(⁴/₁)", "(⁸/₁)", "(²/₋₅)", "(⁴/₂)"],
      displayOptions: ["(⁴/₁)", "(⁸/₁)", "(²/₋₅)", "(⁴/₂)"],
      correctAnswer: 0,
      image: "/QS/QS3.png",
    },
    {
      id: 4,
      question: "Whats is the translation vector from B to A?",
      options: ["(⁴/₁)", "(⁸/₁)", "(⁻⁷/₁)", "(⁴/₂)"],
      displayOptions: ["(⁴/₁)", "(⁸/₁)", "(⁻⁷/₁)", "(⁴/₂)"],
      correctAnswer: 2,
      image: "/QS/QS4.png",
    },
    {
      id: 5,
      question: "Whats is the translation vector from Q to R?",
      options: ["(⁴/₁)", "(²/₋₂)", "(⁵/₂)", "(⁴/₂)"],
      displayOptions: ["(⁴/₁)", "(²/₋₂)", "(⁵/₂)", "(⁴/₂)"],
      correctAnswer: 1,
      image: "/QS/QS5.png",
    },
    {
      id: 6,
      question: "Whats is the translation vector from B to A?",
      options: ["(⁴/₁)", "(⁸/₁)", "(⁻⁵/₂)", "(⁴/₂)"],
      displayOptions: ["(⁴/₁)", "(⁸/₁)", "(⁻⁵/₂)", "(⁴/₂)"],
      correctAnswer: 2,
      image: "/QS/QS6.png",
    },
    {
      id: 7,
      question: "Translate shape A by the vector",
      vector: "(⁵/₁)",
      instruction: "Drag the shape to the correct position",
      isDraggable: true,
      startPosition: { x: -2, y: 3 },
      correctPosition: { x: 3, y: 4 },
      grid: { pointA: { x: -2, y: 3 }, pointB: { x: 3, y: 4 } },
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
      if (currentQuestion === 6) {
        const q7Correct = shapePosition.x === 3 && shapePosition.y === 4;
        const newAnswers = [...selectedAnswers];
        newAnswers[6] = q7Correct ? 0 : null;
        setSelectedAnswers(newAnswers);
      }
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

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, x: number, y: number) => {
    e.preventDefault();
    if (currentQuestion === 6) {
      setShapePosition({ x, y });
      const newAnswers = [...selectedAnswers];
      newAnswers[6] = 0;
      setSelectedAnswers(newAnswers);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (index === 6) {
        if (shapePosition.x === 3 && shapePosition.y === 4) correct++;
      } else if (answer === questions[index].correctAnswer) {
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
        <main className="container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl shadow-2xl p-12 text-center relative">
            <button
              onClick={() => window.history.back()}
              className="absolute top-6 right-6 w-8 h-8 rounded-lg border-2 border-gray-800 flex items-center justify-center hover:bg-orange-300 transition-colors"
            >
              <span className="text-xl font-bold">×</span>
            </button>

            <h1 className="text-4xl font-black text-gray-900 mb-8">
              TRANSLATION QUIZ
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
                      index === 6
                        ? shapePosition.x === 3 && shapePosition.y === 4
                          ? "text-green-600"
                          : "text-red-600"
                        : selectedAnswers[index] === q.correctAnswer
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {index === 6
                      ? shapePosition.x === 3 && shapePosition.y === 4
                        ? "✓ Correct"
                        : "✗ Incorrect"
                      : selectedAnswers[index] === q.correctAnswer
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
                setShapePosition({ x: -2, y: 3 });
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

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl shadow-2xl p-8 md:p-12 relative">
          <button
            onClick={() => window.history.back()}
            className="absolute top-6 right-6 w-8 h-8 rounded-lg border-2 border-gray-800 flex items-center justify-center hover:bg-orange-300 transition-colors"
          >
            <span className="text-xl font-bold">×</span>
          </button>

          <h1 className="text-4xl font-black text-gray-900 text-center mb-8">
            TRANSLATION
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
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              {/* Left side - Question */}
              <div className="flex-1">
                <h2 className="text-xl text-gray-900 mb-6 font-light">
                  {questions[currentQuestion].question}
                  {questions[currentQuestion].vector && (
                    <span className="block text-3xl font-normal mt-2">
                      {questions[currentQuestion].vector}
                    </span>
                  )}
                </h2>

                {questions[currentQuestion].instruction && (
                  <p className="text-sm text-gray-700 mb-6">
                    {questions[currentQuestion].instruction}
                  </p>
                )}

                {/* Answer Options or Draggable Shape */}
                {!questions[currentQuestion].isDraggable ? (
                  <div className="grid grid-cols-2 gap-4 max-w-xl">
                    {(questions[currentQuestion].options ?? []).map(
                      (option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          className={`p-5 rounded-2xl text-xl font-medium text-amber-900 transition-all ${
                            selectedAnswers[currentQuestion] === index
                              ? "bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg scale-105"
                              : "bg-orange-100 hover:bg-orange-200"
                          }`}
                        >
                          {questions[currentQuestion].displayOptions?.[index] ??
                            option}
                        </button>
                      )
                    )}
                  </div>
                ) : (
                  <div
                    draggable
                    onDragStart={handleDragStart}
                    className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-400 rounded-lg shadow-lg cursor-move hover:scale-110 transition-transform flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-2xl">A</span>
                  </div>
                )}
              </div>

              {/* Right side - Image or Grid */}
              <div className="bg-white rounded-xl p-6 shadow-inner">
                {/* Show image for questions 1-6 */}
                {!questions[currentQuestion].isDraggable &&
                questions[currentQuestion].image ? (
                  <img
                    src={questions[currentQuestion].image}
                    alt={`Question ${currentQuestion + 1} grid`}
                    className="w-full max-w-lg h-auto rounded-lg"
                  />
                ) : (
                  /* Show interactive grid for question 7 */
                  <svg viewBox="0 0 300 240" className="w-full max-w-lg h-auto">
                    {/* Grid lines - vertical */}
                    {[...Array(9)].map((_, i) => (
                      <line
                        key={`v${i}`}
                        x1={60 + i * 30}
                        y1="20"
                        x2={60 + i * 30}
                        y2="200"
                        stroke="#ccc"
                        strokeWidth="1"
                      />
                    ))}
                    {/* Grid lines - horizontal */}
                    {[...Array(7)].map((_, i) => (
                      <line
                        key={`h${i}`}
                        x1="60"
                        y1={20 + i * 30}
                        x2="300"
                        y2={20 + i * 30}
                        stroke="#ccc"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Axes - Bold */}
                    <line
                      x1="180"
                      y1="20"
                      x2="180"
                      y2="200"
                      stroke="#000"
                      strokeWidth="2"
                    />
                    <line
                      x1="60"
                      y1="110"
                      x2="300"
                      y2="110"
                      stroke="#000"
                      strokeWidth="2"
                    />

                    {/* X-axis numbers */}
                    {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((num, i) => (
                      <text
                        key={`x${i}`}
                        x={60 + i * 30}
                        y="220"
                        fontSize="12"
                        textAnchor="middle"
                        fill="#666"
                      >
                        {num}
                      </text>
                    ))}

                    {/* Y-axis numbers */}
                    {[4, 3, 2, 1, 0, -1, -2].map((num, i) => (
                      <text
                        key={`y${i}`}
                        x="45"
                        y={25 + i * 30}
                        fontSize="12"
                        textAnchor="middle"
                        fill="#666"
                      >
                        {num}
                      </text>
                    ))}

                    {/* Interactive drop zones */}
                    {[-2, -1, 0, 1, 2, 3, 4].map((yVal, row) =>
                      [-4, -3, -2, -1, 0, 1, 2, 3, 4].map((xVal, col) => (
                        <rect
                          key={`drop-${row}-${col}`}
                          x={60 + col * 30}
                          y={20 + (4 - yVal) * 30}
                          width="30"
                          height="30"
                          fill="transparent"
                          className="cursor-pointer hover:fill-orange-100 hover:opacity-30"
                          onDragOver={handleDragOver}
                          onDrop={(e) => handleDrop(e, xVal, yVal)}
                        />
                      ))
                    )}

                    {/* Starting position (faded) */}
                    {(shapePosition.x !== -2 || shapePosition.y !== 3) && (
                      <rect
                        x={180 + -2 * 30 - 15}
                        y={110 - 3 * 30 - 15}
                        width="30"
                        height="30"
                        fill="#FFE5CC"
                        stroke="#8B4513"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                      />
                    )}

                    {/* Current shape position */}
                    <rect
                      x={180 + shapePosition.x * 30 - 15}
                      y={110 - shapePosition.y * 30 - 15}
                      width="30"
                      height="30"
                      fill={
                        shapePosition.x === 3 && shapePosition.y === 4
                          ? "#4CAF50"
                          : "#FF9944"
                      }
                      stroke="#8B4513"
                      strokeWidth="2"
                    />
                    <text
                      x={180 + shapePosition.x * 30}
                      y={110 - shapePosition.y * 30 + 5}
                      fontSize="16"
                      fontWeight="bold"
                      textAnchor="middle"
                      fill="#fff"
                    >
                      A
                    </text>
                  </svg>
                )}
              </div>
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
              disabled={
                selectedAnswers[currentQuestion] === null &&
                !(currentQuestion === 6 && selectedAnswers[6] !== null)
              }
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                selectedAnswers[currentQuestion] === null &&
                !(currentQuestion === 6 && selectedAnswers[6] !== null)
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-400 to-amber-400 text-gray-900 hover:shadow-lg"
              }`}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>

            <button
              onClick={handleNext}
              disabled={
                selectedAnswers[currentQuestion] === null &&
                !(currentQuestion === 6 && selectedAnswers[6] !== null)
              }
              className={`w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center transition-colors ${
                selectedAnswers[currentQuestion] === null &&
                !(currentQuestion === 6 && selectedAnswers[6] !== null)
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
