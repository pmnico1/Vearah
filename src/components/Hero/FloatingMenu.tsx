/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { gsap } from 'gsap';
import { imgVuesaxLinearSort } from "@/assets/svgs/2jcut";

export default function FloatingMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      // Start hidden
      const animation = gsap.to(menuRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        delay: 3,
      });

      return () => {
        animation.kill();
      };
    }
  }, []); // Empty dependency array for mount-only effect

  useEffect(() => {
    // Observe footer visibility
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of footer is visible
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      ref={menuRef}
      className={`z-50 opacity-0 transition-opacity duration-300 ${isFooterVisible ? '!opacity-0 pointer-events-none' : ''}`}
    >
      {/* Main CTA bar (500x89, centered) */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-20 lg:bottom-2 z-50">
        <div
          className="rounded-[230px] w-full max-w-[500px] p-2 border-t-2 border-gray-600 shadow-2xl"
          style={{
            height: 89,
            backgroundImage:
              'radial-gradient(151.05% 43.18% at 51.71% 0%, rgba(129,187,255,0.3) 0%, rgba(25,25,25,0) 100%), linear-gradient(360deg, #010101 0%, #171717 100%)',
          }}
        >
          <div className="flex items-center justify-center gap-4 w-full h-full">
            {/* Book a call (206x73) */}
            <a href="/contact" aria-label="Contact">
              <CTAButton isActive>
                <span className="text-[16px] leading-[19px] font-['Urbanist',_sans-serif] font-semibold whitespace-nowrap">
                  Contact us
                </span>
              </CTAButton>
            </a>


            {/* Main menu (72x72) */}
            <motion.button
              className="rounded-[45px] transition-colors duration-200 flex items-center justify-center"
              style={{ width: 72, height: 72 }}
              whileHover={{ scale: 1.08, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              aria-label="Main menu"
            >
              <img className="w-6 h-6" src={imgVuesaxLinearSort} alt="Menu" />
            </motion.button>

            {/* Let’s chat (206x73) */}
            <CTAButton onClick={handleBookCall}>
              <span className="text-[16px] leading-[19px] font-['Urbanist', _sans-serif] font-medium whitespace-nowrap">
                Book a call
              </span>
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
            className="fixed left-1/2 -translate-x-1/2 bottom-48 lg:bottom-[120px] z-40"
          >
            <div style={{
              backgroundImage:
                'radial-gradient(151.05% 43.18% at 71.71% 0%, rgba(129,187,255,0.3) 0%, rgba(25,25,25,0) 100%), linear-gradient(360deg, #010101 0%, #171717 100%)',
            }} className="rounded-2xl p-4 border border-[#222222] shadow-2xl min-w-[450px]">
              <div className="space-y-2">
                <motion.button
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-['Urbanist',_sans-serif]"
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = '/';
                  }}
                >
                  Home
                </motion.button>
                <motion.button
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-['Urbanist',_sans-serif]"
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = '/case-study';
                  }}
                >
                  Case Study
                </motion.button>
                <motion.button
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-['Urbanist',_sans-serif]"
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  FAQ
                </motion.button>
                <motion.button
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-['Urbanist',_sans-serif]"
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = '/contact';
                  }}
                >
                  Contact us
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

function CTAButton({
  children,
  isActive,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.button
      className={`
        relative rounded-[45px] cursor-pointer
        transition-all duration-200 text-center
        ${isActive
          ? 'text-white'
          : disabled
            ? 'text-white/40 opacity-40 cursor-not-allowed'
            : 'text-white/60 hover:text-white/80 hover:bg-white/5'
        }
      `}
      style={{ width: 206, height: 73, padding: '27px 32px' }}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}