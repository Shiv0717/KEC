"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Super40ExamQuestions = () => {
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    { id: 1, text: "What is 5 + 7?", options: ["10", "11", "12", "13"], correct: "12" },
    { id: 2, text: "Which programming language is used for web development?", options: ["Python", "HTML", "C++", "Java"], correct: "HTML" },
    { id: 3, text: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], correct: "Delhi" },
    { id: 4, text: "Which gas is essential for respiration?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], correct: "Oxygen" },
    { id: 5, text: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Dickens", "Tolstoy", "Hemingway"], correct: "Shakespeare" },
    { id: 6, text: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: "Mars" },
    { id: 7, text: "Which number is prime?", options: ["4", "6", "7", "9"], correct: "7" },
    { id: 8, text: "What is H2O commonly known as?", options: ["Salt", "Water", "Oxygen", "Hydrogen"], correct: "Water" },
    { id: 9, text: "Which device is used to measure temperature?", options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], correct: "Thermometer" },
    { id: 10, text: "Which organ pumps blood in human body?", options: ["Lungs", "Liver", "Heart", "Kidney"], correct: "Heart" },
  ];



  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
    
    // Add visual feedback
    const optionElement = document.querySelector(`input[name="question-${questionId}"]:checked`);
    if (optionElement) {
      gsap.to(optionElement.parentElement, {
        scale: 1.02,
        duration: 0.2,
        yoyo: true,
        repeat: 1
      });
    }
  };

  const handleAutoSubmit = () => {
    setIsSubmitting(true);
    gsap.to(".submit-btn", {
      backgroundColor: "#ef4444",
      duration: 0.5
    });
    
    setTimeout(() => {
      console.log("Time's up! Selected Answers:", answers);
      alert("Time's up! Your exam has been submitted automatically.");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Submit animation
    gsap.to(".submit-btn", {
      scale: 0.95,
      backgroundColor: "#10b981",
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        console.log("Exam submitted! Selected Answers:", answers);
        
        // Calculate score
        const score = questions.reduce((acc, q) => 
          acc + (answers[q.id] === q.correct ? 1 : 0), 0
        );
        
        alert(`Exam submitted successfully!\nYour score: ${score}/${questions.length}`);
        setIsSubmitting(false);
      }
    });
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const progress = ((30 * 60 - timeLeft) / (30 * 60)) * 100;

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Super 40 Entrance Exam</h1>
          <p className="text-blue-700 text-lg">Sample Questions - Test Your Knowledge</p>
        </div>

        {/* Timer and Progress */}
        <div className="bg-white rounded-2xl  p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-blue-600 font-medium">Time Remaining</p>
                <div ref={timerRef} className="text-2xl font-bold text-blue-900">
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <div className="flex justify-between text-sm text-blue-700 mb-1">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-blue-600 font-medium">Questions Answered</p>
              <p className="text-2xl font-bold text-blue-900">
                {Object.keys(answers).length}/{questions.length}
              </p>
            </div>
          </div>
        </div>

        {/* Questions Grid */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {questions.map((q) => (
              <div 
                key={q.id}
                className="question-card bg-white rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">
                    Q{q.id}
                  </span>
                  <p className="font-semibold text-blue-900 text-lg flex-1">{q.text}</p>
                </div>
                
                <div className="space-y-3">
                  {q.options.map((opt, idx) => (
                    <label 
                      key={idx}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                        answers[q.id] === opt 
                          ? 'bg-blue-50 border-2 border-blue-300' 
                          : 'bg-gray-50 border-2 border-transparent hover:bg-blue-25'
                      }`}
                    >
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 ${
                        answers[q.id] === opt ? 'border-blue-500 bg-blue-500' : 'border-gray-400'
                      }`}>
                        {answers[q.id] === opt && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-blue-800 font-medium">{opt}</span>
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={opt}
                        checked={answers[q.id] === opt}
                        onChange={() => handleChange(q.id, opt)}
                        className="hidden"
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Exam"
              )}
            </button>
            
            <p className="text-blue-600 mt-4 text-sm">
              {Object.keys(answers).length === questions.length 
                ? "All questions answered! Ready to submit." 
                : `${questions.length - Object.keys(answers).length} questions remaining`}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Super40ExamQuestions;