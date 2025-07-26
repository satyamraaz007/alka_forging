import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';

const Materials = () => {
  const heroRef = useRef(null);
  const materialsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const materialsInView = useInView(materialsRef, { once: true });

  const materials = [
    {
      name: 'Stainless Steel',
      slug: 'stainless-steel',
      description: 'Corrosion-resistant steel with excellent strength and durability for demanding applications.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      properties: ['Corrosion Resistant', 'High Strength', 'Heat Resistant', 'Hygienic'],
      applications: ['Food Processing', 'Chemical Industry', 'Medical Devices', 'Marine Equipment']
    },
    {
      name: 'Carbon Steel',
      slug: 'carbon-steel',
      description: 'Versatile steel with excellent mechanical properties, ideal for structural applications.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      properties: ['High Tensile Strength', 'Ductile', 'Weldable', 'Cost-Effective'],
      applications: ['Construction', 'Automotive', 'Machinery', 'Infrastructure']
    },
    {
      name: 'Alloy Steel',
      slug: 'alloy-steel',
      description: 'Enhanced steel with superior mechanical properties through strategic alloying elements.',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg',
      properties: ['Enhanced Hardness', 'Improved Toughness', 'Better Hardenability', 'Wear Resistant'],
      applications: ['Gears', 'Shafts', 'Bearings', 'Tool Manufacturing']
    },
    {
      name: 'Microalloy Steel',
      slug: 'microalloy-steel',
      description: 'Advanced steel with fine-tuned properties through controlled microalloying additions.',
      image: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg',
      properties: ['Fine Grain Structure', 'High Strength-to-Weight', 'Good Formability', 'Improved Weldability'],
      applications: ['Pipelines', 'Structural Beams', 'Automotive Chassis', 'Pressure Vessels']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg)',
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
              Materials We Forge
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Premium quality steel grades engineered for superior performance across 
              diverse industrial applications and demanding environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Materials Grid Section */}
      <section ref={materialsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={materialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Material Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each material is carefully selected and processed to meet the highest standards 
              of quality, performance, and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={material.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={materialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{material.name}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{material.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Shield className="w-5 h-5 text-red-600 mr-2" />
                        Key Properties
                      </h4>
                      <ul className="space-y-2">
                        {material.properties.map((property) => (
                          <li key={property} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                            {property}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="w-5 h-5 text-red-600 mr-2" />
                        Applications
                      </h4>
                      <ul className="space-y-2">
                        {material.applications.map((application) => (
                          <li key={application} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link
                    to={`/materials/${material.slug}`}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Quality Standards & Certifications
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our materials meet the most stringent international standards and certifications, 
                ensuring consistent quality and performance in every project.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-900 mb-2">ISO 9001:2015</h3>
                  <p className="text-sm text-gray-600">Quality Management System</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-900 mb-2">ASTM Standards</h3>
                  <p className="text-sm text-gray-600">Material Specifications</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-900 mb-2">EN Standards</h3>
                  <p className="text-sm text-gray-600">European Conformity</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-gray-900 mb-2">CBAM Ready</h3>
                  <p className="text-sm text-gray-600">Carbon Border Adjustment</p>
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
                src="https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg"
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
              Need Help Selecting Materials?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Our material experts can help you choose the perfect steel grade for your specific 
              application requirements and performance criteria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center group"
              >
                Request Material Consultation
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

export default Materials;