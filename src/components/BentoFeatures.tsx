import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Utensils, Link2, QrCode, RefreshCw, Zap, Shield } from 'lucide-react';

const features = [
  {
    title: 'WeChat Groups, immortalized.',
    description: 'Stop worrying about the 7-day expiration. Update the backend URL, and your printed posters keep bringing people in.',
    icon: MessageCircle,
    color: 'text-green-600',
    bg: 'bg-green-50',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    type: 'group-chat'
  },
  {
    title: 'Dynamic Menus',
    description: 'Prices change. Seasonal items come and go. Your table QR stays the same forever.',
    icon: Utensils,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    colSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
    type: 'menu'
  },
  {
    title: 'The Ultimate Multi-link',
    description: 'Linktree in a QR. Point your code to a custom landing page with all your social profiles, videos, and links.',
    icon: Link2,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    colSpan: 'col-span-1 md:col-span-4 lg:col-span-4',
    type: 'multilink'
  }
];

const miniStats = [
  { label: 'Real-time Analytics', icon: Zap },
  { label: 'Version History', icon: RefreshCw },
  { label: 'Privacy First', icon: Shield },
];

export default function BentoFeatures() {
  return (
    <section id="features" className="py-32 relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built for the real world.</h2>
          <p className="text-xl text-gray-500 font-light">
            Stop re-printing marketing materials. PandaQR is designed to save you time, money, and headaches across all your physical touchpoints.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors duration-500 ${f.colSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent z-0"></div>
              
              <div className="relative z-10 p-10 h-full flex flex-col pointer-events-none">
                <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-6`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
                  {f.description}
                </p>
                
                {/* Clean, Light-Colored Minimalist Dynamic Visuals */}
                {f.type === 'group-chat' && (
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute bottom-0 right-10 flex gap-4"
                  >
                    <div className="w-56 h-36 bg-white border border-gray-100 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.03)] flex flex-col p-6">
                      <div className="w-16 h-4 bg-gray-100 rounded-full mb-5"></div>
                      <div className="w-full h-3 bg-gray-50 rounded-full mb-3"></div>
                      <div className="w-3/4 h-3 bg-gray-50 rounded-full mb-3"></div>
                      <div className="w-1/2 h-3 bg-gray-50 rounded-full"></div>
                    </div>
                  </motion.div>
                )}
                
                {f.type === 'menu' && (
                  <motion.div 
                    animate={{ y: [0, -6, 0] }} 
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-6 right-6 flex"
                  >
                    <div className="w-32 h-32 bg-white border border-gray-100 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center p-4">
                      <QrCode className="w-10 h-10 text-gray-200 mb-3" />
                      <div className="w-12 h-2 bg-gray-100 rounded-full mb-2"></div>
                      <div className="w-8 h-2 bg-gray-100 rounded-full"></div>
                    </div>
                  </motion.div>
                )}

                {f.type === 'multilink' && (
                  <div className="hidden md:flex absolute inset-y-0 right-16 items-center justify-center">
                    <div className="relative w-[400px] h-full flex flex-col justify-center gap-5">
                      <motion.div 
                        animate={{ x: [0, -10, 0] }} 
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="w-64 h-16 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex items-center px-4 self-end"
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-50 mr-4"></div>
                        <div className="w-32 h-2 bg-gray-100 rounded-full"></div>
                      </motion.div>

                      <motion.div 
                        animate={{ x: [0, 15, 0] }} 
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="w-72 h-16 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex items-center px-4 self-start ml-8"
                      >
                        <div className="w-8 h-8 rounded-full bg-pink-50 mr-4"></div>
                        <div className="w-24 h-2 bg-gray-100 rounded-full"></div>
                      </motion.div>

                      <motion.div 
                        animate={{ x: [0, -8, 0] }} 
                        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
                        className="w-64 h-16 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex items-center px-4 self-end mr-12"
                      >
                        <div className="w-8 h-8 rounded-full bg-green-50 mr-4"></div>
                        <div className="w-20 h-2 bg-gray-100 rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini stats bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex flex-wrap justify-center gap-10 border-t border-gray-100 pt-10"
        >
          {miniStats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-600 font-medium">
              <stat.icon className="w-5 h-5 text-brand-500" />
              {stat.label}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
