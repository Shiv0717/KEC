import React, { useState } from 'react';
import { 
  CheckCircle, 
  XCircle, 
  Beaker, 
  Wrench, 
  Building, 
  Wifi, 
  BookOpen, 
  Shield, 
  ParkingCircle,
  GraduationCap,
  Filter,
  Search,
  ChevronDown,
  MapPin,
  Users,
  Library,
  Microscope,
  Cpu,
  Zap,
  Settings,
  Grid,
  Eye,
  BarChart3,
  Calendar,
  Clock,
  BookText,
  Server,
  Network,
  Database,
  Cloud,
  Bookmark,
  Award,
  Target
} from 'lucide-react';

const EnhancedFacilities = () => {
  const [activeTab, setActiveTab] = useState('amenities');
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [expandedLab, setExpandedLab] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Essential Amenities Data
  const essentialAmenities = [
    { id: 1, name: "Stand alone language laboratory", available: true, icon: BookText },
    { id: 2, name: "Potable water supply", available: true, icon: Server },
    { id: 3, name: "Electric supply", available: true, icon: Zap },
    { id: 4, name: "Sewage disposal", available: true, icon: Settings },
    { id: 5, name: "Telephone and fax", available: true, icon: Network },
    { id: 6, name: "Vehicle Parking", available: true, icon: ParkingCircle },
    { id: 7, name: "Institution website", available: true, icon: Cloud },
    { id: 8, name: "Barrier free built environment", available: true, icon: Users },
    { id: 9, name: "Safety provisions", available: true, icon: Shield },
    { id: 10, name: "Digital Library", available: true, icon: Library },
    { id: 11, name: "Classification of books", available: true, icon: BookOpen },
    { id: 12, name: "NPTEL facility", available: true, icon: Database },
    { id: 13, name: "General insurance", available: true, icon: Shield },
    { id: 14, name: "Motorised Road", available: true, icon: MapPin },
    { id: 15, name: "Notice boards", available: true, icon: Bookmark },
    { id: 16, name: "Medical Facilities", available: true, icon: Award },
    { id: 17, name: "Grievance Redressal Committee", available: true, icon: Users },
    { id: 18, name: "Anti-sexual harassment Committee", available: true, icon: Shield },
  ];

  // Desirable Amenities Data
  const desirableAmenities = [
    { id: 1, name: "Alumni Association", available: true, icon: Users },
    { id: 2, name: "Industry Institute Interaction", available: true, icon: Building },
    { id: 3, name: "Placement and Training", available: true, icon: Target },
    { id: 4, name: "Back up Electric supply", available: true, icon: Zap },
    { id: 5, name: "ERP Software", available: true, icon: Cpu },
    { id: 6, name: "Transport facility", available: true, icon: MapPin },
    { id: 7, name: "Post/Bank facility/ATM", available: true, icon: Building },
    { id: 8, name: "CCTV System", available: true, icon: Eye },
    { id: 9, name: "LCD Projector in Class-room", available: false, icon: Grid },
    { id: 10, name: "Staff quarters", available: true, icon: Building },
    { id: 11, name: "Display of courses", available: true, icon: BookOpen },
    { id: 12, name: "Public announcement system", available: true, icon: Server },
    { id: 13, name: "Group insurance", available: true, icon: Shield },
  ];

  // Laboratories Data
  const laboratories = [
    { id: 1, name: "Applied Chemistry Lab", department: "Basic Sciences", area: 67, equipment: true, description: "Equipped with modern instruments for chemical analysis and experiments." },
    { id: 2, name: "Electrical Engineering Lab", department: "Electrical", area: 67, equipment: true, description: "Features advanced electrical systems and measurement equipment." },
    { id: 3, name: "Applied Physics Lab", department: "Basic Sciences", area: 67, equipment: true, description: "Modern equipment for physics experiments and research." },
    { id: 4, name: "Communication Skills Lab", department: "Humanities", area: 67, equipment: true, description: "Language lab with audio-visual aids for communication practice." },
    { id: 5, name: "Workshop Practice Lab", department: "Mechanical", area: 67, equipment: true, description: "Comprehensive workshop with tools for manufacturing practice." },
    { id: 6, name: "Mechanical Engineering Lab", department: "Mechanical", area: 67, equipment: true, description: "Equipped with machinery for mechanical engineering experiments." },
    { id: 7, name: "Machine Drawing Lab", department: "Mechanical", area: 67, equipment: true, description: "CAD lab with software for engineering drawing and design." },
    { id: 8, name: "Material Testing Lab", department: "Civil", area: 67, equipment: true, description: "Equipment for testing construction materials strength and properties." },
    { id: 9, name: "Thermodynamics Lab", department: "Mechanical", area: 67, equipment: true, description: "Lab for heat transfer and energy conversion experiments." },
    { id: 10, name: "Metrology Lab", department: "Mechanical", area: 67, equipment: true, description: "Precision measurement instruments for engineering applications." },
    { id: 11, name: "Fluid Mechanics Lab", department: "Mechanical", area: 67, equipment: true, description: "Equipment for studying fluid behavior and hydraulic machines." },
    { id: 12, name: "Dynamics of Machines Lab", department: "Mechanical", area: 67, equipment: true, description: "Setup for studying machine kinematics and dynamics." },
    { id: 13, name: "Internal Combustion Engines Lab", department: "Mechanical", area: 67, equipment: true, description: "Various engine types for performance analysis." },
    { id: 14, name: "Refrigeration & AC Lab", department: "Mechanical", area: 67, equipment: true, description: "Equipment for refrigeration and air conditioning studies." },
    { id: 15, name: "Automobile Engineering Lab", department: "Mechanical", area: 67, equipment: true, description: "Automotive systems and components for practical learning." },
    { id: 16, name: "Robotics Lab", department: "Mechanical", area: 67, equipment: true, description: "Robotic arms and automation equipment." },
    { id: 17, name: "Engineering Geology Lab", department: "Civil", area: 67, equipment: true, description: "Geological samples and testing equipment." },
    { id: 18, name: "Transportation Engineering Lab", department: "Civil", area: 67, equipment: true, description: "Equipment for highway and transportation materials testing." },
    { id: 19, name: "Structural Analysis Lab", department: "Civil", area: 67, equipment: true, description: "Equipment for structural testing and analysis." },
    { id: 20, name: "Geotech Engineering Lab", department: "Civil", area: 67, equipment: true, description: "Soil testing equipment for geotechnical engineering." },
    { id: 21, name: "Environmental Engineering Lab", department: "Civil", area: 67, equipment: true, description: "Water and wastewater testing equipment." },
    { id: 22, name: "Concrete Technology Lab", department: "Civil", area: 67, equipment: true, description: "Concrete mixing and testing equipment." },
    { id: 23, name: "Computer Programming Lab", department: "Civil", area: 67, equipment: true, description: "Computers with programming software for civil applications." },
    { id: 24, name: "Structural Drawing Lab", department: "Civil", area: 67, equipment: true, description: "Drafting tools and software for structural drawings." },
    { id: 25, name: "Water Resources Lab", department: "Civil", area: 67, equipment: true, description: "Hydrology and hydraulic equipment." },
    { id: 26, name: "Programming Lab", department: "Computer Science", area: 67, equipment: true, description: "Computers with programming tools and IDEs." },
    { id: 27, name: "Data Structures Lab", department: "Computer Science", area: 67, equipment: true, description: "Software for algorithm implementation and analysis." },
    { id: 28, name: "Object Oriented Programming Lab", department: "Computer Science", area: 67, equipment: true, description: "Tools for OOP concepts implementation." },
    { id: 29, name: "Database Management Lab", department: "Computer Science", area: 67, equipment: true, description: "Database servers and management tools." },
    { id: 30, name: "Operating System Lab", department: "Computer Science", area: 67, equipment: true, description: "Environment for OS concepts implementation." },
    { id: 31, name: "Web Technology Lab", department: "Computer Science", area: 67, equipment: true, description: "Tools for web development and design." },
    { id: 32, name: "Computer Network Lab", department: "Computer Science", area: 67, equipment: true, description: "Networking equipment and simulation tools." },
    { id: 33, name: "Compiler Design Lab", department: "Computer Science", area: 67, equipment: true, description: "Tools for compiler construction projects." },
    { id: 34, name: "Data Mining Lab", department: "Computer Science", area: 67, equipment: true, description: "Software for data analysis and mining." },
    { id: 35, name: "Software Engineering Lab", department: "Computer Science", area: 67, equipment: true, description: "Project management and development tools." },
    { id: 36, name: "Computer Graphics Lab", department: "Computer Science", area: 67, equipment: true, description: "Graphics software and development tools." },
    { id: 37, name: "Java Programming Lab", department: "Computer Science", area: 67, equipment: true, description: "Environment for advanced Java programming." },
    { id: 38, name: "Soft Computing Lab", department: "Computer Science", area: 67, equipment: true, description: "Tools for AI and machine learning projects." },
    { id: 39, name: "Network Programming Lab", department: "Computer Science", area: 67, equipment: true, description: "Network programming and security tools." },
    { id: 40, name: "Android Lab", department: "Computer Science", area: 67, equipment: true, description: "Mobile app development environment." },
    { id: 41, name: "AI & Expert System Lab", department: "Computer Science", area: 67, equipment: true, description: "AI development tools and frameworks." },
    { id: 42, name: "Network Security Lab", department: "Computer Science", area: 67, equipment: true, description: "Cybersecurity and network protection tools." },
    { id: 43, name: "Software Technology Lab", department: "Computer Science", area: 67, equipment: true, description: "Latest software development technologies." },
    { id: 44, name: "Electrical Machines Lab", department: "Electrical", area: 67, equipment: true, description: "Various electrical machines for practical learning." },
    { id: 45, name: "Power Electronics Lab", department: "Electrical", area: 67, equipment: true, description: "Power electronic converters and controllers." },
    { id: 46, name: "Electronics Lab", department: "Electrical", area: 67, equipment: true, description: "Basic and digital electronics equipment." },
    { id: 47, name: "Electrical Circuits Lab", department: "Electrical", area: 67, equipment: true, description: "Equipment for circuit analysis and design." },
    { id: 48, name: "Power Systems Lab", department: "Electrical", area: 67, equipment: true, description: "Power system simulation and analysis tools." },
    { id: 49, name: "Electrical Measurements Lab", department: "Electrical", area: 67, equipment: true, description: "Precision electrical measurement instruments." },
  ];

  // Get unique departments for filter
  const departments = [...new Set(laboratories.map(lab => lab.department))];

  // Filter laboratories based on department
  const filteredLabs = laboratories.filter(lab => 
    departmentFilter === 'all' || lab.department === departmentFilter
  ).filter(lab => 
    lab.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Stats for the header
  const stats = {
    totalLabs: laboratories.length,
    departments: departments.length,
    essentialAmenities: essentialAmenities.length,
    desirableAmenities: desirableAmenities.filter(a => a.available).length,
    totalArea: laboratories.reduce((sum, lab) => sum + lab.area, 0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Campus Facilities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art infrastructure and amenities at Krishna Engineering College, Bhilai
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-5 shadow-lg text-center border-0 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-blue-100 text-blue-600 mb-3">
              <Beaker className="h-7 w-7" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalLabs}+</div>
            <div className="text-gray-600 text-sm">Laboratories</div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-lg text-center border-0 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-green-100 text-green-600 mb-3">
              <Building className="h-7 w-7" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.departments}</div>
            <div className="text-gray-600 text-sm">Departments</div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-lg text-center border-0 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-purple-100 text-purple-600 mb-3">
              <CheckCircle className="h-7 w-7" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.essentialAmenities}</div>
            <div className="text-gray-600 text-sm">Essential Amenities</div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-lg text-center border-0 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-orange-100 text-orange-600 mb-3">
              <Wifi className="h-7 w-7" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.desirableAmenities}</div>
            <div className="text-gray-600 text-sm">Desirable Amenities</div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-lg text-center border-0 transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-red-100 text-red-600 mb-3">
              <MapPin className="h-7 w-7" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalArea}+</div>
            <div className="text-gray-600 text-sm">Sq.M. Total Area</div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden border-0">
          <div className="flex flex-wrap border-b border-gray-200">
            <button
              className={`px-8 py-5 font-medium text-sm flex items-center ${activeTab === 'amenities' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('amenities')}
            >
              <Wifi className="h-5 w-5 mr-3" />
              Amenities
            </button>
            <button
              className={`px-8 py-5 font-medium text-sm flex items-center ${activeTab === 'labs' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setActiveTab('labs')}
            >
              <Beaker className="h-5 w-5 mr-3" />
              Laboratories & Workshops
            </button>
          </div>

          {/* Amenities Tab Content */}
          {activeTab === 'amenities' && (
            <div className="p-8">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={28} />
                  Essential Amenities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {essentialAmenities.map(amenity => (
                    <div key={amenity.id} className={`flex items-start p-5 rounded-xl border ${amenity.available ? 'border-green-100 bg-green-50' : 'border-red-100 bg-red-50'} transition-all hover:shadow-md`}>
                      <amenity.icon className={`h-6 w-6 mr-4 mt-1 flex-shrink-0 ${amenity.available ? 'text-green-600' : 'text-red-600'}`} />
                      <div>
                        <span className={`font-medium ${amenity.available ? 'text-gray-800' : 'text-gray-600'}`}>{amenity.name}</span>
                        <div className={`text-sm mt-1 ${amenity.available ? 'text-green-600' : 'text-red-600'}`}>
                          {amenity.available ? 'Available' : 'Not Available'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="text-blue-500 mr-3" size={28} />
                  Desirable Amenities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {desirableAmenities.map(amenity => (
                    <div key={amenity.id} className={`flex items-start p-5 rounded-xl border ${amenity.available ? 'border-blue-100 bg-blue-50' : 'border-red-100 bg-red-50'} transition-all hover:shadow-md`}>
                      <amenity.icon className={`h-6 w-6 mr-4 mt-1 flex-shrink-0 ${amenity.available ? 'text-blue-600' : 'text-red-600'}`} />
                      <div>
                        <span className={`font-medium ${amenity.available ? 'text-gray-800' : 'text-gray-600'}`}>{amenity.name}</span>
                        <div className={`text-sm mt-1 ${amenity.available ? 'text-blue-600' : 'text-red-600'}`}>
                          {amenity.available ? 'Available' : 'Not Available'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Laboratories Tab Content */}
          {activeTab === 'labs' && (
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search laboratories by name..."
                    className="pl-12 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex gap-3">
                  <div className="relative w-full md:w-48">
                    <select
                      className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                      value={departmentFilter}
                      onChange={(e) => setDepartmentFilter(e.target.value)}
                    >
                      <option value="all">All Departments</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>

                  <div className="flex bg-gray-100 p-1 rounded-xl">
                    <button 
                      onClick={() => setViewMode('grid')} 
                      className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                    >
                      <Grid size={20} />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')} 
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
                    >
                      <BarChart3 size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredLabs.map(lab => (
                    <div 
                      key={lab.id} 
                      className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all cursor-pointer"
                      onClick={() => setExpandedLab(expandedLab === lab.id ? null : lab.id)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-gray-900">{lab.name}</h3>
                        <div className="flex items-center text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full">
                          <MapPin className="h-4 w-4 mr-1" />
                          {lab.area} sq.m
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {lab.department}
                        </span>
                        
                        {lab.equipment ? (
                          <span className="inline-flex items-center text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Fully Equipped
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">
                            <XCircle className="h-4 w-4 mr-1" />
                            Not Equipped
                          </span>
                        )}
                      </div>

                      {expandedLab === lab.id && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-gray-600 text-sm">{lab.description}</p>
                          <button className="mt-3 text-blue-600 text-sm font-medium flex items-center">
                            View Equipment List <ChevronDown className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Laboratory Name</th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredLabs.map(lab => (
                        <tr key={lab.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{lab.name}</div>
                            <div className="text-sm text-gray-500">{lab.description.substring(0, 60)}...</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              {lab.department}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lab.area} sq.m</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {lab.equipment ? (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Equipped
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                <XCircle className="h-4 w-4 mr-1" />
                                Not Equipped
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900">View Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {filteredLabs.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-dashed border-gray-300">
                  <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">No laboratories found</h3>
                  <p className="text-gray-500 max-w-md mx-auto">Try adjusting your search query or changing department filters</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Additional Information Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-10 mb-12 text-white">
          <h2 className="text-3xl font-bold mb-2 text-center">World-Class Infrastructure</h2>
          <p className="text-blue-100 text-center mb-10 max-w-3xl mx-auto">
            Our campus is designed to provide the best learning environment with modern facilities and cutting-edge technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white bg-opacity-20 mb-5">
                <Library className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-600 text-lg mb-3">Central Library</h3>
              <p className="text-blue-600 text-sm">Extensive collection of books, journals, and digital resources with NPTEL facility</p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white bg-opacity-20 mb-5">
                <Cpu className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-600 text-lg mb-3">Computing Facilities</h3>
              <p className="text-blue-600 text-sm">High-speed internet with Wi-Fi connectivity across campus and computer labs</p>
            </div>
            
            <div className="text-center p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white bg-opacity-20 mb-5">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-blue-600 mb-3">Safety & Security</h3>
              <p className="text-blue-600 text-sm">24/7 security, CCTV surveillance, and fire safety systems throughout campus</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see our facilities in person?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Schedule a campus tour to experience our state-of-the-art laboratories and amenities firsthand</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all">
            Schedule a Campus Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedFacilities;