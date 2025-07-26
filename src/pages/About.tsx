import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, Award, Globe, Users, Factory, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const certificationsRef = useRef(null);
  const valuesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const timelineInView = useInView(timelineRef, { once: true });
  const certificationsInView = useInView(certificationsRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true });

  const timeline = [
    {
      year: '1998',
      title: 'Foundation',
      description: 'Alka Forgings established in Gurgaon with a vision to become a leading forging company',
      icon: Factory
    },
    {
      year: '2005',
      title: 'First Major Client',
      description: 'Secured partnership with leading automotive manufacturer, establishing credibility in the industry',
      icon: Users
    },
    {
      year: '2010',
      title: 'Infrastructure Expansion',
      description: 'Major facility upgrade with state-of-the-art forging equipment and quality control systems',
      icon: Zap
    },
    {
      year: '2015',
      title: 'International Certification',
      description: 'Achieved ISO 9001:2015 certification and began exporting to European markets',
      icon: Award
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded export operations to North America and Asia, serving 50+ international clients',
      icon: Globe
    },
    {
      year: '2024',
      title: 'Digital Transformation',
      description: 'Implemented Industry 4.0 technologies and achieved CBAM compliance for EU exports',
      icon: Zap
    }
  ];

  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System certification ensuring consistent quality standards',
      year: '2015'
    },
    {
      title: 'IATF 16949',
      description: 'Automotive industry quality management standard for superior performance',
      year: '2018'
    },
    {
      title: 'CBAM Compliance',
      description: 'Carbon Border Adjustment Mechanism compliance for European Union exports',
      year: '2023'
    },
    {
      title: 'ITAR Registration',
      description: 'International Traffic in Arms Regulations for defense and aerospace sectors',
      year: '2022'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to quality in every component we forge'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term partnerships through exceptional service and reliability'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuous investment in technology and process improvement'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Environmentally responsible manufacturing practices for a better future'
    }
  ];

  const achievements = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Global Clients' },
    { number: '8', label: 'Industries Served' }
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
              About Alka Forgings
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Over 25 years of excellence in precision forging, delivering superior quality 
              components to industries worldwide with unwavering commitment to innovation and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
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
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1998 in the industrial hub of Gurgaon, Alka Forgings began with a simple 
                yet ambitious vision: to become India's premier forging company. What started as a 
                small operation has grown into a globally recognized manufacturer serving diverse industries.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, strategic investments in technology, 
                and an unwavering commitment to quality. Today, we export to over 20 countries and maintain 
                long-term partnerships with industry leaders worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As we look to the future, we remain committed to sustainable manufacturing practices, 
                technological advancement, and delivering exceptional value to our customers and stakeholders.
              </p>
              <Link
                to="/director-message"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center group"
              >
                Read Director's Message
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
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
                alt="Company History"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth from a local manufacturer 
              to a globally trusted forging partner.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-red-200 transition-all duration-300">
                      <div className="flex items-center mb-4 justify-center">
                        <item.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-red-600 font-semibold mb-3">{item.year}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every 
              component we forge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-600 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section ref={certificationsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and compliance is validated through international 
              certifications and industry standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={certificationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border-2 border-gray-100 hover:border-red-200 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{cert.title}</h3>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {cert.year}
                  </span>
                </div>
                <p className="text-gray-600">{cert.description}</p>
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
              Partner with Excellence
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Experience the Alka Forgings difference. Let's discuss how our expertise 
              and commitment can contribute to your success.
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
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;