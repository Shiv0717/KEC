"use client";
import React, { useState } from 'react';
import { Code, Cpu, Database, Cloud, User, Mail, Phone, BookOpen, Award, GitBranch } from 'lucide-react';

const AdvancedCodingRegistration = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    studentId: '',
    email: '',
    phone: '',
    major: '',
    gpa: '',
    
    // Technical Skills
    programmingLanguages: [],
    experienceLevel: 'intermediate',
    githubProfile: '',
    
    // Course Preferences
    focusArea: 'ai',
    projectComplexity: 'medium',
    teamPreference: 'mixed',
    
    // Availability
    hoursPerWeek: '10-15',
    preferredSchedule: 'flexible'
  });

  const focusAreas = [
    { value: 'ai', label: 'AI & Machine Learning', difficulty: 'Advanced' },
    { value: 'web', label: 'Full-Stack Web Development', difficulty: 'Intermediate' },
    { value: 'mobile', label: 'Mobile App Development', difficulty: 'Intermediate' },
    { value: 'cloud', label: 'Cloud & DevOps', difficulty: 'Advanced' },
    { value: 'blockchain', label: 'Blockchain Development', difficulty: 'Expert' }
  ];

  const programmingLanguages = [
    'Python', 'JavaScript', 'Java', 'C++', 'Ruby', 'Go', 'Rust', 'TypeScript', 'Swift', 'Kotlin'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Advanced Coding Registration:', formData);
    alert('Advanced Coding course registration submitted successfully!');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      // Handle programming languages array
      if (name === 'programmingLanguages') {
        setFormData(prev => ({
          ...prev,
          programmingLanguages: checked 
            ? [...prev.programmingLanguages, value]
            : prev.programmingLanguages.filter(lang => lang !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-purple-500 rounded-full">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Advanced Coding Course Registration</h1>
          </div>
          <p className="text-lg text-gray-600">Master cutting-edge programming, AI development, and software architecture</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Course Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Specialization Tracks</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Cpu className="w-5 h-5 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">AI & Machine Learning</h3>
                    <p className="text-sm text-gray-600">Neural networks, Deep learning, NLP, Computer vision</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Cloud className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="font-semibold">Cloud Computing</h3>
                    <p className="text-sm text-gray-600">AWS, Azure, Kubernetes, Microservices architecture</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Database className="w-5 h-5 text-green-600" />
                  <div>
                    <h3 className="font-semibold">Big Data</h3>
                    <p className="text-sm text-gray-600">Data engineering, Analytics, Distributed systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Focus Areas</h3>
              <div className="space-y-3">
                {focusAreas.map(area => (
                  <div key={area.value} className="p-3 border rounded-lg hover:border-purple-500 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{area.label}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        area.difficulty === 'Expert' ? 'bg-red-100 text-red-800' :
                        area.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {area.difficulty}
                      </span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Projects</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Mentorship</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Certification</span>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Major/Department</label>
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current GPA</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      max="4"
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Technical Background
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Programming Languages</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {programmingLanguages.map(language => (
                        <label key={language} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            name="programmingLanguages"
                            value={language}
                            checked={formData.programmingLanguages.includes(language)}
                            onChange={handleChange}
                            className="w-4 h-4"
                          />
                          <span className="text-sm">{language}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Profile</label>
                      <input
                        type="url"
                        name="githubProfile"
                        value={formData.githubProfile}
                        onChange={handleChange}
                        placeholder="github.com/username"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Preferences */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Preferences</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Focus Area</label>
                    <select
                      name="focusArea"
                      value={formData.focusArea}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {focusAreas.map(area => (
                        <option key={area.value} value={area.value}>{area.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Complexity</label>
                      <select
                        name="projectComplexity"
                        value={formData.projectComplexity}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="simple">Simple Projects</option>
                        <option value="medium">Medium Complexity</option>
                        <option value="complex">Complex Systems</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Team Preference</label>
                      <select
                        name="teamPreference"
                        value={formData.teamPreference}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="solo">Individual Work</option>
                        <option value="mixed">Mixed Teams</option>
                        <option value="team">Team Projects</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <GitBranch className="w-5 h-5" />
                Register for Advanced Coding Course
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCodingRegistration;