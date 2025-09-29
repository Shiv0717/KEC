"use client";
import React, { useState } from 'react';
import { Drone, Camera, MapPin, Calendar, Clock, User, Mail, Phone, BookOpen, Award,CheckCircle } from 'lucide-react';

const DroneTechnologyRegistration = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    department: '',
    semester: '',
    
    // Course Selection
    courseLevel: 'beginner',
    preferredTiming: 'morning',
    labSession: true,
    
    // Experience
    previousExperience: false,
    droneOwnership: false,
    certification: '',
    
    // Additional
    specialRequirements: '',
    projectInterest: ''
  });

  const courseLevels = [
    { value: 'beginner', label: 'Beginner - Drone Fundamentals', duration: '8 weeks' },
    { value: 'intermediate', label: 'Intermediate - Aerial Photography', duration: '12 weeks' },
    { value: 'advanced', label: 'Advanced - Drone Programming', duration: '16 weeks' },
    { value: 'professional', label: 'Professional - Commercial Operations', duration: '20 weeks' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Drone Course Registration:', formData);
    alert('Drone Technology course registration submitted successfully!');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-500 rounded-full">
              <Drone className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Drone Technology Course Registration</h1>
          </div>
          <p className="text-lg text-gray-600">Master aerial technology, photography, and autonomous flight systems</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Course Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Curriculum</h3>
                    <p className="text-sm text-gray-600">Aerial photography, Flight mechanics, GPS navigation, Safety protocols</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Award className="w-5 h-5 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Certification</h3>
                    <p className="text-sm text-gray-600">FAA Part 107 Preparation, Commercial Drone Operator License</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Lab Facilities</h3>
                    <p className="text-sm text-gray-600">Drone simulation lab, Flight testing area, Repair workshop</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Available Course Levels</h3>
              <div className="space-y-3">
                {courseLevels.map(level => (
                  <div key={level.value} className="p-3 border rounded-lg hover:border-blue-500 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{level.label}</span>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{level.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Registration Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                    <input
                      type="text"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Course Selection
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Course Level</label>
                    <select
                      name="courseLevel"
                      value={formData.courseLevel}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {courseLevels.map(level => (
                        <option key={level.value} value={level.value}>{level.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Timing</label>
                      <select
                        name="preferredTiming"
                        value={formData.preferredTiming}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                        <option value="evening">Evening (6 PM - 9 PM)</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="labSession"
                          checked={formData.labSession}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span className="text-sm font-medium">Include Lab Sessions</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Previous Experience</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="previousExperience"
                      checked={formData.previousExperience}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">I have previous drone flying experience</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="droneOwnership"
                      checked={formData.droneOwnership}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">I own a drone</span>
                  </label>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Certifications (if any)</label>
                    <input
                      type="text"
                      name="certification"
                      value={formData.certification}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="E.g., FAA Part 107, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Register for Drone Technology Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneTechnologyRegistration;