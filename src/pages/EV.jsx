"use client";
import React, { useState } from 'react';
import { Battery, Car, Zap, Settings, User, Mail, Phone, BookOpen, Award } from 'lucide-react';

const EVTechnologyRegistration = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    department: '',
    year: '',
    
    // Course Selection
    specialization: 'design',
    batteryFocus: true,
    chargingTech: true,
    
    // Background
    mechanicalBackground: false,
    electricalBackground: false,
    programmingSkills: '',
    
    // Project Interest
    projectType: 'individual',
    teamSize: '1',
    preferredVehicle: 'passenger'
  });

  const specializations = [
    { value: 'design', label: 'EV Design & Manufacturing', credits: '4' },
    { value: 'battery', label: 'Battery Technology', credits: '3' },
    { value: 'charging', label: 'Charging Infrastructure', credits: '3' },
    { value: 'software', label: 'EV Software Systems', credits: '4' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('EV Technology Registration:', formData);
    alert('EV Technology course registration submitted successfully!');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-green-500 rounded-full">
              <Car className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">EV Technology Course Registration</h1>
          </div>
          <p className="text-lg text-gray-600">Learn electric vehicle design, battery systems, and sustainable transportation</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Course Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Highlights</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Battery className="w-5 h-5 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Battery Technology</h3>
                    <p className="text-sm text-gray-600">Lithium-ion systems, Battery management, Thermal control</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Powertrain Systems</h3>
                    <p className="text-sm text-gray-600">Electric motors, Power electronics, Drivetrain design</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Settings className="w-5 h-5 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Smart Charging</h3>
                    <p className="text-sm text-gray-600">Fast charging, Wireless charging, Grid integration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Specialization Tracks</h3>
              <div className="space-y-3">
                {specializations.map(spec => (
                  <div key={spec.value} className="p-3 border rounded-lg hover:border-green-500 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{spec.label}</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{spec.credits} Credits</span>
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
                  Student Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select Department</option>
                      <option value="mechanical">Mechanical Engineering</option>
                      <option value="electrical">Electrical Engineering</option>
                      <option value="computer">Computer Science</option>
                      <option value="automotive">Automotive Engineering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select Year</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Fourth Year</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Course Specialization */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Course Specialization
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Choose Specialization</label>
                    <select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {specializations.map(spec => (
                        <option key={spec.value} value={spec.value}>{spec.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="batteryFocus"
                        checked={formData.batteryFocus}
                        onChange={handleChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-medium">Battery Technology</span>
                    </label>
                    
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="chargingTech"
                        checked={formData.chargingTech}
                        onChange={handleChange}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-medium">Charging Systems</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Technical Background */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Background</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="mechanicalBackground"
                      checked={formData.mechanicalBackground}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">Mechanical Engineering background</span>
                  </label>
                  
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="electricalBackground"
                      checked={formData.electricalBackground}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">Electrical Engineering background</span>
                  </label>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Programming Skills</label>
                    <select
                      name="programmingSkills"
                      value={formData.programmingSkills}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Award className="w-5 h-5" />
                Register for EV Technology Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVTechnologyRegistration;