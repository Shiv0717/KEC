import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ChevronDown, ZoomIn, Download, Share } from "lucide-react";

const galleryData = [
  {
    id: 1,
    title: "Hanuman Jayanti Celebration 2025",
    category: "Events",
    image: "https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/441305399_122752391367473984_3686828832087925275_n.jpg", // replace with actual
    date: "2025-04-23",
    description: "Hanuman Jayanti was celebrated with great devotion and enthusiasm at Krishna Engineering College. Both students and staff collaborated to organize a vibrant and spiritual event.",
    likes: 90,
    downloads: 40
  },
  {
    id: 2,
    title: "Gulal 2.0: Freshers & Farewell Party 2025",
    category: "Events",
    image: "https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/441230145_122752391347473984_7869424194947334913_n.jpg", // replace with actual
    date: "2025-03-10",
    description: "A colorful and joyful celebration as Krishna Engineering College hosted Gulal 2.0, combining Freshers’ Welcome and Farewell party. Students celebrated Holi and bid farewell to seniors with music, dance, and fun.",
    likes: 110,
    downloads: 50
  },
  {
    id: 3,
    title: "Kite Festival 2025",
    category: "Events",
    image: "https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/441312370_122752391407473984_2403120141868937387_n.jpg", // replace with actual
    date: "2025-02-05",
    description: "A vibrant Kite Festival was hosted at Krishna College, Bhilai on 5th Feb 2025. Students participated in kite flying competitions, winning exciting prizes and enjoying colorful skies.",
    likes: 150,
    downloads: 70
  }
  
];

const categories = [
  { id: "All", name: "All", count: galleryData.length },
  { id: "Events", name: "Events", count: galleryData.filter(item => item.category === "Events").length },
  { id: "Workshops", name: "Workshops", count: galleryData.filter(item => item.category === "Workshops").length },
  { id: "Ceremony", name: "Ceremonies", count: galleryData.filter(item => item.category === "Ceremony").length },
  { id: "Competitions", name: "Competitions", count: galleryData.filter(item => item.category === "Competitions").length },
  { id: "Exhibitions", name: "Exhibitions", count: galleryData.filter(item => item.category === "Exhibitions").length },
];

const sortOptions = [
  { id: "newest", name: "Newest First" },
  { id: "oldest", name: "Oldest First" },
  { id: "popular", name: "Most Popular" },
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text  bg-gradient-to-r from-blue-600 to-purple-600">
            Campus Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the vibrant life at our campus through captivating moments from events, workshops, and celebrations.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
  className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
  {/* Filters */}
  <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
    {categories.map((cat) => (
      <button
        key={cat.id}
        onClick={() => setActiveCategory(cat.id)}
        className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 shrink-0 ${
          activeCategory === cat.id
            ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
            : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
        }`}
      >
        <span>{cat.name}</span>
        <span
          className={`text-xs px-1.5 py-0.5 rounded-full ${
            activeCategory === cat.id ? "bg-blue-700" : "bg-gray-100"
          }`}
        >
          {cat.count}
        </span>
      </button>
    ))}
  </div>

  {/* Search + Sort */}
  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
    {/* Search */}
    <div className="relative w-full sm:w-72">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search gallery..."
        className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
    {/* Sort */}
    
  </div>
</motion.div>


        {/* Results Count */}
        <motion.div 
          className="mb-6 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Showing {filteredData.length} of {galleryData.length} images
        </motion.div>

        {/* Gallery Grid */}
        {filteredData.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredData.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative rounded-2xl overflow-hidden shadow-md cursor-pointer group bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -8 }}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                      <span className="inline-block bg-blue-500 text-white text-xs font-medium px-2.5 py-1 rounded-full mb-2">
                        {item.category}
                      </span>
                      <div className="flex items-center text-white/90 text-sm">
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>{item.likes} likes</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 p-2 rounded-full shadow-sm">
                        <ZoomIn size={18} className="text-gray-700" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No images found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </motion.div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredData.length > 0 && (
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium shadow-sm">
              Load More Images
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
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
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 z-10"
                onClick={() => setSelectedItem(null)}
              >
                <X size={20} />
              </button>
              
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-96 object-cover rounded-t-2xl"
                />
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-2">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{selectedItem.title}</h3>
                    <div className="flex items-center text-white/90 mt-1">
                      <span>{new Date(selectedItem.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <span className="mx-2">•</span>
                      <span>{selectedItem.likes} likes</span>
                      <span className="mx-2">•</span>
                      <span>{selectedItem.downloads} downloads</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Download size={20} className="text-white" />
                    </button>
                    <button className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Share size={20} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedItem.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Tags: {selectedItem.category}, Campus, Education</span>
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