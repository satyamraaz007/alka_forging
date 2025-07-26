import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const heroRef = useRef(null);
  const faqRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });

  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          question: 'What materials do you work with?',
          answer: 'We work with a wide range of materials including stainless steel, carbon steel, alloy steel, and microalloy steel. Each material is carefully selected based on your specific application requirements, ensuring optimal performance and durability.'
        },
        {
          question: 'What are your typical lead times?',
          answer: 'Lead times vary depending on the complexity and quantity of the order. For standard components, we typically deliver within 4-6 weeks. For custom or complex parts, lead times may extend to 8-12 weeks. We always provide accurate timelines during the quotation process.'
        },
        {
          question: 'Do you offer prototyping services?',
          answer: 'Yes, we offer comprehensive prototyping services including design consultation, prototype development, and testing. Our rapid prototyping capabilities allow us to quickly validate designs before full-scale production.'
        },
        {
          question: 'What industries do you serve?',
          answer: 'We serve diverse industries including automotive, agriculture, railways, mining & construction, heavy equipment, power transmission, marine, and defense. Our expertise spans multiple sectors with industry-specific quality requirements.'
        }
      ]
    },
    {
      category: 'Quality & Certifications',
      questions: [
        {
          question: 'What quality certifications do you have?',
          answer: 'We are certified to ISO 9001:2015, IATF 16949 for automotive applications, and maintain CBAM compliance for EU exports. We also have ITAR registration for defense sector requirements.'
        },
        {
          question: 'How do you ensure consistent quality?',
          answer: 'We employ rigorous quality control processes including incoming material inspection, in-process monitoring, final inspection using CMM and other precision instruments, and statistical process control to ensure consistent quality across all products.'
        },
        {
          question: 'Can I visit your facility for quality audits?',
          answer: 'Absolutely! We welcome customer visits and quality audits. Please contact us in advance to schedule your visit. We provide comprehensive facility tours and quality documentation reviews as needed.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What is the maximum size component you can forge?',
          answer: 'Our forging presses can handle components ranging from small precision parts weighing a few grams to large industrial components weighing up to 500 kg. Specific dimensional capabilities vary by press and can be discussed for your particular requirements.'
        },
        {
          question: 'Do you provide heat treatment services?',
          answer: 'Yes, we have in-house heat treatment facilities including hardening, tempering, annealing, and normalizing. All heat treatment processes are carefully controlled and documented to ensure optimal material properties.'
        },
        {
          question: 'Can you work from customer drawings or samples?',
          answer: 'Yes, we can work from both customer drawings and samples. Our reverse engineering capabilities using 3D laser scanning allow us to recreate components from samples with high accuracy.'
        },
        {
          question: 'What tolerances can you achieve?',
          answer: 'We can achieve tight tolerances depending on the component geometry and material. Typical forging tolerances are ±0.5mm, with post-machining capabilities achieving tolerances as tight as ±0.025mm where required.'
        }
      ]
    },
    {
      category: 'Business',
      questions: [
        {
          question: 'What are your payment terms?',
          answer: 'Our standard payment terms are 50% advance with order confirmation and 50% before dispatch. For established customers, we can discuss alternative payment arrangements including credit terms based on business relationship and volume.'
        },
        {
          question: 'Do you export internationally?',
          answer: 'Yes, we export to over 20 countries including markets in Europe, North America, Asia, and the Middle East. We handle all export documentation and can arrange shipping through our logistics partners.'
        },
        {
          question: 'What is your minimum order quantity?',
          answer: 'Minimum order quantities vary by component complexity and size. For standard parts, MOQ may be as low as 100 pieces. For custom components requiring new tooling, MOQs are typically higher to justify tooling costs.'
        },
        {
          question: 'Do you provide technical support after delivery?',
          answer: 'Yes, we provide comprehensive technical support including installation guidance, troubleshooting assistance, and performance optimization recommendations. Our technical team is available to support your operations.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  let questionIndex = 0;

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
            <HelpCircle className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Find answers to common questions about our forging services, processes, 
              and capabilities. Can't find what you're looking for? Contact our experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="w-2 h-8 bg-red-600 rounded-full mr-4"></div>
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const currentIndex = questionIndex++;
                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 30 }}
                      animate={faqInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (faqIndex * 0.05) }}
                      className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-red-600 transition-transform duration-300 flex-shrink-0 ${
                            openFAQ === currentIndex ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {openFAQ === currentIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 border-t border-gray-200 pt-4">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team is here to help. Get in touch with us for personalized 
              assistance with your forging requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our technical experts
              </p>
              <a
                href="tel:+911244567890"
                className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-200"
              >
                +91 124 456 7890
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Get detailed technical assistance
              </p>
              <a
                href="mailto:info@alkaforgings.com"
                className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-200"
              >
                info@alkaforgings.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-4">
                Instant support for quick questions
              </p>
              <Link
                to="/contact"
                className="text-red-600 hover:text-red-700 font-semibold transition-colors duration-200"
              >
                Start Chat
              </Link>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Have all your questions answered? Let's discuss your specific forging 
              requirements and how we can help bring your project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Request Quote
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Contact Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;