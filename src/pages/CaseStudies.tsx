import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, CheckCircle, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const heroRef = useRef(null);
  const casesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const casesInView = useInView(casesRef, { once: true });

  const caseStudies = [
    {
      id: 1,
      title: 'Automotive Crankshaft Manufacturing',
      client: 'Leading European Automotive OEM',
      industry: 'Automotive',
      challenge: 'A major European automotive manufacturer needed high-strength crankshafts for their new generation of engines. The challenge was to achieve superior fatigue resistance while maintaining tight dimensional tolerances and reducing overall weight by 15%.',
      solution: 'We developed a custom impression die forging process using advanced microalloy steel with optimized grain structure. Our engineering team implemented 3D laser scanning for quality control and designed specialized heat treatment protocols to achieve the required mechanical properties.',
      results: [
        '25% improvement in fatigue life',
        '15% weight reduction achieved',
        '99.8% dimensional accuracy',
        '30% reduction in production time',
        'Zero defect rate maintained'
      ],
      image: 'https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg',
      beforeImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      afterImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      metrics: {
        timeReduction: '30%',
        costSaving: '20%',
        qualityImprovement: '25%'
      }
    },
    {
      id: 2,
      title: 'Railway Coupling System Upgrade',
      client: 'Indian Railways Infrastructure Corp',
      industry: 'Railways',
      challenge: 'Indian Railways required upgraded coupling components for their high-speed rail project. The existing components were failing under extreme stress conditions, causing safety concerns and maintenance issues. They needed components that could withstand 40% higher loads.',
      solution: 'We engineered a revolutionary forging process using high-strength alloy steel with proprietary heat treatment. Our reverse engineering capabilities allowed us to improve the original design while maintaining compatibility with existing systems.',
      results: [
        '40% increase in load capacity',
        '50% reduction in maintenance frequency',
        '100% safety compliance achieved',
        '6-month faster delivery than competitors',
        'Cost savings of ₹2.5 crores annually'
      ],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
      beforeImage: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg',
      afterImage: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg',
      metrics: {
        timeReduction: '40%',
        costSaving: '35%',
        qualityImprovement: '50%'
      }
    },
    {
      id: 3,
      title: 'Agricultural Equipment Modernization',
      client: 'Major Tractor Manufacturer',
      industry: 'Agriculture',
      challenge: 'A leading tractor manufacturer faced durability issues with their transmission components in harsh agricultural environments. The components were experiencing premature wear in dusty, high-load conditions, leading to frequent breakdowns during critical farming seasons.',
      solution: 'We developed corrosion-resistant forged components using advanced stainless steel alloys. Our team implemented specialized surface treatments and precision forging techniques to create components with superior wear resistance and extended service life.',
      results: [
        '300% increase in component lifespan',
        '80% reduction in field failures',
        '95% customer satisfaction rating',
        '45% reduction in warranty claims',
        'Expanded to 5 new product lines'
      ],
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg',
      beforeImage: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      afterImage: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      metrics: {
        timeReduction: '25%',
        costSaving: '45%',
        qualityImprovement: '300%'
      }
    }
  ];

  const stats = [
    { number: '50+', label: 'Successful Projects', icon: Target },
    { number: '99.5%', label: 'Client Satisfaction', icon: Users },
    { number: '35%', label: 'Average Cost Savings', icon: TrendingUp },
    { number: '25+', label: 'Industries Served', icon: CheckCircle }
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
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Real-world examples of how our precision forging solutions have transformed 
              our clients' operations, delivering measurable results and lasting value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={casesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our innovative forging solutions have helped clients across 
              various industries achieve their goals and exceed performance expectations.
            </p>
          </motion.div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                animate={casesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Header */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                      {study.industry}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-red-100 text-lg">{study.client}</p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Challenge */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Target className="w-6 h-6 text-red-600 mr-3" />
                        Challenge
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                        Solution
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="w-6 h-6 text-red-600 mr-3" />
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                      Key Performance Improvements
                    </h4>
                    <div className="grid grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">
                          {study.metrics.timeReduction}
                        </div>
                        <p className="text-gray-600 font-medium">Time Reduction</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">
                          {study.metrics.costSaving}
                        </div>
                        <p className="text-gray-600 font-medium">Cost Savings</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">
                          {study.metrics.qualityImprovement}
                        </div>
                        <p className="text-gray-600 font-medium">Quality Improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Success Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every successful project follows our proven methodology that ensures 
              optimal results and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Problem Analysis', description: 'Deep dive into client challenges and requirements' },
              { step: 2, title: 'Solution Design', description: 'Custom engineering and process development' },
              { step: 3, title: 'Implementation', description: 'Precision manufacturing with quality control' },
              { step: 4, title: 'Results Delivery', description: 'Measurable outcomes and continuous support' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join the ranks of our satisfied clients who have transformed their operations 
              with our precision forging solutions.
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
                Discuss Your Challenge
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;