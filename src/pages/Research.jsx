import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Microscope, 
  BookOpen, 
  Users, 
  Award,
  Calendar,
  BarChart3,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Zap,
  Cpu,
  Atom,
  Dna,
  Database,
  Network,
  FlaskRound,
  Lightbulb,
  BookText,
  GraduationCap,
  Target,
  Eye,
  Building
} from 'lucide-react';

const Research = () => {
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('projects');

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Research data
  const researchAreas = [
    {
      id: 1,
      title: "Artificial Intelligence & Machine Learning",
      description: "Advanced research in neural networks, deep learning, and AI applications",
      icon: <Cpu className="w-8 h-8 text-blue-600" />,
      projects: 12,
      publications: 45,
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Renewable Energy Systems",
      description: "Developing sustainable energy solutions and storage technologies",
      icon: <Zap className="w-8 h-8 text-green-600" />,
      projects: 8,
      publications: 32,
      color: "from-green-500 to-green-700"
    },
    {
      id: 3,
      title: "Biotechnology & Genetic Engineering",
      description: "Cutting-edge research in genomics, proteomics and medical biotechnology",
      icon: <Dna className="w-8 h-8 text-purple-600" />,
      projects: 10,
      publications: 38,
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 4,
      title: "Nanotechnology & Materials Science",
      description: "Design and synthesis of novel nanomaterials for various applications",
      icon: <Atom className="w-8 h-8 text-orange-600" />,
      projects: 7,
      publications: 29,
      color: "from-orange-500 to-orange-700"
    },
    {
      id: 5,
      title: "Data Science & Big Data Analytics",
      description: "Research on data mining, pattern recognition, and predictive analytics",
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      projects: 9,
      publications: 41,
      color: "from-indigo-500 to-indigo-700"
    },
    {
      id: 6,
      title: "Internet of Things & Cyber-Physical Systems",
      description: "Developing smart connected systems for industrial and domestic use",
      icon: <Network className="w-8 h-8 text-cyan-600" />,
      projects: 11,
      publications: 36,
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  const researchProjects = [
    {
      id: 1,
      title: "Electric Vehicle Development with Sodium-Ion Battery",
      department: "Mechanical Engineering",
      funding: "₹55,00,000",
      duration: "2024-2026",
      status: "Ongoing",
      description:
        "India's first initiative in EV development using sodium-ion batteries to enhance vehicle range in a single charge. Focus on energy efficiency and cost reduction.",
      team: ["Dr. Joy Sonashalol", "Mr. Ash Kumar Soni", "6 Research Scholars"],
      outcomes: "Prototype Developed, 2 Publications",
      image:
        "https://images.unsplash.com/photo-1614436165834-50e93f5cd79e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Fast Charging Station Infrastructure with GPS Integration",
      department: "Electrical Engineering",
      funding: "₹48,00,000",
      duration: "2023-2025",
      status: "Ongoing",
      description:
        "Development of fast charging station modules for EVs with GPS-enabled tracking for easy location access by users and service providers.",
      team: ["Mr. Tarachand Sahu", "4 Research Scholars"],
      outcomes: "Mobile App Developed, Pilot Deployment",
      image:
        "https://images.unsplash.com/photo-1581091012184-5c46a1cd2765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Intelligent Robotics with Artificial Intelligence",
      department: "Computer Science & Engineering",
      funding: "₹62,00,000",
      duration: "2023-2026",
      status: "Ongoing",
      description:
        "Building advanced robotics systems capable of adaptive behavior and decision-making through machine learning and AI integration.",
      team: ["Dr. Priya Singh", "5 Research Scholars"],
      outcomes: "3 Publications, 1 Patent Filed",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e8f9e1f2c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Semiconductor Chip Research & Manufacturing",
      department: "Electronics and Communication",
      funding: "₹78,00,000",
      duration: "2024-2027",
      status: "Ongoing",
      description:
        "Research on design, material optimization, and indigenous manufacturing of semiconductor chips aimed at reducing import dependency.",
      team: ["Dr. V. Sharma", "Dr. S. Joshi", "6 Research Scholars"],
      outcomes: "2 Prototypes, Industry Collaboration Initiated",
      image:
        "https://images.unsplash.com/photo-1581092334600-5fc179ee4c35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Hyperloop Transportation System Research",
      department: "Mechanical Engineering",
      funding: "₹1,00,00,000",
      duration: "2024-2028",
      status: "Ongoing",
      description:
        "Exploratory research on implementing Hyperloop technology for ultra-fast transportation, focusing on magnetic levitation and vacuum tube dynamics.",
      team: ["Dr. Joy Sonashalol", "8 Research Scholars"],
      outcomes: "Design Simulation Completed, 1 Journal Publication",
      image:
        "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  

  const researchFacilities = [
    {
      id: 1,
      name: "Advanced Computing Lab",
      description: "Equipped with high-performance computing clusters for complex simulations and AI research",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["HPC Clusters", "GPU Workstations", "Cloud Computing", "AI Training Infrastructure"],
      capacity: "40 researchers"
    },
    {
      id: 2,
      name: "Nano Research Center",
      description: "State-of-the-art facilities for nanomaterials synthesis and characterization",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["SEM/TEM Microscopy", "Clean Room", "Thin Film Deposition", "Material Testing"],
      capacity: "25 researchers"
    },
    {
      id: 3,
      name: "Biotechnology Research Center",
      description: "Modern labs for genetic engineering, cell culture, and bioprocessing research",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["PCR Labs", "Cell Culture", "Fermentation", "Chromatography"],
      capacity: "30 researchers"
    },
    {
      id: 4,
      name: "Renewable Energy Lab",
      description: "Testing facilities for solar, wind and other renewable energy systems",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Solar Simulators", "Wind Tunnels", "Battery Testing", "Smart Grid Systems"],
      capacity: "20 researchers"
    },
    {
      id: 5,
      name: "Data Science Center",
      description: "Advanced tools for big data analytics, visualization, and machine learning research",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Data Visualization", "ML Workbenches", "Database Servers", "Collaboration Spaces"],
      capacity: "35 researchers"
    },
    {
      id: 6,
      name: "Electronics Prototyping Lab",
      description: "Facilities for IoT development, embedded systems, and electronics prototyping",
      image: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["3D Printing", "PCB Fabrication", "IoT Testbeds", "Sensor Networks"],
      capacity: "28 researchers"
    }
  ];

  const departments = ["all", "Computer Science", "Physics", "Biotechnology", "Chemistry", "Electronics"];

  const filteredProjects = researchProjects.filter(project => {
    const matchesDepartment = activeDepartment === 'all' || project.department === activeDepartment;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full -translate-y-36 translate-x-36 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full translate-y-48 -translate-x-48 opacity-20 blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6"
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            Innovation Through Research
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Research & Innovation at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Krishna College</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl max-w-3xl mx-auto mb-8 text-blue-100"
          >
            Advancing knowledge through cutting-edge research, innovation, and collaboration across disciplines
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-50 transition-all flex items-center"
            >
              Explore Research Opportunities <ExternalLink className="ml-2 w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center"
            >
              <BookText className="mr-2 w-5 h-5" /> View Publications
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Research Excellence
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FlaskRound className="w-8 h-8" />, value: "56+", label: "Ongoing Projects", color: "from-blue-500 to-blue-600" },
              { icon: <BookOpen className="w-8 h-8" />, value: "₹1Cr+", label: "Research Funding", color: "from-purple-500 to-purple-600" },
              { icon: <GraduationCap className="w-8 h-8" />, value: "225+", label: "Publications", color: "from-green-500 to-green-600" },
              { icon: <Award className="w-8 h-8" />, value: "18", label: "Patents Filed", color: "from-orange-500 to-orange-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-md`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center mb-12 text-blue-900"
          >
            Key Research Areas
          </motion.h2>
          
          <motion.div 
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                variants={fadeIn}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <Target className="w-4 h-4 mr-1" /> {area.projects} Projects
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" /> {area.publications} Publications
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tabs for Projects and Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-xl p-1 inline-flex">
              {[
                { id: 'projects', label: 'Research Projects', icon: <FlaskRound className="w-5 h-5" /> },
                { id: 'facilities', label: 'Research Facilities', icon: <Building className="w-5 h-5" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium flex items-center transition-all ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'projects' && (
            <>
              {/* Filters and Search for Projects */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-50 rounded-2xl p-6 mb-8 shadow-sm border border-gray-200"
              >
                <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-200 w-full md:w-96">
                    <Search size={20} className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search research projects..."
                      className="bg-transparent outline-none w-full placeholder-gray-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                      <Filter size={20} />
                      <span>Filter by:</span>
                    </div>
                    {departments.map((dept) => (
                      <motion.button
                        key={dept}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          activeDepartment === dept 
                            ? 'bg-blue-600 text-white shadow-md' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setActiveDepartment(dept)}
                      >
                        {dept === 'all' ? 'All Departments' : dept}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Projects List */}
              <motion.div 
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className="grid gap-6"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={fadeIn}
                    className="bg-white rounded-2xl shadow-md overflow-hidden border-l-4 border-blue-500 hover:shadow-xl transition-all"
                  >
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/4">
                          <div className="rounded-xl overflow-hidden shadow-md">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-40 object-cover"
                            />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                              {project.department}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              project.status === 'Ongoing' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-purple-100 text-purple-800'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-blue-900 mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-4">
                            <span className="flex items-center">
                              <Award className="w-4 h-4 mr-1" /> {project.funding}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" /> {project.duration}
                            </span>
                          </div>

                          <AnimatePresence>
                            {expandedProject === project.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 text-sm text-gray-700 space-y-3"
                              >
                                <div>
                                  <span className="font-medium">Research Team:</span>
                                  <div className="mt-1">{project.team.join(', ')}</div>
                                </div>
                                <div>
                                  <span className="font-medium">Outcomes:</span>
                                  <div className="mt-1">{project.outcomes}</div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                        <button
                          onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                          className="text-blue-600 font-medium flex items-center gap-2 hover:text-blue-800 transition-colors"
                        >
                          {expandedProject === project.id ? (
                            <>
                              <ChevronUp size={18} /> Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown size={18} /> View Details
                            </>
                          )}
                        </button>
                        
                        <button className="text-blue-600 font-medium flex items-center gap-2 hover:text-blue-800 transition-colors">
                          <Eye size={18} /> View Project
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}

          {activeTab === 'facilities' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {researchFacilities.map((facility, index) => (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm">Capacity: {facility.capacity}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">{facility.name}</h3>
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-blue-800 text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.features.map((feature, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="mt-4 text-blue-600 font-medium flex items-center gap-2 hover:text-blue-800 transition-colors">
                      <Eye size={16} /> View Facility
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
     
    </div>
  );
};

export default Research;