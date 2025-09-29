"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Super40RegisterForm = ({ onSubmit }) => {
  const formRef = useRef(null);
  const imageRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    grade: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(formRef.current, {
        opacity: 0,
        x: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10% left-5% w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20% right-10% w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"></div>
        <div className="absolute top-40% left-20% w-16 h-16 bg-blue-400/10 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          {/* Left Side - Content */}
          <div 
            ref={imageRef}
            className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            
            <div className="text-center text-white relative z-10">
              {/* Animated Icon */}
              <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/20">
                <div className="relative">
                  <svg className="w-16 h-16 animate-float" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <div className="absolute -inset-2 bg-white/10 rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                Super 40 Entrance Exam 2026
              </h1>

              {/* Subheading */}
              <p className="text-xl font-semibold text-cyan-100 mb-6">
              Secure Your Admission in Top College Programs
              </p>

              {/* Description */}
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              The 2026 Super 40 Entrance Exam is the gateway for meritorious students seeking admission into the college’s most prestigious programs. Perform well to be selected among the top candidates and gain early access to academic opportunities.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="flex items-center justify-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">Merit-Based Selection</span>
                </div>
                
                <div className="flex items-center justify-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">Top Candidates Only</span>
                </div>
                
                <div className="flex items-center justify-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold">Admission-Oriented Exam</span>
                </div>
              </div>

            
             
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-12 relative">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-3">
                  Register for Super 40 2026
                </h2>
                <p className="text-blue-600 text-lg">Secure your chance to be among the top 40 students</p>
              </div>

              {/* Name Field */}
              <div className="group">
                <label className="block text-blue-900 font-semibold mb-3 text-lg">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-blue-50/80 border-2 border-blue-200 text-blue-900 placeholder-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-blue-900 font-semibold mb-3 text-lg">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-blue-50/80 border-2 border-blue-200 text-blue-900 placeholder-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="group">
                <label className="block text-blue-900 font-semibold mb-3 text-lg">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-blue-50/80 border-2 border-blue-200 text-blue-900 placeholder-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                  required
                />
              </div>

              {/* School Field */}
              <div className="group">
                <label className="block text-blue-900 font-semibold mb-3 text-lg">School Name</label>
                <input
                  type="text"
                  name="school"
                  placeholder="Enter your school name"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-blue-50/80 border-2 border-blue-200 text-blue-900 placeholder-blue-400 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                  required
                />
              </div>

              {/* Grade Field */}
              

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Register for Super 40 2026
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <p className="text-center text-blue-600 text-sm mt-6">
                By registering, you agree to our terms and conditions. Limited seats available.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Super40RegisterForm;