import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Calendar, MapPin, Users, Download, Share, Heart, Clock, Filter } from "lucide-react";

const galleryData = [
  {
    id: 1,
    title: "Hanuman Jayanti Celebration 2025",
    category: "Religious",
    image: "https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/441305399_122752391367473984_3686828832087925275_n.jpg",
    date: "2025-04-23",
    time: "10:00 AM",
    location: "College Campus",
    attendees: "500+",
    description: "Hanuman Jayanti was celebrated with great devotion and enthusiasm at Krishna Engineering College. Both students and staff collaborated to organize a vibrant and spiritual event.",
    likes: 90,
    downloads: 40,
    color: "#FF6B35"
  },
  {
    id: 2,
    title: "Gulal 2.0: Freshers & Farewell Party 2025",
    category: "Cultural",
    image: "https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/441230145_122752391347473984_7869424194947334913_n.jpg",
    date: "2025-03-10",
    time: "2:00 PM",
    location: "College Ground",
    attendees: "800+",
    description: "A colorful and joyful celebration as Krishna Engineering College hosted Gulal 2.0, combining Freshers' Welcome and Farewell party. Students celebrated Holi and bid farewell to seniors with music, dance, and fun.",
    likes: 110,
    downloads: 50,
    color: "#8B5CF6"
  },
  {
    id: 4,
    title: "Happy 79th Independence Day!",
    category: "National",
    image: "/events/event4.jpg",
    date: "2025-08-15",
    time: "8:00 AM",
    location: "Main Auditorium",
    attendees: "1000+",
    description: "At Krishna Engineering College, we salute the spirit of freedom, innovation, and resilience that defines our great nation. May we continue to build a stronger India — with knowledge, technology, and unity at the core.",
    likes: 200,
    downloads: 85,
    color: "#00BA59"
  },
  {
    id: 5,
    title: "Welcome, B.Tech Batch of 2025–26!",
    category: "Academic",
    image: "/events/event3.jpeg",
    date: "2025-08-13",
    time: "10:30 AM",
    location: "Seminar Hall",
    attendees: "600+",
    description: "Induction Program 2025–26🔥🔥 We're thrilled to welcome the newest members of our Krishna Engineering College family! Join us in the Seminar Hall for an inspiring session with Prof. Rajiv Prakash, Director of IIT Bhilai, as our Chief Guest.",
    likes: 180,
    downloads: 75,
    color: "#3B82F6"
  },
  {
    id: 6,
    title: "Cultural Festivals",
    category: "Cultural",
    image: "/campus/Cultural.jpeg",
    date: "2025-09-20",
    time: "6:00 PM",
    location: "Cultural Hall",
    attendees: "700+",
    description: "Celebrate diversity with cultural events and international festivals showcasing the rich heritage and traditions from across the globe.",
    likes: 120,
    downloads: 60,
    color: "#00BA59"
  }
];

const categories = [
  { id: "All", name: "All Events", count: galleryData.length, icon: "🎉" },
  { id: "Cultural", name: "Cultural", count: galleryData.filter(item => item.category === "Cultural").length, icon: "💃" },
  { id: "Academic", name: "Academic", count: galleryData.filter(item => item.category === "Academic").length, icon: "📚" },
  { id: "Religious", name: "Religious", count: galleryData.filter(item => item.category === "Religious").length, icon: "🕊️" },
];

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredData = galleryData
    .filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return new Date(b.date) - new Date(a.date);
      if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
      if (sortBy === "popular") return b.likes - a.likes;
      return 0;
    });

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6  shadow-blue-200"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Campus Memories
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-700 bg-clip-text text-transparent">
            Event Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Relive the vibrant moments, celebrations, and milestones that make our campus life extraordinary
          </p>
        </motion.div>

        {/* Enhanced Filters Section */}
        <motion.div
          className="mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6  border border-gray-200/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 border-2 ${
                    activeCategory === cat.id
                      ? "text-white scale-105"
                      : "text-gray-700 bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                  style={activeCategory === cat.id ? { 
                    background: `linear-gradient(135deg, ${galleryData.find(item => item.category === cat.id)?.color || '#3B82F6'}, ${galleryData.find(item => item.category === cat.id)?.color || '#3B82F6'}dd)` 
                  } : {}}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    activeCategory === cat.id ? "bg-white/20" : "bg-gray-100"
                  }`}>
                    {cat.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Results and Sort */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredData.length}</span> events found
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Filter size={16} />
              <span>Sort by: {sortBy === 'newest' ? 'Newest' : sortBy === 'oldest' ? 'Oldest' : 'Popular'}</span>
            </button>
            
            {isSortOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                {['newest', 'oldest', 'popular'].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setIsSortOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl"
                  >
                    {option === 'newest' ? 'Newest First' : option === 'oldest' ? 'Oldest First' : 'Most Popular'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Enhanced Gallery Grid */}
        {filteredData.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group bg-white rounded-2xl  transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Image with Gradient Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Category Badge */}
                    <div 
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-semibold backdrop-blur-sm border border-white/20"
                      style={{ backgroundColor: `${item.color}CC` }}
                    >
                      {item.category}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <h3 className="text-white font-bold text-xl mb-3 leading-tight">{item.title}</h3>
                      
                      <div className="flex items-center text-white/90 text-sm mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <Clock size={14} className="mr-1" />
                        <span>{item.time}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-white/90 text-sm">
                          <MapPin size={14} className="mr-1" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/90">
                          <div className="flex items-center gap-1">
                            <Heart size={14} />
                            <span>{item.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{item.attendees}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Heart size={14} className="text-red-500" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download size={14} className="text-blue-500" />
                          <span>{item.downloads}</span>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">No events found</h3>
            <p className="text-gray-500 max-w-md mx-auto text-lg">
              Try adjusting your search criteria or browse different categories
            </p>
          </motion.div>
        )}

        {/* Load More */}
        {filteredData.length > 0 && (
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Events
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white z-10 shadow-lg transition-all duration-300 hover:scale-110"
                onClick={() => setSelectedItem(null)}
              >
                <X size={20} className="text-gray-700" />
              </button>
              
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-96 object-cover"
                />
                
                {/* Header Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div 
                        className="inline-block px-4 py-2 rounded-full text-white text-sm font-semibold backdrop-blur-sm border border-white/20 mb-4"
                        style={{ backgroundColor: `${selectedItem.color}CC` }}
                      >
                        {selectedItem.category}
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-3">{selectedItem.title}</h2>
                      <div className="flex flex-wrap items-center gap-4 text-white/90">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{new Date(selectedItem.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{selectedItem.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{selectedItem.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} />
                          <span>{selectedItem.attendees} attendees</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.button 
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Download size={20} />
                      </motion.button>
                      <motion.button 
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share size={20} />
                      </motion.button>
                      <motion.button 
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart size={20} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedItem.description}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Heart size={16} className="text-red-500" />
                      <span>{selectedItem.likes} likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download size={16} className="text-blue-500" />
                      <span>{selectedItem.downloads} downloads</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium">
                      Share Event
                    </button>
                    <button 
                      className="px-6 py-2 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: selectedItem.color }}
                    >
                      Download Image
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPage;