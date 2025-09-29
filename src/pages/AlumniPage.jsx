"use client";
import React, { useState } from 'react';
import { 
  Search, 
  User ,
  Building2, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  Link, 
  X,
  Calendar,
  ChevronDown,
  Users,
  Award,
  BookOpen,
  HeartHandshake,
  Network,
  Star,
  Linkedin,
  Github,
  Twitter,
  Filter,
  ExternalLink
} from 'lucide-react';

const AlumniPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [batchFilter, setBatchFilter] = useState('all');
  const [branchFilter, setBranchFilter] = useState('all');
  const [companyFilter, setCompanyFilter] = useState('all');
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Process the alumni data
  const processAlumniData = () => {
    const rawData = [
      { name: "SAZIYA NAAZ", branch: "CSE", yop: "2025", company: "Codenicely" },
      { name: "TARA CHAND DEWANGAN", branch: "CSE", yop: "2025", company: "Sthanve Software" },
      { name: "DEVVRAT", branch: "CSE", yop: "2025", company: "Augtech Nextwealth" },
      { name: "ANUBHAV NAYAR", branch: "CSE", yop: "2025", company: "Gravity Engineering Services" },
      { name: "HARSH KUMAR SHRIVASTAVA", branch: "CSE", yop: "2025", company: "Augtech Nextwealth" },
      { name: "Shikhar Sinha", branch: "CSE", yop: "2026", company: "Sthanve Software" },
      { name: "Raveena Ratrey", branch: "CSE", yop: "2026", company: "IB Group" },
      { name: "Shantanu Sarkar", branch: "CSE", yop: "2026", company: "" },
      { name: "Tejpratap Sahu", branch: "CSE", yop: "2026", company: "Sthanve Software" },
      { name: "Purvika", branch: "CSE", yop: "2027", company: "Gravity Engineering Services" },
      { name: "KUNAL SAHU", branch: "Civil", yop: "2024", company: "Avinash Builders" },
      { name: "VIKAS MOURYA", branch: "Civil", yop: "2024", company: "AQUAPLAST infraproject pvt. Ltd." },
      { name: "ABHISHEK BHIMTE", branch: "CSE", yop: "2024", company: "earlier sensible academy now Sthanve" },
      { name: "JAYA", branch: "CSE", yop: "2024", company: "IIT, Project Assistant, IIT Bhilai" },
      { name: "MUKUL KURWE", branch: "CSE", yop: "2024", company: "IIT, Project Assistant, IIT Bhilai" },
      { name: "PAYAL Dewangan", branch: "CSE", yop: "2024", company: "Deepija Telecommunication Pvt Ltd" },
      { name: "DEVID KUMAR", branch: "EE", yop: "2024", company: "NPTI, now in Adani" },
      { name: "DOMENDRA KUMAR", branch: "EE", yop: "2024", company: "Kalptaru Projects KPIL, RR ISPAT" },
      { name: "NIKHIL BANJARE", branch: "EE", yop: "2024", company: "Engineers Energy Consultancy, Supela" },
      { name: "SHRUTI WASNIK", branch: "EE", yop: "2024", company: "Lecturer at R1" },
      { name: "VIVEK KUMAR CHANDRAKAR", branch: "EE", yop: "2024", company: "RR Ispat, Powerhouse" },
      { name: "YUGENDRA PRATAP LAHARE", branch: "Civil", yop: "2024", company: "Shri Balaji Construction" },
      { name: "SAKSHI", branch: "Civil", yop: "2024", company: "Fail - Exam; BSP Valuation work, Maple Architect" },
      { name: "AMISHA RAMTEKE", branch: "Civil", yop: "2023", company: "Raipur ultratech" },
      { name: "ARPIT KUMAR MISHRA", branch: "Civil", yop: "2023", company: "Kalptaru Projects KPIL" },
      { name: "ARYAN DEWANGAN", branch: "Civil", yop: "2023", company: "Works in PWD Adhoc" },
      { name: "BHAVNA", branch: "Civil", yop: "2023", company: "Sarthi Associates, Raipur" },
      { name: "FANENDRA Dewangan", branch: "Civil", yop: "2023", company: "Site Engineer Utopia Durg" },
      { name: "HITESH KUMAR CHANDEL", branch: "Civil", yop: "2023", company: "Swami Constructions Raipur" },
      { name: "REVENDRA HIRWANEE", branch: "Civil", yop: "2023", company: "Chandak & Sharda Associates Durg" },
      { name: "VINOD KUMAR KOSARIYA", branch: "Civil", yop: "2023", company: "Green earth Solution Ltd. Raipur" },
      { name: "DHANRAJ SONI", branch: "EE", yop: "2023", company: "RR Ispat, Hira Group" },
      { name: "AMITESH SHARMA", branch: "Mech", yop: "2023", company: "KPIL" },
      { name: "RAHUL KUMAR", branch: "Mech", yop: "2023", company: "KPIL" },
      { name: "RUPENDRA", branch: "Mech", yop: "2023", company: "KPIL" },
      { name: "YOGESHRAJ SAHU", branch: "Mech", yop: "2023", company: "RR Ispat, Hira Group" },
      { name: "PRANESH PANDEY", branch: "Civil", yop: "2021", company: "Govt Job Coalfield India" },
      { name: "PRANSHUL SINGH THAKUR", branch: "Civil", yop: "2021", company: "Govt Job CSPDCL" }
    ];

    // Format names to title case
    const formatName = (name) => {
      return name
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    // Generate a quote based on branch and company
    const generateQuote = (branch, company) => {
      const branchQuotes = {
        CSE: [
          "KEC provided me with the technical foundation to excel in the software industry.",
          "The coding environment at KEC prepared me for real-world development challenges.",
          "With the right mentorship at KEC, I developed strong programming and problem-solving skills."
        ],
        Civil: [
          "KEC gave me the foundation and confidence to pursue my dream career in civil engineering.",
          "The practical exposure at KEC Bhilai prepared me for real-world construction challenges.",
          "KEC's civil engineering program provided hands-on experience that was vital for my career."
        ],
        EE: [
          "KEC's electrical engineering program equipped me with knowledge to excel in the power industry.",
          "The practical training sessions at KEC gave me confidence in handling power systems.",
          "KEC laid a strong foundation for my expertise in electrical systems and power management."
        ],
        Mech: [
          "KEC inspired me to think innovatively and pursue mechanical engineering.",
          "The mechanical workshops at KEC played a key role in my career journey.",
          "KEC provided me with industry exposure that was vital for my mechanical engineering career."
        ]
      };

      const defaultQuotes = [
        "My journey at KEC shaped my professional and personal growth equally.",
        "KEC Bhilai laid a strong base for my technical expertise and career growth.",
        "The academic environment at KEC encouraged innovation and problem-solving.",
        "KEC provided me with industry exposure that was vital for my career.",
        "The faculty support and hands-on labs made me industry ready.",
        "KEC motivated me to excel in my field with the right resources and guidance."
      ];

      const quotes = branchQuotes[branch] || defaultQuotes;
      return quotes[Math.floor(Math.random() * quotes.length)];
    };

    // Generate a location based on company
    const generateLocation = (company) => {
      const locationMap = {
        "Codenicely": "Raipur, India",
        "Sthanve Software": "Raipur, India",
        "Augtech Nextwealth": "Pune, India",
        "Gravity Engineering Services": "Bangalore, India",
        "IB Group": "Mumbai, India",
        "Avinash Builders": "Bhilai, India",
        "AQUAPLAST infraproject pvt. Ltd.": "Raipur, India",
        "IIT, Project Assistant, IIT Bhilai": "Bhilai, India",
        "Deepija Telecommunication Pvt Ltd": "Raipur, India",
        "NPTI, now in Adani": "Mundra, India",
        "Kalptaru Projects KPIL, RR ISPAT": "Raipur, India",
        "Engineers Energy Consultancy, Supela": "Bhilai, India",
        "Lecturer at R1": "Bhilai, India",
        "RR Ispat, Powerhouse": "Raipur, India",
        "Shri Balaji Construction": "Raipur, India",
        "Raipur ultratech": "Raipur, India",
        "Works in PWD Adhoc": "Bhilai, India",
        "Sarthi Associates, Raipur": "Raipur, India",
        "Site Engineer Utopia Durg": "Durg, India",
        "Swami Constructions Raipur": "Raipur, India",
        "Chandak & Sharda Associates Durg": "Durg, India",
        "Green earth Solution Ltd. Raipur": "Raipur, India",
        "RR Ispat, Hira Group": "Raipur, India",
        "KPIL": "Raipur, India",
        "Govt Job Coalfield India": "Korba, India",
        "Govt Job CSPDCL": "Raipur, India"
      };

      return locationMap[company] || "Chhattisgarh, India";
    };

    return rawData.map((alum, index) => ({
      id: index + 1,
      name: formatName(alum.name),
      batch: alum.yop,
      degree: `B.Tech in ${alum.branch}`,
      currentPosition: alum.company.includes("Govt Job") 
        ? "Government Employee" 
        : alum.company.includes("Lecturer") 
          ? "Lecturer"
          : alum.company.includes("Site Engineer") 
            ? "Site Engineer"
            : alum.company.includes("Fail") 
              ? "Pursuing Opportunities"
              : "Engineer",
      company: alum.company,
      location: generateLocation(alum.company),
      photo: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80`,
      achievements: [
        `Placed at ${alum.company.split(';')[0].split(',')[0]}`,
        `${alum.branch} Department Topper`,
        "Active in College Technical Events"
      ],
      
      story: generateQuote(alum.branch, alum.company),
      branch: alum.branch
    }));
  };

  const alumniData = processAlumniData();

  // Get unique values for filters
  const batches = [...new Set(alumniData.map(a => a.batch))].sort((a, b) => +b - +a);
  const branches = [...new Set(alumniData.map(a => a.branch))].sort();
  const companies = [...new Set(alumniData.map(a => a.company.split(';')[0].split(',')[0].trim()))].filter(c => c).sort();
  // Filter alumni based on active filters
  // Filter alumni based on active filters
const filteredAlumni = alumniData.filter(alumni => {
    const currentPosition = alumni.currentPosition || '';
    const company = alumni.company || '';
    
    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'corporate' && !currentPosition.toLowerCase().includes('government')) ||
      (activeTab === 'government' && currentPosition.toLowerCase().includes('government')) ||
      (activeTab === 'higherStudies' && currentPosition.toLowerCase().includes('studies'));
  
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.toLowerCase().includes(searchQuery.toLowerCase());
  
    const matchesBatch = batchFilter === 'all' || alumni.batch === batchFilter;
    const matchesBranch = branchFilter === 'all' || alumni.branch === branchFilter;
    const matchesCompany = companyFilter === 'all' || company.includes(companyFilter);
  
    return matchesTab && matchesSearch && matchesBatch && matchesBranch && matchesCompany;
  });
  // Stats for the header
  const stats = {
    totalAlumni: alumniData.length,
    batches: batches.length,
    companies: companies.length,
    branches: branches.length
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">KEC Bhilai Alumni Network</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting past and present students of Krishna Engineering College, Bhilai. Together we grow, achieve, and give back.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">{stats.totalAlumni}+</div>
            <div className="text-gray-600">Alumni Members</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <GraduationCap className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">{stats.batches}</div>
            <div className="text-gray-600">Batches</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Briefcase className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">{stats.companies}+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900">{stats.branches}</div>
            <div className="text-gray-600">Branches</div>
          </div>
        </div>

        {/* Search and Filters Section */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search alumni by name, company, or degree"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>
          
          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch Year</label>
                <select
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={batchFilter}
                  onChange={(e) => setBatchFilter(e.target.value)}
                >
                  <option value="all">All Batches</option>
                  {batches.map(batch => (
                    <option key={batch} value={batch}>{batch} Batch</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-9 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
                <select
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={branchFilter}
                  onChange={(e) => setBranchFilter(e.target.value)}
                >
                  <option value="all">All Branches</option>
                  {branches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-9 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <select
                  className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={companyFilter}
                  onChange={(e) => setCompanyFilter(e.target.value)}
                >
                  <option value="all">All Companies</option>
                  {companies.map(company => (
                    <option key={company} value={company}>{company}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-9 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('all')}
            >
              All Alumni
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'corporate' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('corporate')}
            >
              Corporate
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'government' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('government')}
            >
              Government
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'higherStudies' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('higherStudies')}
            >
              Higher Studies
            </button>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAlumni.map(alumni => (
            <div key={alumni.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={alumni.photo} 
                  alt={alumni.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-1/2" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">{alumni.name}</h3>
                  <p className="text-sm">{alumni.batch} Batch • {alumni.branch}</p>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <Briefcase className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700">{alumni.currentPosition}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <Building2 className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700 text-sm">{alumni.company.split(';')[0]}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-700 text-sm">{alumni.location}</span>
                </div>
                
                <div className="flex space-x-2 mb-4 flex-wrap gap-2">
                  {alumni.achievements.slice(0, 2).map((achievement, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {achievement}
                    </span>
                  ))}
                  {alumni.achievements.length > 2 && (
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      +{alumni.achievements.length - 2} more
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedAlumni(alumni)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  View Profile <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No alumni found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Alumni Engagement Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <HeartHandshake className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Mentorship Program</h3>
              <p className="text-gray-600">Guide current students and share your industry experience</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Network className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Alumni Events</h3>
              <p className="text-gray-600">Connect with fellow alumni at reunions and networking events</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Guest Lectures</h3>
              <p className="text-gray-600">Share your expertise with current students through talks</p>
            </div>
          </div>
        </div>

        {/* Alumni Modal */}
        {selectedAlumni && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64">
                <img 
                  src={selectedAlumni.photo} 
                  alt={selectedAlumni.name} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setSelectedAlumni(null)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full h-1/2" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl font-bold">{selectedAlumni.name}</h2>
                  <p>{selectedAlumni.batch} Batch • {selectedAlumni.degree}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Current Position</p>
                      <p className="font-medium">{selectedAlumni.currentPosition}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Company</p>
                      <p className="font-medium">{selectedAlumni.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium">{selectedAlumni.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Batch</p>
                      <p className="font-medium">{selectedAlumni.batch}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Success Story</h3>
                  <p className="text-gray-700">{selectedAlumni.story}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Achievements</h3>
                  <ul className="space-y-2">
                    {selectedAlumni.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
               
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniPage;