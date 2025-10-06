/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Mail } from 'lucide-react';
import { imgVuesaxLinearSort } from "@/assets/svgs/2jcut";



export default function FloatingMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBookCall = () => {
    window.open('https://calendly.com', '_blank');
  };

  const handleChat = () => {
    window.location.href = 'mailto:hello@vearah.com';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-50">
      {/* Navigation Menu */}
      <div className="fixed bottom-[30px] left-1/2 transform -translate-x-1/2 z-50 w-fu">
        <div className="bg-gradient-to-t from-[#010101] to-[#171717] rounded-full p-2 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-center gap-2 min-w-[400px]">
            {/* Book Button - Active State */}
            <CTAButton onClick={handleBookCall}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-base font-['Urbanist',_sans-serif] font-medium whitespace-nowrap">Book a call</span>
              </div>
            </CTAButton>

            {/* Hamburger Menu */}
            <motion.button
              className="p-4 rounded-full hover:bg-white/10 transition-colors duration-200"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
            >
              <img className="w-6 h-6" src={imgVuesaxLinearSort} alt="Menu" />
            </motion.button>

            {/* Chat Button - Active State */}
            <CTAButton isActive onClick={handleChat}>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-base font-['Urbanist',_sans-serif] font-semibold whitespace-nowrap">Let`s chat</span>
              </div>
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[120px] left-1/2 transform -translate-x-1/2 z-40"
          >
            <div className="bg-gradient-to-t from-[#010101] to-[#171717] rounded-2xl p-4 border border-white/10 shadow-2xl min-w-[300px]">
              <div className="space-y-2">
                <motion.button
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-['Urbanist',_sans-serif]"
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Add navigation logic here
                  }}
                >
                  About
                </motion.button>
                <motion.button
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-['Urbanist',_sans-serif]"
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Add navigation logic here
                  }}
                >
                  Work
                </motion.button>
                <motion.button
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-['Urbanist',_sans-serif]"
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Add navigation logic here
                  }}
                >
                  Process
                </motion.button>
                <motion.button
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-['Urbanist',_sans-serif]"
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Add navigation logic here
                  }}
                >
                  Microscopy
                </motion.button>
                <motion.button
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-['Urbanist',_sans-serif]"
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleChat();
                  }}
                >
                  Contact
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

function CTAButton({ children, isActive, onClick, disabled }: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.button
      className={`
        flex-1 relative rounded-[45px] cursor-pointer px-8 py-4
        transition-all duration-200
        ${isActive
          ? 'bg-white/10 text-white opacity-100'
          : disabled
            ? 'text-white/40 opacity-40 cursor-not-allowed'
            : 'text-white/60 hover:text-white/80 hover:bg-white/5'
        }
      `}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}