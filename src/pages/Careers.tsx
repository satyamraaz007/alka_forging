import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Clock, DollarSign, Users, Heart, Shield, GraduationCap, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const jobsRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const benefitsInView = useInView(benefitsRef, { once: true });
  const jobsInView = useInView(jobsRef, { once: true });
  const testimonialsInView = useInView(testimonialsRef, { once: true });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical insurance for employee and family, regular health checkups, and wellness programs.'
    },
    {
      icon: DollarSign,
      title: 'Financial Security',
      description: 'Competitive salaries, performance bonuses, provident fund, gratuity, and life insurance coverage.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous training programs, skill development workshops, and educational assistance for career growth.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'State-of-the-art safety equipment, comprehensive safety training, and zero-accident workplace culture.'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, paid time off, maternity/paternity leave, and family-friendly policies.'
    },
    {
      icon: Star,
      title: 'Recognition & Growth',
      description: 'Merit-based promotions, employee recognition programs, and clear career advancement paths.'
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Forging Engineer',
      department: 'Engineering',
      location: 'Gurgaon, Haryana',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹8-12 LPA',
      description: 'Lead forging process development and optimization for automotive and industrial components. Expertise in impression die forging, material science, and quality control required.',
      requirements: ['B.Tech/M.Tech in Mechanical/Metallurgy', '5+ years forging experience', 'Knowledge of FEA software', 'Strong problem-solving skills'],
      urgent: true
    },
    {
      id: 2,
      title: 'Quality Control Manager',
      department: 'Quality Assurance',
      location: 'Gurgaon, Haryana',
      type: 'Full-time',
      experience: '4-6 years',
      salary: '₹6-9 LPA',
      description: 'Oversee quality control processes, implement quality systems, and ensure compliance with international standards including ISO 9001 and IATF 16949.',
      requirements: ['B.Tech in Mechanical/Industrial Engineering', 'ISO 9001 Lead Auditor certification', 'Experience with CMM and testing equipment', 'Knowledge of statistical process control'],
      urgent: false
    },
    {
      id: 3,
      title: 'CNC Machine Operator',
      department: 'Production',
      location: 'Gurgaon, Haryana',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹3-5 LPA',
      description: 'Operate and maintain CNC machining centers for precision finishing of forged components. Programming and setup experience preferred.',
      requirements: ['ITI/Diploma in Mechanical', '2+ years CNC experience', 'Knowledge of G&M codes', 'Blueprint reading skills'],
      urgent: false
    },
    {
      id: 4,
      title: 'Sales Engineer - International',
      department: 'Sales & Marketing',
      location: 'Gurgaon, Haryana',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹5-8 LPA',
      description: 'Develop and maintain relationships with international clients, prepare technical proposals, and support export business development.',
      requirements: ['B.Tech in Mechanical Engineering', 'Export sales experience', 'Excellent English communication', 'Willingness to travel internationally'],
      urgent: true
    },
    {
      id: 5,
      title: 'Maintenance Technician',
      department: 'Maintenance',
      location: 'Gurgaon, Haryana',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹4-6 LPA',
      description: 'Perform preventive and corrective maintenance on forging presses, CNC machines, and auxiliary equipment.',
      requirements: ['ITI in Electrical/Mechanical', 'Industrial maintenance experience', 'Knowledge of hydraulics and pneumatics', 'PLC troubleshooting skills'],
      urgent: false
    },
    {
      id: 6,
      title: 'Graduate Trainee Engineer',
      department: 'Multiple Departments',
      location: 'Gurgaon, Haryana',
      type: 'Full-time',
      experience: 'Fresher',
      salary: '₹3-4 LPA',
      description: 'One-year comprehensive training program covering all aspects of forging operations, quality control, and production management.',
      requirements: ['B.Tech in Mechanical/Metallurgy', 'Fresh graduate (2023-2024 batch)', 'Strong academic record', 'Eagerness to learn'],
      urgent: false
    }
  ];

  const testimonials = [
    {
      name: 'Amit Sharma',
      position: 'Senior Forging Engineer',
      tenure: '6 years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      quote: 'Working at Alka Forgings has been an incredible journey. The company provides excellent growth opportunities and the management truly cares about employee development. I\'ve grown both professionally and personally here.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      position: 'Quality Manager',
      tenure: '4 years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      quote: 'The work environment here is fantastic. There\'s a strong emphasis on quality and continuous improvement. The team is supportive and the company invests heavily in our training and development.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      position: 'Production Supervisor',
      tenure: '8 years',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      quote: 'Alka Forgings is more than just a workplace - it\'s a family. The safety standards are excellent, and the company genuinely cares about our well-being. I\'m proud to be part of this organization.',
      rating: 5
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
            <Users className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Build your career with India's leading forging company. Discover opportunities 
              for growth, innovation, and making a meaningful impact in manufacturing excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center group"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#benefits"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Why Work With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Where Excellence Meets Opportunity
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Alka Forgings, we believe our people are our greatest asset. We foster a culture 
                of innovation, continuous learning, and mutual respect where every team member 
                contributes to our shared success.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 25 years of industry leadership, we offer unparalleled opportunities 
                for professional growth in a dynamic, technology-driven environment. Join us 
                in shaping the future of precision forging.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
                  <p className="text-gray-600">Team Members</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                  <p className="text-gray-600">Employee Satisfaction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">3.2</div>
                  <p className="text-gray-600">Avg. Tenure (Years)</p>
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
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                alt="Team at Work"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" ref={benefitsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Employee Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive benefits and a supportive work environment 
              that promotes both professional growth and personal well-being.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" ref={jobsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore career opportunities across various departments and find 
              the perfect role to advance your professional journey.
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-red-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      {job.urgent && (
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Urgent
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-6 flex flex-col sm:flex-row lg:flex-col gap-3 mt-4 lg:mt-0">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                      Apply Now
                    </button>
                    <button className="border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Submit General Application
            </button>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our employees about their experience working at Alka Forgings 
              and why they choose to build their careers with us.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1 text-center">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </h3>
                  <p className="text-red-600 font-semibold">
                    {testimonials[activeTestimonial].position}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeTestimonial].tenure} with company
                  </p>
                  <div className="flex justify-center space-x-1 mt-2">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join our team of passionate professionals and help shape the future 
              of precision forging. Your career growth starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center group">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Contact HR Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;