import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, QrCode, Sparkles } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1 based on screen size
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-32 overflow-hidden bg-grid-pattern">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-[1180px]">
        
        {/* Left Column: Text & CTA */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-gray-700 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span>PandaQR: The Permanent QR Code</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-gradient">One Code.</span>
            <br />
            <span className="text-gray-900">Forever Yours.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed font-light"
          >
            Change the destination anytime. The QR code stays exactly the same. 
            Perfect for menus, social links, and event posters. Print once, update infinitely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-start"
          >
            <a
              href="https://app.pandaqr.xyz"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-gray-900 rounded-full overflow-hidden transition-transform active:scale-95 hover:shadow-2xl hover:shadow-gray-900/20 w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              <span className="relative flex items-center gap-2">
                Continue with Google
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto">
              View Examples
            </button>
          </motion.div>
        </div>

        {/* Right Column: 3D Panda Mascot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full flex justify-center lg:justify-end perspective-1000"
          style={{ perspective: 1000 }}
        >
          <motion.div
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            animate={{
              rotateX: isHovering ? mousePosition.y * -15 : 0,
              rotateY: isHovering ? mousePosition.x * 15 : 0,
              y: [0, -20, 0] // Continuous float animation
            }}
            transition={{ 
              rotateX: { type: "spring", stiffness: 100, damping: 30 },
              rotateY: { type: "spring", stiffness: 100, damping: 30 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]"
          >
            {/* The Panda Mascot Image */}
            <div className="absolute inset-0 flex items-center justify-center z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              {/* Note: The user should place the Panda mascot image at /images/panda-mascot.png in the public directory */}
              <img 
                src="/images/panda-mascot.png" 
                alt="PandaQR Mascot" 
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback if image isn't added yet
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=800&q=80";
                  (e.target as HTMLImageElement).className = "w-64 h-64 object-cover rounded-full shadow-2xl mix-blend-luminosity";
                }}
              />
            </div>

            {/* Glowing Orb Behind Panda */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-400 rounded-full blur-[100px] opacity-40 animate-pulse-slow"></div>

            {/* Decorative Floating Elements around Panda */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -left-8 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl z-20"
            >
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              </div>
              <div className="text-sm font-semibold whitespace-nowrap">Always Active</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 -right-4 glass-panel px-5 py-4 rounded-2xl shadow-xl z-20 flex flex-col gap-2 max-w-[200px]"
            >
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-brand-600" />
                <span className="text-xs text-gray-500 font-medium">Dynamic Link</span>
              </div>
              <div className="text-sm font-semibold truncate text-gray-900">pandaqr.xyz/q/grouplink</div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
