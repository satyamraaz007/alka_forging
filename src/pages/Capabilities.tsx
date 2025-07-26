import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Cog, Zap, Eye, Wrench, Layers, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Capabilities = () => {
  const heroRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const processRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const capabilitiesInView = useInView(capabilitiesRef, { once: true });
  const processInView = useInView(processRef, { once: true });

  const capabilities = [
    {
      icon: Eye,
      title: 'Reverse Engineering',
      description: 'Advanced reverse engineering services using 3D scanning and CAD modeling to recreate and improve existing components.',
      features: ['3D Scanning', 'CAD Reconstruction', 'Design Optimization', 'Legacy Part Recreation'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    },
    {
      icon: Zap,
      title: '3D Laser Scanning',
      description: 'Precision 3D laser scanning technology for quality control, inspection, and dimensional verification.',
      features: ['High Accuracy Scanning', 'Quality Inspection', 'Dimensional Analysis', 'Digital Documentation'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    },
    {
      icon: Layers,
      title: 'Die Welding',
      description: 'Expert die welding and repair services to extend tool life and maintain production efficiency.',
      features: ['Die Repair', 'Crack Welding', 'Build-up Welding', 'Surface Restoration'],
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg'
    },
    {
      icon: Cog,
      title: 'CNC Machining',
      description: 'State-of-the-art CNC machining centers providing precision manufacturing for complex geometries.',
      features: ['Multi-axis Machining', 'Tight Tolerances', 'Complex Geometries', 'High Volume Production'],
      image: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg'
    },
    {
      icon: Settings,
      title: 'In-house Tool Design',
      description: 'Complete tool design and engineering services from concept to production-ready tooling solutions.',
      features: ['CAD Design', 'FEA Analysis', 'Prototype Development', 'Tool Optimization'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    },
    {
      icon: Wrench,
      title: 'Custom Tooling',
      description: 'Specialized custom tooling solutions designed and manufactured for specific application requirements.',
      features: ['Custom Dies', 'Fixtures & Jigs', 'Special Tooling', 'Rapid Prototyping'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg'
    }
  ];

  const processFlow = [
    { step: 1, title: 'Consultation', description: 'Initial assessment and requirement analysis' },
    { step: 2, title: 'Design', description: 'CAD modeling and engineering design' },
    { step: 3, title: 'Prototyping', description: 'Prototype development and testing' },
    { step: 4, title: 'Production', description: 'Full-scale manufacturing and quality control' },
    { step: 5, title: 'Delivery', description: 'Final inspection and timely delivery' }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Capabilities
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Comprehensive forging and manufacturing capabilities backed by advanced 
              technology, expert engineering, and decades of industry experience.
            </p>
            <Link
              to="/quote"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center group"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section ref={capabilitiesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Manufacturing Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, our integrated capabilities ensure precision, 
              quality, and efficiency in every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 50 }}
                animate={capabilitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={capability.image}
                    alt={capability.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center">
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600 mb-6">{capability.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {capability.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Process Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined workflow ensures efficient project execution from initial 
              consultation to final delivery.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-4">
            {processFlow.map((process, index) => (
              <div key={process.step} className="flex flex-col items-center text-center lg:flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={processInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {process.step}
                  </div>
                  {index < processFlow.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-red-200">
                      <div className="h-full bg-red-600 animate-pulse"></div>
                    </div>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 max-w-xs">{process.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Technology & Quality Assurance
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our state-of-the-art equipment and rigorous quality control processes 
                ensure exceptional results for every project.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Advanced Equipment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 5-axis CNC Machining Centers</li>
                    <li>• 3D Laser Scanning Systems</li>
                    <li>• Precision Forging Presses</li>
                    <li>• Heat Treatment Furnaces</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Quality Control</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• ISO 9001:2015 Certified</li>
                    <li>• CMM Inspection</li>
                    <li>• Material Testing Lab</li>
                    <li>• Statistical Process Control</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg"
                alt="Quality Control"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </motion.div>
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
              Let's Discuss Your Manufacturing Needs
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Our technical team is ready to help you find the perfect solution for your 
              forging and manufacturing requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Contact Our Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;