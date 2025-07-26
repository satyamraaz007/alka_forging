import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Car, Tractor, Train, Pickaxe, Cog, Zap, Ship, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
  const heroRef = useRef(null);
  const industriesRef = useRef(null);
  const statsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const industriesInView = useInView(industriesRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });

  const industries = [
    {
      icon: Car,
      title: 'Automotive',
      description: 'High-performance forged components for automotive applications including crankshafts, connecting rods, steering knuckles, and transmission parts. Our precision forging ensures optimal strength-to-weight ratios and durability for demanding automotive environments.',
      image: 'https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg',
      products: ['Crankshafts', 'Connecting Rods', 'Steering Components', 'Suspension Parts'],
      clientLogos: ['BMW', 'Mercedes', 'Audi', 'Toyota']
    },
    {
      icon: Tractor,
      title: 'Agriculture',
      description: 'Robust agricultural equipment components designed to withstand harsh field conditions. We manufacture forged parts for tractors, harvesters, tillage equipment, and irrigation systems with superior durability and corrosion resistance.',
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg',
      products: ['Tractor Components', 'Harvester Parts', 'Tillage Tools', 'Hydraulic Components'],
      clientLogos: ['John Deere', 'Case IH', 'New Holland', 'Kubota']
    },
    {
      icon: Train,
      title: 'Railways',
      description: 'Critical railway infrastructure components including coupling systems, brake components, axles, and wheelsets. Our forged railway parts meet stringent safety standards and provide exceptional reliability for passenger and freight transportation.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
      products: ['Coupling Systems', 'Brake Components', 'Wheelsets', 'Axle Components'],
      clientLogos: ['Indian Railways', 'Siemens', 'Alstom', 'GE Transportation']
    },
    {
      icon: Pickaxe,
      title: 'Mining & Construction',
      description: 'Heavy-duty forged components for mining and construction equipment. We produce wear-resistant parts for excavators, bulldozers, crushers, and mining trucks that can withstand extreme operating conditions and abrasive environments.',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg',
      products: ['Excavator Components', 'Crusher Parts', 'Bucket Teeth', 'Track Pins'],
      clientLogos: ['Caterpillar', 'Komatsu', 'Hitachi', 'Volvo CE']
    },
    {
      icon: Cog,
      title: 'Heavy Equipment',
      description: 'Precision-forged components for industrial machinery and heavy equipment applications. Our products include gears, shafts, flanges, and structural components that deliver superior performance in demanding industrial environments.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      products: ['Industrial Gears', 'Drive Shafts', 'Flanges', 'Structural Components'],
      clientLogos: ['Atlas Copco', 'Sandvik', 'Liebherr', 'Terex']
    },
    {
      icon: Zap,
      title: 'Power Transmission',
      description: 'High-strength forged components for power generation and transmission systems. We manufacture turbine components, generator parts, and transmission system elements that ensure reliable power delivery and optimal efficiency.',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg',
      products: ['Turbine Blades', 'Generator Components', 'Transmission Gears', 'Power Couplings'],
      clientLogos: ['GE Power', 'Siemens Energy', 'ABB', 'Schneider Electric']
    },
    {
      icon: Ship,
      title: 'Marine',
      description: 'Corrosion-resistant marine components for shipbuilding and offshore applications. Our forged marine parts include propeller shafts, rudder components, and deck equipment designed to withstand harsh marine environments.',
      image: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg',
      products: ['Propeller Shafts', 'Marine Valves', 'Anchor Components', 'Deck Equipment'],
      clientLogos: ['Maersk', 'Hyundai Heavy', 'Samsung Heavy', 'Fincantieri']
    },
    {
      icon: Shield,
      title: 'Defense',
      description: 'Mission-critical forged components for defense and aerospace applications. We produce high-precision parts for military vehicles, aircraft, and defense systems that meet stringent quality and security requirements.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      products: ['Aircraft Components', 'Vehicle Parts', 'Weapon Systems', 'Armor Components'],
      clientLogos: ['DRDO', 'HAL', 'BEL', 'L&T Defence']
    }
  ];

  const stats = [
    { number: '8', label: 'Industries Served', suffix: '+' },
    { number: '500', label: 'Global Clients', suffix: '+' },
    { number: '25', label: 'Years Experience', suffix: '+' },
    { number: '99', label: 'Client Satisfaction', suffix: '%' }
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
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Trusted by leading companies across diverse industries worldwide, 
              delivering precision-forged components that drive innovation and performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section ref={industriesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serving Diverse Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans multiple industries, providing customized forging 
              solutions that meet the unique demands of each sector.
            </p>
          </motion.div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 50 }}
                animate={industriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Products</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.products.map((product) => (
                        <div key={product} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Trusted Clients</h4>
                    <div className="flex flex-wrap gap-3">
                      {industry.clientLogos.map((client) => (
                        <span key={client} className="bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 border">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
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
                Global Reach, Local Expertise
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our extensive experience across multiple industries has established us as a 
                trusted partner for companies worldwide. We understand the unique challenges 
                of each sector and deliver tailored solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-red-600 mb-2">Export Markets</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• European Union</li>
                    <li>• North America</li>
                    <li>• Middle East</li>
                    <li>• Southeast Asia</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-red-600 mb-2">Certifications</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• ISO 9001:2015</li>
                    <li>• IATF 16949</li>
                    <li>• CBAM Compliant</li>
                    <li>• ITAR Registered</li>
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
                alt="Global Operations"
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
              Partner with Industry Leaders
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who trust Alka Forgings for their 
              critical component needs. Let's discuss how we can support your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center group"
              >
                Request Industry Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;