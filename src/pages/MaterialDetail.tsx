import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, TrendingUp, Shield, Award } from 'lucide-react';

const MaterialDetail = () => {
  const { material } = useParams();
  const heroRef = useRef(null);
  const detailsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const detailsInView = useInView(detailsRef, { once: true });

  const materialData: { [key: string]: any } = {
    'stainless-steel': {
      name: 'Stainless Steel',
      description: 'Premium corrosion-resistant steel with exceptional durability and hygiene properties',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
      composition: {
        'Chromium (Cr)': '16-26%',
        'Nickel (Ni)': '6-22%',
        'Carbon (C)': '≤0.08%',
        'Manganese (Mn)': '≤2%',
        'Silicon (Si)': '≤1%',
        'Iron (Fe)': 'Balance'
      },
      properties: [
        'Excellent corrosion resistance',
        'High strength-to-weight ratio',
        'Outstanding hygiene properties',
        'Heat resistance up to 1000°C',
        'Low maintenance requirements',
        'Recyclable and sustainable'
      ],
      applications: [
        'Food processing equipment',
        'Chemical and pharmaceutical industries',
        'Medical and surgical instruments',
        'Marine and offshore applications',
        'Architectural and construction',
        'Automotive exhaust systems'
      ],
      grades: ['304', '316', '321', '347', '410', '420'],
      standards: ['ASTM A276', 'EN 10088', 'JIS G4303', 'AISI Standards']
    },
    'carbon-steel': {
      name: 'Carbon Steel',
      description: 'Versatile and economical steel with excellent mechanical properties for structural applications',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      composition: {
        'Carbon (C)': '0.05-2.0%',
        'Manganese (Mn)': '0.30-1.65%',
        'Silicon (Si)': '0.15-0.35%',
        'Phosphorus (P)': '≤0.04%',
        'Sulfur (S)': '≤0.05%',
        'Iron (Fe)': 'Balance'
      },
      properties: [
        'High tensile strength',
        'Excellent ductility and formability',
        'Good weldability',
        'Cost-effective solution',
        'Wide range of hardness levels',
        'Proven reliability'
      ],
      applications: [
        'Structural construction',
        'Automotive components',
        'Machinery and equipment',
        'Pipeline and pressure vessels',
        'Railway infrastructure',
        'General engineering applications'
      ],
      grades: ['1008', '1018', '1045', '1060', '1080', '1095'],
      standards: ['ASTM A36', 'EN 10025', 'JIS G3101', 'IS 2062']
    },
    'alloy-steel': {
      name: 'Alloy Steel',
      description: 'Enhanced steel with superior mechanical properties through strategic alloying elements',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg',
      composition: {
        'Carbon (C)': '0.15-0.50%',
        'Manganese (Mn)': '0.50-2.0%',
        'Chromium (Cr)': '0.50-18%',
        'Nickel (Ni)': '0.50-37%',
        'Molybdenum (Mo)': '0.15-4%',
        'Iron (Fe)': 'Balance'
      },
      properties: [
        'Enhanced hardness and strength',
        'Improved toughness and impact resistance',
        'Better hardenability',
        'Wear and abrasion resistance',
        'Fatigue resistance',
        'Temperature stability'
      ],
      applications: [
        'Gear manufacturing',
        'Automotive crankshafts',
        'Bearing components',
        'Tool and die making',
        'Heavy machinery parts',
        'Aerospace components'
      ],
      grades: ['4140', '4340', '8620', '9310', '52100', '6150'],
      standards: ['ASTM A29', 'EN 10083', 'JIS G4053', 'SAE J404']
    },
    'microalloy-steel': {
      name: 'Microalloy Steel',
      description: 'Advanced steel with fine-tuned properties through controlled microalloying additions',
      image: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg',
      composition: {
        'Carbon (C)': '0.05-0.25%',
        'Manganese (Mn)': '0.50-2.0%',
        'Niobium (Nb)': '0.01-0.10%',
        'Vanadium (V)': '0.01-0.15%',
        'Titanium (Ti)': '0.01-0.20%',
        'Iron (Fe)': 'Balance'
      },
      properties: [
        'Fine grain structure',
        'High strength-to-weight ratio',
        'Excellent formability',
        'Good weldability',
        'Controlled precipitation hardening',
        'Cost-effective high performance'
      ],
      applications: [
        'Oil and gas pipelines',
        'Structural steel beams',
        'Automotive chassis components',
        'Pressure vessel construction',
        'Bridge construction',
        'Wind turbine towers'
      ],
      grades: ['X60', 'X65', 'X70', 'S355', 'S420', 'S460'],
      standards: ['API 5L', 'EN 10025-4', 'ASTM A572', 'ISO 3183']
    }
  };

  const currentMaterial = materialData[material as string];

  if (!currentMaterial) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Material Not Found</h1>
          <Link to="/materials" className="text-red-600 hover:text-red-700">
            Back to Materials
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentMaterial.image})`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/materials" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Materials
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {currentMaterial.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
              {currentMaterial.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section ref={detailsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Composition */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={detailsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 text-red-600 mr-3" />
              Chemical Composition
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(currentMaterial.composition).map(([element, percentage]) => (
                <div key={element} className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="font-bold text-lg text-gray-900">{percentage}</div>
                  <div className="text-sm text-gray-600">{element}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Properties */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={detailsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center">
                <Shield className="w-8 h-8 text-red-600 mr-3" />
                Key Properties
              </h2>
              <div className="space-y-4">
                {currentMaterial.properties.map((property: string, index: number) => (
                  <motion.div
                    key={property}
                    initial={{ opacity: 0, x: -30 }}
                    animate={detailsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{property}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={detailsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center">
                <Award className="w-8 h-8 text-red-600 mr-3" />
                Applications
              </h2>
              <div className="space-y-4">
                {currentMaterial.applications.map((application: string, index: number) => (
                  <motion.div
                    key={application}
                    initial={{ opacity: 0, x: 30 }}
                    animate={detailsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{application}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Grades and Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Grades</h3>
              <div className="grid grid-cols-3 gap-3">
                {currentMaterial.grades.map((grade: string) => (
                  <div key={grade} className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                    <span className="font-semibold text-red-600">{grade}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Standards Compliance</h3>
              <div className="space-y-3">
                {currentMaterial.standards.map((standard: string) => (
                  <div key={standard} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <span className="font-semibold text-gray-700">{standard}</span>
                  </div>
                ))}
              </div>
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
              Ready to Work with {currentMaterial.name}?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Get expert consultation on material selection and custom forging solutions 
              tailored to your specific requirements.
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

export default MaterialDetail;