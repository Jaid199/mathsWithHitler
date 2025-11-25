// "use client";

// import { useState } from "react";
// import Header from "@/components/header";

// export default function TranslationQuizPage() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState(Array(7).fill(null));
//   const [showResults, setShowResults] = useState(false);
//   const [shapePosition, setShapePosition] = useState({ x: 4, y: 2 });
//   const [isDragging, setIsDragging] = useState(false);

//   const questions = [
//     {
//       id: 1,
//       question: "Whats is the translation vector from A to B?",
//       hint: "(⁻₁):(⁻₁):",
//       grid: { pointA: { x: 7, y: 3 }, pointB: { x: 6, y: 2 } },
//       options: ["(⁻₁/₄)", "(⁻₁/₁)", "(⁻₁/₋₁)", "(⁻₁/₂)"],
//       displayOptions: ["(⁻¹/₄)", "(⁻¹/₁)", "(⁻¹/₋₁)", "(⁻¹/₂)"],
//       correctAnswer: 2,
//     },
//     {
//       id: 2,
//       question: "Whats is the translation vector from B to A?",
//       hint: "(¹):( ¹):",
//       grid: { pointA: { x: 7, y: 3 }, pointB: { x: 6, y: 2 } },
//       options: ["(⁴/₁)", "(⁸/₁)", "(¹/₋₁)", "(¹/₂)"],
//       displayOptions: ["(⁴/₁)", "(⁸/₁)", "(¹/₋₁)", "(¹/₂)"],
//       correctAnswer: 2,
//     },
//     {
//       id: 3,
//       question: "Whats is the translation vector from Q to R?",
//       hint: "(¹):(¹):",
//       grid: { pointA: { x: 4, y: 3 }, pointB: { x: 6, y: 5 } },
//       options: ["(⁴/₁)", "(²/₂)", "(³/₋₁)", "(¹/₂)"],
//       displayOptions: ["(⁴/₁)", "(²/₂)", "(³/₋₁)", "(¹/₂)"],
//       correctAnswer: 1,
//     },
//     {
//       id: 4,
//       question: "Whats is the translation vector from B to A?",
//       hint: "(¹):(¹):",
//       grid: { pointA: { x: 3, y: 3 }, pointB: { x: 7, y: 5 } },
//       options: ["(⁻₄/₁)", "(⁻₁/₂)", "(⁻₁/₋₂)", "(⁻₁/₄)"],
//       displayOptions: ["(⁻⁴/₁)", "(⁻¹/₂)", "(⁻¹/₋₂)", "(⁻¹/₄)"],
//       correctAnswer: 2,
//     },
//     {
//       id: 5,
//       question: "Whats is the translation vector from C to D?",
//       hint: "(¹):(¹):",
//       grid: { pointA: { x: 3, y: 4 }, pointB: { x: 6, y: 6 } },
//       options: ["(⁻₄/₁)", "(⁻₁/₂)", "(⁸/₂)", "(³/₂)"],
//       displayOptions: ["(⁻⁴/₁)", "(⁻¹/₂)", "(⁸/₂)", "(³/₂)"],
//       correctAnswer: 3,
//     },
//     {
//       id: 6,
//       question: "Whats is the translation vector from B to A?",
//       hint: "(¹):(¹):",
//       grid: { pointA: { x: 7, y: 5 }, pointB: { x: 4, y: 3 } },
//       options: ["(⁻₄/₁)", "(⁻₁/₂)", "(⁸/₂)", "(³/₋₂)"],
//       displayOptions: ["(⁻⁴/₁)", "(⁻¹/₂)", "(⁸/₂)", "(³/₋₂)"],
//       correctAnswer: 3,
//     },
//     {
//       id: 7,
//       question: "Translate shape A by the vector",
//       vector: "(⁵/₁)",
//       instruction: "Put the shape into correct position",
//       isDraggable: true,
//     },
//   ];

//   const handleAnswerSelect = (answerIndex: number) => {
//     const newAnswers = [...selectedAnswers];
//     newAnswers[currentQuestion] = answerIndex;
//     setSelectedAnswers(newAnswers);
//   };

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       // Check if question 7 is correct (shape at position x=9, y=3)
//       const q7Correct = shapePosition.x === 9 && shapePosition.y === 3;
//       const newAnswers = [...selectedAnswers];
//       newAnswers[6] = q7Correct ? 0 : null;
//       setSelectedAnswers(newAnswers);
//       setShowResults(true);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleQuestionNav = (index: number) => {
//     setCurrentQuestion(index);
//   };

//   const handleGridClick = (x: number, y: number) => {
//     if (currentQuestion === 6) {
//       setShapePosition({ x, y });
//       const newAnswers = [...selectedAnswers];
//       newAnswers[6] = 0; // Mark as answered
//       setSelectedAnswers(newAnswers);
//     }
//   };

//   const calculateScore = () => {
//     let correct = 0;
//     selectedAnswers.forEach((answer, index) => {
//       if (index === 6) {
//         // Check draggable question
//         if (shapePosition.x === 9 && shapePosition.y === 3) correct++;
//       } else if (answer === questions[index].correctAnswer) {
//         correct++;
//       }
//     });
//     return correct;
//   };

//   const score = calculateScore();
//   const percentage = Math.round((score / questions.length) * 100);

//   if (showResults) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
//         <Header />
//         <main className="container mx-auto px-4 pt-32 pb-12">
//           <div className="max-w-3xl mx-auto bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl shadow-2xl p-12 text-center relative">
//             <button
//               onClick={() => window.history.back()}
//               className="absolute top-6 right-6 w-8 h-8 rounded-lg border-2 border-gray-800 flex items-center justify-center hover:bg-orange-300 transition-colors"
//             >
//               <span className="text-xl font-bold">×</span>
//             </button>

//             <h1 className="text-4xl font-black text-gray-900 mb-8">
//               TRANSLATION QUIZ
//             </h1>

//             {percentage === 100 ? (
//               <>
//                 <div className="text-6xl mb-4">🎉</div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                   Congratulations!
//                 </h2>
//                 <p className="text-xl text-gray-800 mb-6">Perfect Score!</p>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                   Quiz Complete!
//                 </h2>
//               </>
//             )}

//             <div className="text-6xl font-black text-gray-900 mb-6">
//               {percentage}%
//             </div>
//             <p className="text-2xl text-gray-800 mb-8">
//               You got {score} out of {questions.length} correct
//             </p>

//             <div className="space-y-4 mb-8">
//               {questions.map((q, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-between bg-orange-100 rounded-lg p-4"
//                 >
//                   <span className="font-semibold text-gray-900">
//                     Question {index + 1}
//                   </span>
//                   <span
//                     className={`font-bold ${
//                       (
//                         index === 6
//                           ? shapePosition.x === 9 && shapePosition.y === 3
//                           : selectedAnswers[index] === q.correctAnswer
//                       )
//                         ? "text-green-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {(
//                       index === 6
//                         ? shapePosition.x === 9 && shapePosition.y === 3
//                         : selectedAnswers[index] === q.correctAnswer
//                     )
//                       ? "✓ Correct"
//                       : "✗ Incorrect"}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <button
//               onClick={() => {
//                 setShowResults(false);
//                 setCurrentQuestion(0);
//                 setSelectedAnswers(Array(7).fill(null));
//                 setShapePosition({ x: 4, y: 2 });
//               }}
//               className="bg-gradient-to-r from-orange-400 to-amber-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all"
//             >
//               Try Again
//             </button>
//           </div>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
//       <Header />

//       <main className="container mx-auto px-4 pt-32 pb-12">
//         <div className="max-w-5xl mx-auto bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl shadow-2xl p-8 md:p-12 relative">
//           <button
//             onClick={() => window.history.back()}
//             className="absolute top-6 right-6 w-8 h-8 rounded-lg border-2 border-gray-800 flex items-center justify-center hover:bg-orange-300 transition-colors"
//           >
//             <span className="text-xl font-bold">×</span>
//           </button>

//           <h1 className="text-4xl font-black text-gray-900 text-center mb-8">
//             TRANSLATION
//           </h1>

//           {/* Question Navigation */}
//           <div className="flex gap-2 mb-8 justify-center flex-wrap">
//             {questions.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleQuestionNav(index)}
//                 className={`w-12 h-12  rounded-lg font-bold text-gray-900 transition-all ${
//                   currentQuestion === index
//                     ? "bg-gradient-to-br from-orange-400 to-amber-400 shadow-lg scale-110"
//                     : selectedAnswers[index] !== null
//                     ? "bg-orange-300"
//                     : "bg-orange-100 hover:bg-orange-200"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>

//           {/* Question Content */}
//           <div className="mb-8">
//             <div className="flex flex-col md:flex-row gap-8 items-start">
//               {/* Left side - Question and options */}
//               <div className="flex-1">
//                 <h2 className="text-xl text-gray-900 mb-4 font-light">
//                   {questions[currentQuestion].question}
//                   {questions[currentQuestion].vector && (
//                     <span className="block text-3xl font-normal mt-2">
//                       {questions[currentQuestion].vector}
//                     </span>
//                   )}
//                 </h2>

//                 {questions[currentQuestion].instruction && (
//                   <p className="text-sm text-gray-700 mb-4">
//                     {questions[currentQuestion].instruction}
//                   </p>
//                 )}

//                 {!questions[currentQuestion].isDraggable && (
//                   <>
//                     {questions[currentQuestion].hint && (
//                       <p className="text-sm text-gray-700 mb-4">
//                         hint: {questions[currentQuestion].hint}
//                       </p>
//                     )}

//                     <div className="grid grid-cols-2 gap-3 max-w-md">
//                       {(questions[currentQuestion].options ?? []).map(
//                         (option, index) => (
//                           <button
//                             key={index}
//                             onClick={() => handleAnswerSelect(index)}
//                             className={`p-4 rounded-xl text-lg font-medium transition-all ${
//                               selectedAnswers[currentQuestion] === index
//                                 ? "bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg scale-105"
//                                 : "bg-orange-100 hover:bg-orange-200"
//                             }`}
//                           >
//                             {questions[currentQuestion].displayOptions
//                               ? questions[currentQuestion].displayOptions[index]
//                               : option}
//                           </button>
//                         )
//                       )}
//                     </div>
//                   </>
//                 )}

//                 {questions[currentQuestion].isDraggable && (
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-lg shadow-lg"></div>
//                 )}
//               </div>

//               {/* Right side - Grid */}
//               <div className="bg-white rounded-xl p-4 shadow-inner">
//                 <svg viewBox="0 0 240 180" className="w-full max-w-md h-auto">
//                   {/* Grid lines */}
//                   {[...Array(8)].map((_, i) => (
//                     <line
//                       key={`v${i}`}
//                       x1={30 + i * 25}
//                       y1="15"
//                       x2={30 + i * 25}
//                       y2="165"
//                       stroke="#999"
//                       strokeWidth="1"
//                     />
//                   ))}
//                   {[...Array(7)].map((_, i) => (
//                     <line
//                       key={`h${i}`}
//                       x1="30"
//                       y1={15 + i * 25}
//                       x2="205"
//                       y2={15 + i * 25}
//                       stroke="#999"
//                       strokeWidth="1"
//                     />
//                   ))}

//                   {/* Interactive grid cells for question 7 */}
//                   {currentQuestion === 6 && (
//                     <>
//                       {[...Array(7)].map((_, row) =>
//                         [...Array(8)].map((_, col) => (
//                           <rect
//                             key={`cell-${row}-${col}`}
//                             x={30 + col * 25}
//                             y={15 + row * 25}
//                             width="25"
//                             height="25"
//                             fill="transparent"
//                             className="cursor-pointer hover:fill-orange-100"
//                             onClick={() => handleGridClick(col, row)}
//                           />
//                         ))
//                       )}
//                     </>
//                   )}

//                   {/* Points for questions 1-6 */}
//                   {!questions[currentQuestion].isDraggable &&
//                     questions[currentQuestion].grid && (
//                       <>
//                         <circle
//                           cx={
//                             30 + questions[currentQuestion].grid.pointA.x * 25
//                           }
//                           cy={
//                             15 + questions[currentQuestion].grid.pointA.y * 25
//                           }
//                           r="4"
//                           fill="#000"
//                         />
//                         <text
//                           x={
//                             30 +
//                             questions[currentQuestion].grid.pointA.x * 25 -
//                             8
//                           }
//                           y={
//                             15 +
//                             questions[currentQuestion].grid.pointA.y * 25 -
//                             8
//                           }
//                           fontSize="14"
//                           fontWeight="bold"
//                         >
//                           A
//                         </text>
//                         <circle
//                           cx={
//                             30 + questions[currentQuestion].grid.pointB.x * 25
//                           }
//                           cy={
//                             15 + questions[currentQuestion].grid.pointB.y * 25
//                           }
//                           r="4"
//                           fill="#666"
//                         />
//                         <text
//                           x={
//                             30 +
//                             questions[currentQuestion].grid.pointB.x * 25 +
//                             8
//                           }
//                           y={
//                             15 +
//                             questions[currentQuestion].grid.pointB.y * 25 +
//                             8
//                           }
//                           fontSize="14"
//                           fontWeight="bold"
//                         >
//                           B
//                         </text>
//                       </>
//                     )}

//                   {/* Draggable shape for question 7 */}
//                   {currentQuestion === 6 && (
//                     <>
//                       {/* Original position (shape A) */}
//                       <rect
//                         x={30 + 4 * 25}
//                         y={15 + 2 * 25}
//                         width="25"
//                         height="25"
//                         fill="#FF9944"
//                         stroke="#8B4513"
//                         strokeWidth="2"
//                       />
//                       <text
//                         x={30 + 4 * 25 + 8}
//                         y={15 + 2 * 25 + 18}
//                         fontSize="14"
//                         fontWeight="bold"
//                       >
//                         A
//                       </text>

//                       {/* Target/placed position */}
//                       <rect
//                         x={30 + shapePosition.x * 25}
//                         y={15 + shapePosition.y * 25}
//                         width="25"
//                         height="25"
//                         fill={
//                           shapePosition.x === 9 && shapePosition.y === 3
//                             ? "#4CAF50"
//                             : "#FFB627"
//                         }
//                         stroke="#8B4513"
//                         strokeWidth="2"
//                         className="cursor-move"
//                       />
//                     </>
//                   )}
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="flex justify-between items-center">
//             <button
//               onClick={handlePrevious}
//               disabled={currentQuestion === 0}
//               className={`w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center transition-colors ${
//                 currentQuestion === 0
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-orange-300"
//               }`}
//             >
//               <span className="text-xl">‹</span>
//             </button>

//             <button
//               onClick={handleNext}
//               disabled={
//                 selectedAnswers[currentQuestion] === null &&
//                 !(currentQuestion === 6 && selectedAnswers[6] !== null)
//               }
//               className={`px-8 py-3 rounded-full font-semibold transition-all ${
//                 selectedAnswers[currentQuestion] === null &&
//                 !(currentQuestion === 6 && selectedAnswers[6] !== null)
//                   ? "bg-gray-300 text-amber-900 text-gray-500 cursor-not-allowed"
//                   : "bg-gradient-to-r from-orange-400 to-amber-400 text-gray-900 hover:shadow-lg"
//               }`}
//             >
//               {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
//             </button>

//             <button
//               onClick={handleNext}
//               disabled={
//                 selectedAnswers[currentQuestion] === null &&
//                 !(currentQuestion === 6 && selectedAnswers[6] !== null)
//               }
//               className={`w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center transition-colors ${
//                 selectedAnswers[currentQuestion] === null &&
//                 !(currentQuestion === 6 && selectedAnswers[6] !== null)
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-orange-300"
//               }`}
//             >
//               <span className="text-xl">›</span>
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Header from "@/components/header";

export default function TranslationQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(7).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [shapePosition, setShapePosition] = useState({ x: 4, y: 2 });
  const [draggedShape, setDraggedShape] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const questions = [
    {
      id: 1,
      question: "Whats is the translation vector from A to B?",
      hint: "(⁻₁):(⁻₁):",
      grid: { pointA: { x: 7, y: 3 }, pointB: { x: 6, y: 2 } },
      options: ["(⁻₁/₄)", "(⁻₁/₁)", "(⁻₁/₋₁)", "(⁻₁/₂)"],
      displayOptions: ["(⁻¹/₄)", "(⁻¹/₁)", "(⁻¹/₋₁)", "(⁻¹/₂)"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "Whats is the translation vector from B to A?",
      hint: "(¹):( ¹):",
      grid: { pointA: { x: 7, y: 3 }, pointB: { x: 6, y: 2 } },
      options: ["(⁴/₁)", "(⁸/₁)", "(¹/₋₁)", "(¹/₂)"],
      displayOptions: ["(⁴/₁)", "(⁸/₁)", "(¹/₋₁)", "(¹/₂)"],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "Whats is the translation vector from Q to R?",
      hint: "(¹):(¹):",
      grid: { pointA: { x: 4, y: 3 }, pointB: { x: 6, y: 5 } },
      options: ["(⁴/₁)", "(²/₂)", "(³/₋₁)", "(¹/₂)"],
      displayOptions: ["(⁴/₁)", "(²/₂)", "(³/₋₁)", "(¹/₂)"],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "Whats is the translation vector from B to A?",
      hint: "(¹):(¹):",
      grid: { pointA: { x: 3, y: 3 }, pointB: { x: 7, y: 5 } },
      options: ["(⁻₄/₁)", "(⁻₁/₂)", "(⁻₁/₋₂)", "(⁻₁/₄)"],
      displayOptions: ["(⁻⁴/₁)", "(⁻¹/₂)", "(⁻¹/₋₂)", "(⁻¹/₄)"],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "Whats is the translation vector from C to D?",
      hint: "(¹):(¹):",
      grid: { pointA: { x: 3, y: 4 }, pointB: { x: 6, y: 6 } },
      options: ["(⁻₄/₁)", "(⁻₁/₂)", "(⁸/₂)", "(³/₂)"],
      displayOptions: ["(⁻⁴/₁)", "(⁻¹/₂)", "(⁸/₂)", "(³/₂)"],
      correctAnswer: 3,
    },
    {
      id: 6,
      question: "Whats is the translation vector from B to A?",
      hint: "(¹):(¹):",
      grid: { pointA: { x: 7, y: 5 }, pointB: { x: 4, y: 3 } },
      options: ["(⁻₄/₁)", "(⁻₁/₂)", "(⁸/₂)", "(³/₋₂)"],
      displayOptions: ["(⁻⁴/₁)", "(⁻¹/₂)", "(⁸/₂)", "(³/₋₂)"],
      correctAnswer: 3,
    },
    {
      id: 7,
      question: "Translate shape A by the vector",
      vector: "(⁵/₁)",
      instruction: "Drag the orange square to the correct position",
      isDraggable: true,
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
      // Check if question 7 is correct (shape at position x=9, y=3)
      const q7Correct = shapePosition.x === 9 && shapePosition.y === 3;
      const newAnswers = [...selectedAnswers];
      newAnswers[6] = q7Correct ? 0 : null;
      setSelectedAnswers(newAnswers);
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

  const handleDragStart = (e: React.DragEvent, x: number, y: number) => {
    setDraggedShape({ x, y });
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
      setDraggedShape(null);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (index === 6) {
        if (shapePosition.x === 9 && shapePosition.y === 3) correct++;
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
        <main className="container mx-auto px-4 pt-32 pb-12">
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
                      (
                        index === 6
                          ? shapePosition.x === 9 && shapePosition.y === 3
                          : selectedAnswers[index] === q.correctAnswer
                      )
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {(
                      index === 6
                        ? shapePosition.x === 9 && shapePosition.y === 3
                        : selectedAnswers[index] === q.correctAnswer
                    )
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
                setShapePosition({ x: 4, y: 2 });
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
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl shadow-2xl p-8 md:p-12 relative">
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
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Left side - Question and options */}
              <div className="flex-1">
                <h2 className="text-xl text-gray-900 mb-4 font-light">
                  {questions[currentQuestion].question}
                  {questions[currentQuestion].vector && (
                    <span className="block text-3xl font-normal mt-2">
                      {questions[currentQuestion].vector}
                    </span>
                  )}
                </h2>

                {questions[currentQuestion].instruction && (
                  <p className="text-sm text-gray-700 mb-4">
                    {questions[currentQuestion].instruction}
                  </p>
                )}

                {!questions[currentQuestion].isDraggable && (
                  <>
                    {questions[currentQuestion].hint && (
                      <p className="text-sm text-gray-700 mb-4">
                        hint: {questions[currentQuestion].hint}
                      </p>
                    )}

                    <div className="grid grid-cols-2 gap-3 max-w-md">
                      {(questions[currentQuestion].options ?? []).map(
                        (option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            className={`p-4 rounded-xl text-lg font-medium text-amber-900 transition-all ${
                              selectedAnswers[currentQuestion] === index
                                ? "bg-gradient-to-r from-orange-400 to-amber-400 shadow-lg scale-105"
                                : "bg-orange-100 hover:bg-orange-200"
                            }`}
                          >
                            {questions[currentQuestion].displayOptions
                              ? questions[currentQuestion].displayOptions[index]
                              : option}
                          </button>
                        )
                      )}
                    </div>
                  </>
                )}

                {questions[currentQuestion].isDraggable && (
                  <div
                    draggable
                    onDragStart={(e) => handleDragStart(e, 4, 2)}
                    className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-400 rounded-lg shadow-lg cursor-move hover:scale-110 transition-transform"
                  >
                    <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                      A
                    </div>
                  </div>
                )}
              </div>

              {/* Right side - Grid */}
              <div className="bg-white rounded-xl p-4 shadow-inner">
                <svg viewBox="0 0 260 200" className="w-full max-w-md h-auto">
                  {/* Grid lines */}
                  {[...Array(9)].map((_, i) => (
                    <line
                      key={`v${i}`}
                      x1={40 + i * 25}
                      y1="15"
                      x2={40 + i * 25}
                      y2="165"
                      stroke="#999"
                      strokeWidth="1"
                    />
                  ))}
                  {[...Array(7)].map((_, i) => (
                    <line
                      key={`h${i}`}
                      x1="40"
                      y1={15 + i * 25}
                      x2="240"
                      y2={15 + i * 25}
                      stroke="#999"
                      strokeWidth="1"
                    />
                  ))}

                  {/* X-axis numbers */}
                  {[...Array(9)].map((_, i) => (
                    <text
                      key={`x${i}`}
                      x={40 + i * 25}
                      y="180"
                      fontSize="10"
                      textAnchor="middle"
                      fill="#666"
                    >
                      {i}
                    </text>
                  ))}

                  {/* Y-axis numbers */}
                  {[...Array(7)].map((_, i) => (
                    <text
                      key={`y${i}`}
                      x="25"
                      y={20 + i * 25}
                      fontSize="10"
                      textAnchor="middle"
                      fill="#666"
                    >
                      {6 - i}
                    </text>
                  ))}

                  {/* Interactive grid cells for question 7 */}
                  {currentQuestion === 6 && (
                    <>
                      {[...Array(7)].map((_, row) =>
                        [...Array(9)].map((_, col) => (
                          <rect
                            key={`cell-${row}-${col}`}
                            x={40 + col * 25}
                            y={15 + row * 25}
                            width="25"
                            height="25"
                            fill="transparent"
                            className="cursor-pointer hover:fill-orange-100"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, col, 6 - row)}
                          />
                        ))
                      )}
                    </>
                  )}

                  {/* Points for questions 1-6 */}
                  {!questions[currentQuestion].isDraggable &&
                    questions[currentQuestion].grid && (
                      <>
                        <circle
                          cx={
                            40 + questions[currentQuestion].grid.pointA.x * 25
                          }
                          cy={
                            15 +
                            (6 - questions[currentQuestion].grid.pointA.y) * 25
                          }
                          r="4"
                          fill="#000"
                        />
                        <text
                          x={
                            40 +
                            questions[currentQuestion].grid.pointA.x * 25 -
                            8
                          }
                          y={
                            15 +
                            (6 - questions[currentQuestion].grid.pointA.y) *
                              25 -
                            8
                          }
                          fontSize="14"
                          fontWeight="bold"
                        >
                          A
                        </text>
                        <circle
                          cx={
                            40 + questions[currentQuestion].grid.pointB.x * 25
                          }
                          cy={
                            15 +
                            (6 - questions[currentQuestion].grid.pointB.y) * 25
                          }
                          r="4"
                          fill="#666"
                        />
                        <text
                          x={
                            40 +
                            questions[currentQuestion].grid.pointB.x * 25 +
                            8
                          }
                          y={
                            15 +
                            (6 - questions[currentQuestion].grid.pointB.y) *
                              25 +
                            8
                          }
                          fontSize="14"
                          fontWeight="bold"
                        >
                          B
                        </text>
                      </>
                    )}

                  {/* Draggable shape for question 7 */}
                  {currentQuestion === 6 && (
                    <>
                      {/* Original position (shape A) - only show if not dragged away */}
                      {(shapePosition.x !== 4 || shapePosition.y !== 2) && (
                        <>
                          <rect
                            x={40 + 4 * 25}
                            y={15 + (6 - 2) * 25}
                            width="25"
                            height="25"
                            fill="#FFE5CC"
                            stroke="#8B4513"
                            strokeWidth="1"
                            strokeDasharray="3,3"
                          />
                        </>
                      )}

                      {/* Placed position */}
                      <rect
                        x={40 + shapePosition.x * 25}
                        y={15 + (6 - shapePosition.y) * 25}
                        width="25"
                        height="25"
                        fill={
                          shapePosition.x === 9 && shapePosition.y === 3
                            ? "#4CAF50"
                            : "#FF9944"
                        }
                        stroke="#8B4513"
                        strokeWidth="2"
                      />
                      <text
                        x={40 + shapePosition.x * 25 + 12.5}
                        y={15 + (6 - shapePosition.y) * 25 + 17}
                        fontSize="14"
                        fontWeight="bold"
                        textAnchor="middle"
                        fill="#fff"
                      >
                        A
                      </text>
                    </>
                  )}
                </svg>
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
