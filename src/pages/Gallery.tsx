import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera, Settings, Users, Factory } from 'lucide-react';

const Gallery = () => {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const galleryInView = useInView(galleryRef, { once: true });

  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Machinery', 'Products', 'Facility', 'Team', 'Process'];

  const galleryImages = [
    {
      id: 1,
      title: 'State-of-the-art Forging Press',
      category: 'Machinery',
      description: 'Our latest 5000-ton forging press capable of handling large automotive components',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    },
    {
      id: 2,
      title: 'Precision Crankshaft Components',
      category: 'Products',
      description: 'High-precision forged crankshafts for automotive applications',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    },
    {
      id: 3,
      title: 'Modern Production Facility',
      category: 'Facility',
      description: 'Our climate-controlled production floor with advanced ventilation systems',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg'
    },
    {
      id: 4,
      title: 'Quality Control Laboratory',
      category: 'Facility',
      description: 'Advanced testing equipment ensuring consistent quality standards',
      image: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg'
    },
    {
      id: 5,
      title: 'CNC Machining Center',
      category: 'Machinery',
      description: '5-axis CNC machining center for precision finishing operations',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    },
    {
      id: 6,
      title: 'Forged Railway Components',
      category: 'Products',
      description: 'Heavy-duty forged components for railway applications',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    },
    {
      id: 7,
      title: 'Heat Treatment Process',
      category: 'Process',
      description: 'Controlled atmosphere heat treatment for optimal material properties',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg'
    },
    {
      id: 8,
      title: 'Expert Engineering Team',
      category: 'Team',
      description: 'Our experienced engineers reviewing project specifications',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      thumbnail: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    },
    {
      id: 9,
      title: '3D Laser Scanning Setup',
      category: 'Machinery',
      description: 'Advanced 3D laser scanning for reverse engineering applications',
      image: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg'
    },
    {
      id: 10,
      title: 'Agricultural Equipment Parts',
      category: 'Products',
      description: 'Durable forged components for agricultural machinery',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    },
    {
      id: 11,
      title: 'Die Design Workshop',
      category: 'Process',
      description: 'Custom die design and manufacturing facility',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      thumbnail: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    },
    {
      id: 12,
      title: 'Production Team Meeting',
      category: 'Team',
      description: 'Daily production planning and quality review meeting',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      thumbnail: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    }
  ];

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Machinery': return Settings;
      case 'Products': return Factory;
      case 'Team': return Users;
      case 'Process': return Settings;
      case 'Facility': return Factory;
      default: return Camera;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg)',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Camera className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Visual Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Take a visual journey through our state-of-the-art facilities, advanced machinery, 
              precision products, and the dedicated team behind our success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {activeCategory === 'All' ? 'Complete Gallery' : `${activeCategory} Gallery`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {activeCategory === 'All' 
                ? 'Explore our comprehensive visual showcase of facilities, equipment, products, and team'
                : `Browse our collection of ${activeCategory.toLowerCase()} images`
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 50 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.thumbnail}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        {image.category}
                      </span>
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-white/80 text-xs line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Images Found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80 text-lg">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Sq Ft Facility' },
              { number: '50+', label: 'Advanced Machines' },
              { number: '200+', label: 'Product Types' },
              { number: '25+', label: 'Team Members' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience It Yourself
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Schedule a facility tour to see our state-of-the-art equipment and 
              meet the team behind our precision forging solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Schedule Facility Tour
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;