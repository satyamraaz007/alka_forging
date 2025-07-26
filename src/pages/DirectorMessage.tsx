import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const DirectorMessage = () => {
  const heroRef = useRef(null);
  const messageRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const messageInView = useInView(messageRef, { once: true });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/60"></div>
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
          >
            <Link 
              to="/about" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to About Us
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Director's Message
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
              A personal message from our leadership on our vision, values, and commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Message Section */}
      <section ref={messageRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Director Photo and Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={messageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="relative mb-6">
                    <img
                      src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                      alt="Director"
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rajesh Kumar</h3>
                  <p className="text-red-600 font-semibold mb-4">Managing Director</p>
                  <p className="text-gray-600 text-sm mb-4">
                    B.Tech Mechanical Engineering<br />
                    MBA Operations Management<br />
                    25+ years in Manufacturing
                  </p>
                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-500 italic">
                      "Leading with vision, delivering with precision"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={messageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative mb-8">
                <Quote className="w-16 h-16 text-red-100 absolute -top-4 -left-4" />
                <div className="relative z-10">
                  <p className="text-2xl md:text-3xl font-light text-gray-700 italic leading-relaxed mb-8">
                    "Our journey at Alka Forgings has been one of continuous evolution, 
                    driven by an unwavering commitment to excellence and innovation."
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  When we founded Alka Forgings over two decades ago, we had a simple yet ambitious vision: 
                  to create a company that would redefine standards in the forging industry. Today, as I 
                  reflect on our journey, I am proud to say that we have not only achieved that vision 
                  but have continuously raised the bar for ourselves and the industry.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our success is built on three fundamental pillars: <strong>Quality</strong>, 
                  <strong>Innovation</strong>, and <strong>Relationships</strong>. Quality is not just 
                  about meeting specifications; it's about exceeding expectations and delivering components 
                  that our clients can rely on for their most critical applications. Innovation drives us 
                  to constantly improve our processes, adopt new technologies, and find better ways to 
                  serve our customers.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  But perhaps most importantly, it's the relationships we've built with our customers, 
                  suppliers, and employees that truly define who we are. These partnerships have been 
                  the foundation of our growth and success. Every component we forge carries with it 
                  the trust that our partners have placed in us.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  As we look to the future, I see tremendous opportunities ahead. The global shift towards 
                  sustainable manufacturing aligns perfectly with our values and capabilities. We are 
                  investing heavily in green technologies, renewable energy, and processes that minimize 
                  our environmental footprint while maintaining the highest quality standards.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our recent achievements in digital transformation and Industry 4.0 implementation 
                  position us well for the next phase of growth. We are not just keeping pace with 
                  technological advancement; we are leading it in our industry.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  To our customers, I want to assure you that our commitment to serving you with 
                  excellence remains stronger than ever. To our employees, thank you for your dedication 
                  and for being the driving force behind our success. To our partners and suppliers, 
                  we value the collaborative relationships that make everything we do possible.
                </p>

                <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600 mb-8">
                  <p className="text-gray-700 italic font-medium">
                    "At Alka Forgings, we don't just forge metal; we forge partnerships, 
                    forge innovation, and forge a sustainable future for generations to come."
                  </p>
                </div>

                <div className="border-t pt-6">
                  <p className="text-gray-700 mb-2">With warm regards,</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                      alt="Signature"
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-bold text-xl text-gray-900">Rajesh Kumar</p>
                      <p className="text-red-600 font-semibold">Managing Director</p>
                      <p className="text-gray-600 text-sm">Alka Forgings Private Limited</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the globally preferred partner for precision forging solutions, 
                recognized for our commitment to quality, innovation, and sustainable 
                manufacturing practices. We envision a future where Alka Forgings 
                components are integral to the world's most critical applications, 
                contributing to progress and prosperity across industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver superior forged components that exceed customer expectations 
                through continuous innovation, advanced manufacturing processes, and 
                an unwavering commitment to quality. We strive to build lasting 
                partnerships while maintaining the highest standards of environmental 
                responsibility and social consciousness.
              </p>
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
              Join Our Journey
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Experience the difference that visionary leadership and unwavering commitment 
              to excellence can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Partner with Us
              </Link>
              <Link
                to="/careers"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DirectorMessage;