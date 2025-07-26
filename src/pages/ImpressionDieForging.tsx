import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, DollarSign, Cog, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImpressionDieForging = () => {
  const heroRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const processInView = useInView(processRef, { once: true });
  const benefitsInView = useInView(benefitsRef, { once: true });

  const processSteps = [
    {
      step: 1,
      title: 'Material Preparation',
      description: 'Raw material is heated to optimal forging temperature in our precision-controlled furnaces.'
    },
    {
      step: 2,
      title: 'Die Placement',
      description: 'Heated material is positioned between carefully designed impression dies with precise tolerances.'
    },
    {
      step: 3,
      title: 'Forging Process',
      description: 'High-pressure forging force shapes the material, filling the die cavity completely.'
    },
    {
      step: 4,
      title: 'Cooling & Finishing',
      description: 'Controlled cooling and final machining operations ensure dimensional accuracy and surface finish.'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Superior Strength',
      description: 'Enhanced grain structure provides exceptional mechanical properties and durability'
    },
    {
      icon: Zap,
      title: 'Precise Dimensions',
      description: 'Tight tolerances and consistent repeatability reduce machining requirements'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Optimized material usage and reduced waste make it economical for high-volume production'
    },
    {
      icon: Cog,
      title: 'Complex Geometries',
      description: 'Ability to create intricate shapes that would be difficult or impossible with other methods'
    }
  ];

  const applications = [
    'Automotive crankshafts and connecting rods',
    'Agricultural equipment components',
    'Railway coupling and brake components',
    'Industrial machinery parts',
    'Mining equipment components',
    'Power transmission components'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg)',
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
              Impression Die Forging
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Advanced forging technology delivering precision components with superior strength, 
              durability, and dimensional accuracy for critical applications.
            </p>
            <Link
              to="/quote"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center group"
            >
              Get Quote for Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Forging Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step precision forging process ensuring consistent quality and superior results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
                  <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-6 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-red-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why choose impression die forging for your critical components
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-600 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
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
                Applications & Industries
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our impression die forging process is ideal for producing high-strength, 
                precision components across various industries.
              </p>
              <div className="space-y-4">
                {applications.map((application, index) => (
                  <motion.div
                    key={application}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{application}</span>
                  </motion.div>
                ))}
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
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
                alt="Forged Components"
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
              Ready to Experience Superior Forging?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Contact our experts to discuss your specific requirements and discover how our 
              impression die forging can enhance your products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center group"
              >
                Request Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/capabilities"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                View All Capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImpressionDieForging;