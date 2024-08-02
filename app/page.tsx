"use client";
import React, { Suspense } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Button from "@/components/Button";
import { CheckCircle, XCircle } from 'lucide-react';


const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const WhatsAppButton = ({ children, className }:{
  children: React.ReactNode;
  className?: string;
}) => {
  const phoneNumber = "2348012345678"; // Replace with your actual WhatsApp number
  const message = encodeURIComponent("Hi, I'm interested in the SME Accounting Solution Package. Can you provide more information?");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <Button variant="primary" size="large" className={className}>
        {children}
      </Button>
    </a>
  );
};


const PriceComparison = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="mt-12 bg-gray-800 shadow-2xl rounded-lg p-6 md:p-8 hover:shadow-purple-500/50"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Price Comparison</h2>
    <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-semibold text-red-400 mb-2">Without Our Package</h3>
        <p className="text-3xl md:text-4xl font-bold text-red-500">₦300,000</p>
        <p className="text-sm text-gray-400">per month</p>
      </div>
      <div className="text-3xl md:text-5xl font-bold text-purple-400">VS</div>
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-semibold text-green-400 mb-2">With Our Package</h3>
        <p className="text-3xl md:text-4xl font-bold text-green-500">₦100,000</p>
        <p className="text-sm text-gray-400">per month</p>
      </div>
    </div>
    <p className="text-center mt-6 text-lg text-purple-300">Save up to ₦1,500,000 per year!</p>
  </motion.div>
);

const ComparisonTable = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="mt-12 bg-gray-800 shadow-2xl rounded-lg p-6 md:p-8 hover:shadow-purple-500/50"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Package Comparison</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="text-purple-300">
            <th className="p-3">Feature</th>
            <th className="p-3">Our Package</th>
            <th className="p-3">Without Our Package</th>
          </tr>
        </thead>
        <tbody>
          {[
            { feature: "Cost", ours: { text: "Lower cost", positive: true }, theirs: { text: "Higher cost", positive: false } },
            { feature: "Expertise", ours: { text: "Access to team of experts", positive: true }, theirs: { text: "Limited to in-house knowledge", positive: false } },
            { feature: "Scalability", ours: { text: "Easily scalable", positive: true }, theirs: { text: "Limited by staff capacity", positive: false } },
            { feature: "Compliance", ours: { text: "Always up-to-date with regulations", positive: true }, theirs: { text: "Risk of non-compliance", positive: false } }
          ].map((row, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="p-3 font-medium text-purple-300">{row.feature}</td>
              <td className="p-3">
                <div className="flex items-center">
                  {row.ours.positive ? (
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 mr-2" />
                  )}
                  <span className={row.ours.positive ? "text-green-400" : "text-red-400"}>
                    {row.ours.text}
                  </span>
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  {row.theirs.positive ? (
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 mr-2" />
                  )}
                  <span className={row.theirs.positive ? "text-green-400" : "text-red-400"}>
                    {row.theirs.text}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100 overflow-hidden">
      <main className="py-10 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2, 5, 2]} intensity={1} />
              <AnimatedSphere />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-purple-300 mb-4">
              SME Accounting Solution Package
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Reduce the cost of your accounting services by up to 50%.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden hover:shadow-purple-500/50"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src="/image.png"
                  alt="SME Accounting Solution Package"
                  width={500}
                  height={500}
                  className="h-56 w-full object-cover md:w-48 md:h-full transition-opacity duration-300 hover:opacity-80"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-purple-300 mb-4">Why Choose Our Solution?</h2>
                <ul className="space-y-2">
                  {['Professional services at a fraction of the cost', 
                    'Experienced chartered accountants', 
                    'No need for in-house accountant or special software'].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center group"
                    >
                      <svg className="h-5 w-5 md:h-6 md:w-6 text-green-400 mr-2 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="transition-colors duration-300 group-hover:text-purple-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  <WhatsAppButton className="w-full md:w-auto">
                  Get Started
                </WhatsAppButton>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 bg-gray-800 shadow-xl rounded-lg p-6 md:p-8 hover:shadow-purple-500/50"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-6">Our Services</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: 'Financial Statements', description: 'Monthly and annual financial statements preparation and analysis', color: 'indigo' },
                { title: 'Tax Advice', description: 'Guidance on tax implications and compliance', color: 'pink' },
                { title: 'Cost Optimization', description: 'Strategies for cost minimization and revenue maximization', color: 'blue' },
                { title: 'Regulatory Support', description: 'Interface with regulatory authorities on your behalf', color: 'teal' }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-${service.color}-900 p-4 rounded-lg transition-all duration-300 hover:shadow-lg`}
                >
                  <h3 className={`text-lg md:text-xl font-semibold text-${service.color}-300  mb-2 `}>{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <PriceComparison />

          <ComparisonTable />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-lg md:text-xl text-gray-300 mb-4">Ready to transform your accounting processes?</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             <WhatsAppButton>
                Get Started Today
              </WhatsAppButton>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}