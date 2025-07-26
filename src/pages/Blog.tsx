import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag, Search, TrendingUp, BookOpen, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const heroRef = useRef(null);
  const postsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const postsInView = useInView(postsRef, { once: true });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Industry Insights', 'Technology', 'Company News', 'Manufacturing', 'Quality'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Impression Die Forging: Trends and Innovations',
      excerpt: 'Explore the latest technological advancements transforming the forging industry, from AI-driven quality control to sustainable manufacturing practices.',
      content: 'The forging industry is experiencing unprecedented transformation...',
      author: 'Rajesh Kumar',
      date: '2024-01-15',
      category: 'Industry Insights',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      featured: true,
      tags: ['Innovation', 'Technology', 'Future', 'Manufacturing']
    },
    {
      id: 2,
      title: 'CBAM Compliance: What Forging Companies Need to Know',
      excerpt: 'Understanding the Carbon Border Adjustment Mechanism and its impact on steel and forging exports to the European Union.',
      content: 'The European Union\'s Carbon Border Adjustment Mechanism...',
      author: 'Priya Sharma',
      date: '2024-01-10',
      category: 'Company News',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg',
      featured: false,
      tags: ['CBAM', 'Compliance', 'Export', 'Sustainability']
    },
    {
      id: 3,
      title: 'Advanced Material Selection for High-Performance Applications',
      excerpt: 'A comprehensive guide to choosing the right steel grades for demanding applications in automotive, aerospace, and heavy machinery.',
      content: 'Material selection is crucial for successful forging projects...',
      author: 'Dr. Amit Patel',
      date: '2024-01-05',
      category: 'Technology',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      featured: false,
      tags: ['Materials', 'Steel', 'Performance', 'Engineering']
    },
    {
      id: 4,
      title: 'Industry 4.0 in Forging: Smart Manufacturing Revolution',
      excerpt: 'How digital transformation and smart manufacturing technologies are reshaping traditional forging operations for improved efficiency.',
      content: 'Industry 4.0 technologies are revolutionizing manufacturing...',
      author: 'Vikram Singh',
      date: '2023-12-28',
      category: 'Technology',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg',
      featured: false,
      tags: ['Industry 4.0', 'Smart Manufacturing', 'Automation', 'IoT']
    },
    {
      id: 5,
      title: 'Quality Control Excellence: Zero Defect Manufacturing',
      excerpt: 'Our approach to achieving zero defect rates through advanced quality control systems and continuous process improvement.',
      content: 'Quality control is the cornerstone of successful manufacturing...',
      author: 'Meera Gupta',
      date: '2023-12-20',
      category: 'Quality',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      featured: false,
      tags: ['Quality Control', 'Zero Defect', 'Manufacturing', 'Process']
    },
    {
      id: 6,
      title: 'Sustainable Forging: Environmental Responsibility in Manufacturing',
      excerpt: 'Our commitment to sustainable manufacturing practices and reducing environmental impact while maintaining quality standards.',
      content: 'Sustainability is becoming increasingly important in manufacturing...',
      author: 'Arun Kumar',
      date: '2023-12-15',
      category: 'Company News',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg',
      featured: false,
      tags: ['Sustainability', 'Environment', 'Green Manufacturing', 'CSR']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
            <BookOpen className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Stay informed with the latest industry trends, company updates, 
              and expert insights from the world of precision forging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-semibold">Featured Article</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {new Date(featuredPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{featuredPost.readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center group w-fit"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={postsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover expert insights, industry trends, and company updates 
              from our team of forging professionals.
            </p>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <Lightbulb className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Articles Found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={postsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-200 inline-flex items-center group"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights, 
              industry trends, and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;