/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Mail } from 'lucide-react';
import { imgVuesaxLinearSort } from "@/assets/svgs/2jcut";

export default function FloatingMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBookCall = () => {
    window.open('https://calendly.com/met4guy', '_blank');
  };

  const handleChat = () => {
    window.location.href = 'mailto:hello@vearah.com';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-50">
      {/* Main CTA bar (500x89, centered) */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-40 z-50">
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
        transition-all duration-200 text-center'
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